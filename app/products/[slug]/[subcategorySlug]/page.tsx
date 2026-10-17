import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "../../../components/Reveal";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";
import {
  getProductCategory,
  getSubcategoriesForCategory,
  getSubcategory,
  getProductsForSubcategory,
  productCategories,
  productSubcategories,
} from "../../data";

export function generateStaticParams() {
  const params: Array<{ slug: string; subcategorySlug: string }> = [];
  productCategories.forEach((category) => {
    productSubcategories
      .filter((sub) => sub.categorySlug === category.slug)
      .forEach((sub) => {
        params.push({
          slug: category.slug,
          subcategorySlug: sub.slug,
        });
      });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; subcategorySlug: string }>;
}) {
  const { slug, subcategorySlug } = await params;
  const subcategory = getSubcategory(slug, subcategorySlug);

  if (!subcategory) {
    return { title: "Our Products — E7 Entertainments Group" };
  }

  return {
    title: `${subcategory.name} — E7 Entertainments Group`,
    description: subcategory.description,
  };
}

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ slug: string; subcategorySlug: string }>;
}) {
  const { slug, subcategorySlug } = await params;
  const category = getProductCategory(slug);
  const subcategory = getSubcategory(slug, subcategorySlug);

  if (!category || !subcategory) {
    notFound();
  }

  const products = getProductsForSubcategory(slug, subcategorySlug);
  const allSubcategories = getSubcategoriesForCategory(slug);

  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteHeader />

      {/* Page banner */}
      <section className="relative flex min-h-[40vh] items-end overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 to-ink/60" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <Link
            href={`/products/${category.slug}`}
            className="inline-block rounded bg-ink px-3 py-1.5 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-gold transition-colors hover:text-white"
          >
            ← {category.title}
          </Link>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {subcategory.name}
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
              {allSubcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/products/${category.slug}/${sub.slug}`}
                  className={`block rounded px-4 py-2 text-sm font-medium transition-colors ${
                    sub.slug === subcategorySlug
                      ? "bg-sand text-gold-ink"
                      : "text-ink hover:bg-sand hover:text-gold"
                  }`}
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
                Products
              </h2>
              <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-ink-soft">
                {subcategory.description}
              </p>
            </Reveal>

            {products.length > 0 ? (
              <div className="mt-12">
                <Reveal>
                  <p className="mb-8 text-sm font-semibold text-muted">
                    {products.length} product{products.length !== 1 ? "s" : ""} available
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${category.slug}/${subcategory.slug}/${product.slug}`}
                        className="group block overflow-hidden rounded border border-line transition-all hover:border-gold hover:shadow-md"
                      >
                        <div className="relative aspect-square w-full overflow-hidden bg-sand">
                          {product.image ? (
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center text-xs font-medium text-muted">
                              Image coming soon
                            </div>
                          )}
                        </div>
                        <div className="p-5">
                          <h3 className="font-display text-base font-semibold text-ink">
                            {product.name}
                          </h3>
                          <span className="mt-2 inline-block font-display text-xs font-semibold uppercase tracking-[0.16em] text-gold-ink">
                            View Details →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </Reveal>
              </div>
            ) : (
              <div className="mt-12 rounded bg-sand p-8 text-center">
                <p className="text-ink-soft">
                  No products yet in this subcategory. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
