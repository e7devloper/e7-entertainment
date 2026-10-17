import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ParkRequestForm } from "../components/ParkRequestForm";

export const metadata = {
  title: "Request a Park — E7 Entertainments Group",
  description:
    "Tell us about the park you want to build — type, budget, location and timeline — and the E7 Entertainments team will follow up.",
};

export default function ParkRequest() {
  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteHeader />

      <section className="mx-auto w-full max-w-7xl px-6 pb-12 pt-44 lg:px-10">
        <div className="max-w-2xl">
          <h1 className="rule-gold text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Request a park
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
            Tell us what you have in mind — park type, budget, location and timeline — and our
            team will follow up by the method you prefer.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 pb-28 lg:px-10">
        <ParkRequestForm />
      </section>

      <SiteFooter />
    </div>
  );
}
