import Link from "next/link";
import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { productCategories } from "./data";

export const metadata = {
  title: "Our Products — E7 Entertainments Group",
  description:
    "Explore E7 Entertainments' five product categories — amusement & dinosaur parks, lighting & festival products, sports & outdoor, food & beverage, and movies, OTT & cinema.",
};

export default function Products() {
  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteHeader />

      {/* Page banner — navy-duotone treatment, matching the home hero */}
      <section className="relative flex min-h-[45vh] items-end overflow-hidden pt-24">
        <div className="pointer-events-none absolute inset-0 isolate bg-ink">
          <Image
            src="/images/hero-ferris-wheel.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-90 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/15" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Five categories, one sourcing partner
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="rule-gold text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Everything under five categories
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-soft">
            <p>
              Our full range is organised into{" "}
              <strong className="font-bold text-ink">five product categories</strong>,
              each with dedicated subcategories and products. Browse a category below to explore our offerings.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Categories */}
      <section className="bg-sand py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <h2 className="rule-gold text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Our product categories
            </h2>
          </Reveal>

          <div className="mt-16 space-y-px">
            <StaggerGroup className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
              {productCategories.slice(0, 3).map((category, index) => (
                <StaggerItem
                  key={category.slug}
                  className={`group h-full ${
                    index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <Link
                    href={`/products/${category.slug}`}
                    className="flex h-full flex-col bg-white transition-colors hover:bg-sand"
                  >
                    <div className="flex flex-1 flex-col p-8">
                      <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-gold-ink">
                        {category.tagline}
                      </p>
                      <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">
                        {category.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {category.description}
                      </p>
                      <span className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors group-hover:text-gold">
                        View Category →
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <StaggerGroup className="grid gap-px bg-line sm:grid-cols-2 lg:mx-auto lg:w-2/3 lg:grid-cols-2">
              {productCategories.slice(3).map((category) => (
                <StaggerItem key={category.slug} className="group h-full">
                  <Link
                    href={`/products/${category.slug}`}
                    className="flex h-full flex-col bg-white transition-colors hover:bg-sand"
                  >
                    <div className="flex flex-1 flex-col p-8">
                      <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-gold-ink">
                        {category.tagline}
                      </p>
                      <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">
                        {category.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {category.description}
                      </p>
                      <span className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors group-hover:text-gold">
                        View Category →
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Looking for a specific product?
          </h2>
          <p className="mt-6 text-base text-ink-soft">
            Our full catalogue is growing — reach out and we&apos;ll match you
            with the right products from our sourcing network.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-solid">
              Contact Us
            </Link>
            <a
              href="mailto:support@e7entertainments.com"
              className="btn btn-outline"
            >
              Email Us
            </a>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
