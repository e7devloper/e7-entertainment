import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "../../../../components/Reveal";
import { SiteHeader } from "../../../../components/SiteHeader";
import { SiteFooter } from "../../../../components/SiteFooter";
import {
  getProductCategory,
  getSubcategory,
  getProduct,
  products,
} from "../../../data";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.categorySlug,
    subcategorySlug: product.subcategorySlug,
    productSlug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; subcategorySlug: string; productSlug: string }>;
}) {
  const { slug, subcategorySlug, productSlug } = await params;
  const product = getProduct(slug, subcategorySlug, productSlug);

  if (!product) {
    return { title: "Our Products — E7 Entertainments Group" };
  }

  return {
    title: `${product.name} — E7 Entertainments Group`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string; subcategorySlug: string; productSlug: string }>;
}) {
  const { slug, subcategorySlug, productSlug } = await params;
  const category = getProductCategory(slug);
  const subcategory = getSubcategory(slug, subcategorySlug);
  const product = getProduct(slug, subcategorySlug, productSlug);

  if (!category || !subcategory || !product) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteHeader />

      {/* Page banner */}
      <section className="relative flex min-h-[40vh] items-end overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 to-ink/60" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded bg-ink px-3 py-1.5 text-sm">
            <Link
              href={`/opportunities/${category.slug}`}
              className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-gold transition-colors hover:text-white"
            >
              {category.title}
            </Link>
            <span className="text-white/60">→</span>
            <Link
              href={`/opportunities/${category.slug}#${subcategory.slug}`}
              className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-gold transition-colors hover:text-white"
            >
              {subcategory.name}
            </Link>
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {product.name}
          </h1>
        </div>
      </section>

      {/* Product detail */}
      <section className="mx-auto max-w-4xl px-6 py-28 lg:px-10">
        <Reveal>
          {product.image ? (
            <div className="relative aspect-square w-full overflow-hidden rounded border border-line bg-sand sm:aspect-[4/3]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
          ) : (
            <div className="rounded border border-line p-8 bg-sand">
              <p className="text-ink-soft">
                Product image and detailed specifications coming soon.
              </p>
              <p className="mt-4 text-sm text-muted">
                We&apos;re working on adding complete product details and images.
                <Link href="/contact" className="ml-1 text-gold-ink underline">
                  Contact us
                </Link>
                {" "}for more information about this product.
              </p>
            </div>
          )}

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn btn-solid">
              Request Information
            </Link>
            <Link
              href={`/opportunities/${category.slug}#${subcategory.slug}`}
              className="btn btn-outline"
            >
              Back to {subcategory.name}
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
