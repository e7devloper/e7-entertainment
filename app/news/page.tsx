import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata = {
  title: "News — E7 Entertainments Group",
  description:
    "Updates, announcements and milestones from E7 Entertainments Group.",
};

export default function News() {
  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-6 py-28 pt-44 text-center lg:px-10">
        <Reveal>
          <h1 className="rule-gold mx-auto max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Updates from E7 Entertainments
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            We&apos;re working on new parks, partnerships and projects across
            the globe. Announcements and press updates will be posted here
            soon — check back shortly.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn btn-solid">
              Get in Touch
            </Link>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
