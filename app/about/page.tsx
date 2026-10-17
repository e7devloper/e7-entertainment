import Link from "next/link";
import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata = {
  title: "About — E7 Entertainments Group",
  description:
    "E7 Entertainments is the entertainment, leisure and lifestyle venture of an established multinational business group, backed by E7Tex Limited (Hong Kong).",
};

const services = [
  {
    title: "Amusement & Dinosaur Parks, Game Zones",
    description:
      "Complete park projects — rides, slides, dino animatronics, snow and adventure parks, illumination parks, science parks and edutainment centres — plus arcade games, VR zones, 5D/7D theatres, trampoline parks and soft play. From one acre to full destinations, and turnkey setups for malls and resorts.",
    image: "/images/water-park.jpg",
  },
  {
    title: "Lighting, Festival, Party & Seasonal Products",
    description:
      "Festival, decorative, stage, landscape, street and solar lighting, signage and LED displays — plus Christmas, Diwali and celebration products at factory volume: décor, lights, gifts, party and wedding supplies, toys and inflatables.",
    image: "/images/festive-lights.jpg",
  },
  {
    title: "Sports, Tents & Outdoor",
    description:
      "Playground and fitness equipment, sports goods, camping and glamping gear, event tents.",
    image: "/images/camping-tents.jpg",
  },
  {
    title: "Food & Beverage Setups",
    description:
      "Food courts, kiosks, food trucks and commercial kitchen equipment for parks, malls and cafés. From layout to daily operations, we deliver ready-to-run setups built for high footfall.",
    image: "/images/container-cafe.jpg",
  },
  {
    title: "Movies, Content & OTT, Cinema, Events & Media, Cultural Exchange",
    description:
      "Cinema seating and projection, stage, sound and LED walls, event equipment and studio & production gear for every celebration and creation — cross-border film distribution, content licensing, dubbing and subtitling, co-productions — plus international cultural events, art and music exchanges, festivals and student programs building bridges between nations through culture.",
    image: "/images/cinema-seats.jpg",
  },
];

export default function About() {
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
            About E7 Entertainments
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="rule-gold text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              One group, built for global reach
            </h2>
          </div>
          <div className="text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>
              E7 Entertainments is the leisure and lifestyle venture of an
              established{" "}
              <strong className="font-bold text-ink">
                multinational business group
              </strong>
              , backed by{" "}
              <strong className="font-bold text-ink">
                E7Tex Limited (Hong Kong)
              </strong>
              , with group companies and partner networks operating
              internationally.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section className="bg-sand py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <h2 className="rule-gold text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Our services
            </h2>
          </Reveal>

          <div className="mt-16 space-y-px">
            <StaggerGroup className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 3).map((service, index) => (
                <StaggerItem
                  key={service.title}
                  className={`group h-full bg-white transition-colors hover:bg-sand ${
                    index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {service.image && (
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover grayscale transition-[filter,transform] duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-ink/10 transition-opacity duration-700 group-hover:opacity-0" />
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <StaggerGroup className="grid gap-px bg-line sm:grid-cols-2 lg:mx-auto lg:w-2/3 lg:grid-cols-2">
              {services.slice(3).map((service) => (
                <StaggerItem
                  key={service.title}
                  className="group h-full bg-white transition-colors hover:bg-sand"
                >
                  {service.image && (
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover grayscale transition-[filter,transform] duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-ink/10 transition-opacity duration-700 group-hover:opacity-0" />
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
        <Reveal>
          <h2 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
            Every project backed by installation, spare parts, maintenance,
            training and technology support — we stay with you after opening
            day.
          </h2>
          <p className="mt-6 text-base text-ink-soft">
            Support and service packages are tailored to each project.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-sand py-28">
        <Reveal className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            If you carry a dream, we will build it together.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn btn-solid">
              Start Your Project
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
