import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

/** Shared shell for the privacy policy and terms: page title, last-updated date, and long-form prose. */
export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteHeader />

      <section className="mx-auto w-full max-w-7xl px-6 pb-10 pt-44 lg:px-10">
        <div className="max-w-3xl">
          <h1 className="rule-gold text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-sm text-muted">Last updated {updated}</p>
          <div className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{intro}</div>
        </div>
      </section>

      <article className="legal-prose mx-auto w-full max-w-7xl px-6 pb-28 lg:px-10">
        <div className="max-w-3xl">{children}</div>
      </article>

      <SiteFooter />
    </div>
  );
}
