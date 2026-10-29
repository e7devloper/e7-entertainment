import { Reveal } from "./Reveal";

const statements = [
  {
    label: "Vision",
    text: "To be the single accountable partner for leisure and entertainment destinations worldwide.",
  },
  {
    label: "Mission",
    text: "To deliver complete projects and products, from sourcing and manufacturing to installation and after-sales support, with direct-from-factory value and dependable quality.",
  },
];

export function VisionMission() {
  return (
    <section aria-label="Vision and mission" className="bg-ink py-24 text-white">
      <Reveal className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:gap-16 lg:px-10">
        {statements.map((s) => (
          <div key={s.label} className="border-t-2 border-gold pt-8">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {s.label}
            </h2>
            <p className="mt-5 font-display text-xl font-medium leading-snug tracking-tight text-white sm:text-2xl">
              {s.text}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
