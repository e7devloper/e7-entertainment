import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, StaggerGroup, StaggerItem } from "../../components/Reveal";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { getProductsForSubcategory, getSubcategoriesForCategory } from "../../products/data";
import { getOpportunity, opportunities, type ProjectStatus } from "../data";

const steps = [
  {
    title: "Tell us what you have",
    text: "Land, a venue, a market or an idea. We look at the site, the audience and your budget.",
  },
  {
    title: "Plan it together",
    text: "We put forward a concept, a product list and a quote, and refine them with you.",
  },
  {
    title: "Source and build",
    text: "We order direct from the factory, handle shipping and customs, and install on site.",
  },
  {
    title: "Open and support",
    text: "We commission, train your team, and stay on for spare parts and maintenance.",
  },
];

const statusStyle: Record<ProjectStatus, string> = {
  Completed: "bg-ink text-white",
  "Under construction": "bg-gold text-ink",
  Installing: "bg-gold text-ink",
  Ongoing: "bg-gold text-ink",
  "In design": "border border-line bg-white text-ink-soft",
};

export function generateStaticParams() {
  return opportunities.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const opportunity = getOpportunity(slug);
  if (!opportunity) return { title: "Opportunities — E7 Entertainments Group" };
  return {
    title: `${opportunity.title} — E7 Entertainments Group`,
    description: opportunity.description,
  };
}

export default async function OpportunityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const opportunity = getOpportunity(slug);
  if (!opportunity) notFound();

  const ranges = getSubcategoriesForCategory(opportunity.productCategory).map((sub) => ({
    sub,
    items: getProductsForSubcategory(opportunity.productCategory, sub.slug),
  }));
  const stocked = ranges.filter((r) => r.items.length > 0);
  const onRequest = ranges.filter((r) => r.items.length === 0).map((r) => r.sub);
  const others = opportunities.filter((o) => o.slug !== opportunity.slug);

  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteHeader />

      {/* Banner — navy-duotone photograph, matching the About page */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-24">
        <div className="pointer-events-none absolute inset-0 isolate bg-ink">
          <Image
            src={opportunity.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-90 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/15" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <Link
            href="/#opportunities"
            className="inline-block font-display text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:text-white"
          >
            ← All opportunities
          </Link>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {opportunity.title}
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
        <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="rule-gold text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            The opportunity
          </h2>
          <div className="space-y-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            {opportunity.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* What we deliver */}
      <section className="bg-sand py-24">
        <Reveal className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <h2 className="rule-gold text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            What E7 delivers
          </h2>
          <ul className="divide-y divide-line border-y border-line">
            {opportunity.delivers.map((d) => (
              <li key={d} className="flex gap-4 py-4 text-base leading-relaxed text-ink-soft">
                <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                {d}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Current work */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="rule-gold text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Our current work
          </h2>
          <p className="mt-8 text-base leading-relaxed text-ink-soft">
            A selection of projects in Tamil Nadu. Client names are withheld at their request.
          </p>
        </Reveal>

        <StaggerGroup
          className={`mt-14 grid gap-6 ${opportunity.projects.length > 2 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}
        >
          {opportunity.projects.map((project) => (
            <StaggerItem key={project.name} className="flex h-full flex-col border-t-2 border-gold bg-sand p-8">
              <span
                className={`self-start px-2.5 py-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.12em] ${statusStyle[project.status]}`}
              >
                {project.status}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">{project.name}</h3>
              <p className="mt-1 text-sm text-muted">
                {project.location} · {project.client}
              </p>
              <p className="mt-5 text-sm font-semibold leading-relaxed text-ink">{project.scope}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{project.summary}</p>
              <p className="mt-auto pt-6 text-sm text-muted">{project.timeline}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Product range — this replaced the old /products category pages */}
      <section id="products" className="scroll-mt-28 border-t border-line py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <h2 className="rule-gold text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Our products
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ink-soft">
              Sourced direct from the factory and supplied on their own or as part of a complete project.
            </p>
          </div>

          {stocked.length > 0 ? (
            <nav aria-label="Product ranges" className="mt-10 flex flex-wrap gap-2">
              {stocked.map(({ sub, items }) => (
                <a
                  key={sub.slug}
                  href={`#${sub.slug}`}
                  className="border border-line px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-gold hover:text-ink"
                >
                  {sub.name} <span className="text-muted">({items.length})</span>
                </a>
              ))}
            </nav>
          ) : null}

          {stocked.map(({ sub, items }) => (
            <div key={sub.slug} id={sub.slug} className="mt-16 scroll-mt-28">
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{sub.name}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{sub.description}</p>
              <div className="mt-6 grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:grid-cols-4">
                {items.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.categorySlug}/${p.subcategorySlug}/${p.slug}`}
                    className="group flex flex-col border-b border-r border-line bg-white p-5 transition-colors hover:bg-sand"
                  >
                    {p.image ? (
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : null}
                    <p className={`font-display text-sm font-semibold text-ink ${p.image ? "mt-4" : ""}`}>
                      {p.name}
                    </p>
                    {p.image ? null : (
                      <p className="mt-auto pt-4 text-xs text-muted group-hover:text-gold-ink">Photos on request →</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {onRequest.length > 0 ? (
            <div className="mt-16 bg-sand p-8 sm:p-10">
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                {stocked.length > 0 ? "Also supplied" : "What we supply"}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                Ask us for the current catalogue and prices for any of these ranges.
              </p>
              <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                {onRequest.map((sub) => (
                  <li key={sub.slug} id={sub.slug} className="scroll-mt-28 border-t border-line pt-4">
                    <p className="font-display text-sm font-semibold text-ink">{sub.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{sub.description}</p>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-outline mt-10">
                Request the catalogue
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      {/* How we partner */}
      <section className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            How we work with you
          </h2>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t border-white/20 pt-6">
                <p className="font-display text-sm font-semibold text-gold">0{i + 1}</p>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-4xl px-6 py-24 text-center lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Have the land, the venue or the market for this?
          </h2>
          <p className="mt-6 text-base text-ink-soft">
            Tell us what you have in mind, and our team will come back with ideas and a plan.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/park-request" className="btn btn-solid">
              Request a Park
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Talk to Our Team
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Other opportunities */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink">
            More opportunities
          </h2>
          <ul className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/opportunities/${o.slug}`}
                  className="flex h-full items-center justify-between gap-4 bg-white px-6 py-5 font-display text-sm font-semibold text-ink transition-colors hover:bg-sand hover:text-gold-ink"
                >
                  {o.shortTitle}
                  <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
