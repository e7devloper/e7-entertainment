"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  productCategories,
  getSubcategoriesForCategory,
} from "../products/data";

// Shorter labels for the mega-menu header only — full titles remain on the
// category pages (data.ts) for SEO/content purposes.
const shortTitles: Record<string, string> = {
  "amusement-dinosaur-parks": "Amusement & Parks",
  "lighting-festival-party": "Lighting & Festive",
  "sports-tents-outdoor": "Sports & Outdoor",
  "food-beverage": "Food & Beverage",
  "movies-ott-cinema": "Media & Events",
};

export function ProductsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openNow = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsOpen(true);
  };

  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div
      className="group relative shrink-0"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onKeyDown={(e) => {
        if (e.key === "Escape") setIsOpen(false);
      }}
    >
      <button
        // A real click is preceded by a mouseenter (which already opens the
        // menu via openNow), so a naive toggle here would immediately close
        // what hover just opened. Keep this idempotent: it only ever opens
        // (needed for touch devices, which don't fire hover at all) and lets
        // onMouseLeave / clicking a link handle closing.
        onClick={openNow}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-1 whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold xl:tracking-[0.16em] leading-none mt-1"
      >
        Our Products
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 transition-all duration-200 ${
          isOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div
          className="w-max max-w-[92vw] bg-white shadow-lg border border-line rounded-sm"
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) closeSoon();
          }}
        >
          {/* Row of categories — wraps onto extra rows on narrower viewports instead of overlapping */}
          <div className="flex flex-wrap gap-x-8 gap-y-6 p-6 xl:p-8">
            {productCategories.map((category) => {
              const subcategories = getSubcategoriesForCategory(category.slug);
              return (
                <div key={category.slug} className="w-[190px]">
                  {/* Category Title */}
                  <Link
                    href={`/products/${category.slug}`}
                    className="font-display text-sm font-semibold text-ink hover:text-gold transition-colors block mb-4 pb-3 border-b border-line leading-snug min-h-[2.5rem]"
                  >
                    {shortTitles[category.slug] ?? category.title}
                  </Link>

                  {/* Subcategories */}
                  <ul className="space-y-3">
                    {subcategories.map((sub) => (
                      <li key={sub.slug}>
                        <Link
                          href={`/products/${category.slug}/${sub.slug}`}
                          className="text-xs text-ink-soft hover:text-gold transition-colors font-medium"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
