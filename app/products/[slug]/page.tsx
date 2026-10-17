import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "../../components/Reveal";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import {
  getProductCategory,
  getSubcategoriesForCategory,
  productCategories,
} from "../data";

export function generateStaticParams() {
  return productCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getProductCategory(slug);

  if (!category) {
    return { title: "Our Products — E7 Entertainments Group" };
  }

  return {
    title: `${category.title} — E7 Entertainments Group`,
    description: category.description,
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getProductCategory(slug);

  if (!category) {
    notFound();
  }

  const subcategories = getSubcategoriesForCategory(slug);

  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteHeader />

      {/* Page banner */}
      <section className="relative flex min-h-[40vh] items-end overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 to-ink/60" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <Link
            href="/products"
            className="inline-block rounded bg-ink px-3 py-1.5 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-gold transition-colors hover:text-white"
          >
            ← Our Products
          </Link>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {category.title}
          </h1>
        </div>
      </section>

      {/* Main content with sidebar */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-2">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-muted mb-6">
              Subcategories
            </p>
            <nav className="space-y-1">
              {subcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/products/${category.slug}/${sub.slug}`}
                  className="block rounded px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-sand hover:text-gold"
                >
                  {sub.name}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div>
            <Reveal>
              <h2 className="rule-gold text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Category overview
              </h2>
              <p className="mt-4 text-sm font-medium text-muted">
                {category.tagline}
              </p>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-ink-soft">
                {category.description}
              </p>
            </Reveal>

            <div className="mt-16">
              <Reveal>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                  {subcategories.length} Subcategories
                </p>
                <div className="mt-8 space-y-4">
                  {subcategories.map((sub) => (
                    <div key={sub.slug} className="rounded border border-line p-6">
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {sub.name}
                      </h3>
                      <p className="mt-2 text-sm text-ink-soft">{sub.description}</p>
                      <Link
                        href={`/products/${category.slug}/${sub.slug}`}
                        className="mt-4 inline-block font-display text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink hover:underline"
                      >
                        View Products →
                      </Link>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
