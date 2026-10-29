import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { RequestStatusLookup } from "../components/RequestStatusLookup";

export const metadata = {
  title: "Check Your Status — E7 Entertainments Group",
  description:
    "Enter the reference from your park request to see where it stands with the E7 Entertainments team.",
};

export default async function RequestStatus({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { ref } = await searchParams;

  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteHeader />

      <section className="mx-auto w-full max-w-7xl px-6 pb-12 pt-44 lg:px-10">
        <div className="max-w-2xl">
          <h1 className="rule-gold text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Check your status
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            Paste the reference you got when you requested a park to see where it stands. Haven&apos;t
            sent one yet?{" "}
            <Link href="/park-request" className="font-semibold text-ink underline underline-offset-4 hover:text-gold-ink">
              Request a park
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 pb-28 lg:px-10">
        <RequestStatusLookup initialRef={typeof ref === "string" ? ref : ""} />
      </section>

      <SiteFooter />
    </div>
  );
}
