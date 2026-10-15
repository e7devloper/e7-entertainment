"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "./components/Reveal";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { AnnouncementTicker } from "./components/AnnouncementTicker";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const announcements = [
  "Now inviting Expression of Interest — Empanelment of Architects",
  "Master Planning, 3D Walkthroughs & DPRs for amusement, water & dinosaur parks and leisure destinations",
  "Free to apply · Last date 22.10.2026, 5:00 PM IST (Corrigendum No. 01)",
  "Online pre-submission meeting 19.10.2026, 12:00 PM IST",
  "Download the EoI and Corrigendum on our Careers page →",
];

const buzzwords = [
  "DINOSAUR PARKS",
  "SPORTS",
  "OUTDOOR",
  "FOOD & BEVERAGE",
  "OTT",
];

const opportunities = [
  {
    title: "Amusement & Dinosaur Parks, Game Zones",
    description:
      "Theme parks, water parks, dino and adventure attractions, arcades and VR zones — turnkey concepts built for the next generation of visitors.",
    video: "/videos/amusement-ai-3s-clean.mp4",
  },
  {
    title: "Lighting, Festival, Party & Seasonal Products",
    description:
      "Decorative, stage and festival lighting plus seasonal and celebration products — moving at scale across fast-growing markets.",
    video: "/videos/lighting-ai-3s-clean.mp4",
  },
  {
    title: "Sports, Tents & Outdoor",
    description:
      "Playground, fitness, camping and glamping gear, and event tents — built for active, outdoor experiences.",
    video: "/videos/sports-ai-3s-clean.mp4",
  },
  {
    title: "Food & Beverage Setups",
    description:
      "Food courts, kiosks, food trucks and commercial kitchen equipment for parks, malls and cafés. From layout to daily operations, we deliver ready-to-run setups built for high footfall.",
    video: "/videos/food-ai-3s-clean.mp4",
  },
  {
    title: "Movies, Content & OTT, Cinema, Events & Media, Cultural Exchange",
    description:
      "Cinema and live events, film and content distribution, and cultural exchange programs that turn moments into memories and bridge markets. Connecting screens and stages worldwide.",
    video: "/videos/cinema-ai-3s-clean.mp4",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteHeader />

      {/* Hero — full-bleed banner image with overlaid title */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-24">
        <div className="pointer-events-none absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-ferris-wheel.jpg"
            className="h-full w-full object-cover"
          >
            <source src="/videos/hero-combined.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <AnnouncementTicker
          label="Announcement"
          messages={announcements}
          href="/careers"
          className="absolute inset-x-0 top-[81px] z-10"
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10"
        >
          <motion.h1
            variants={item}
            className="max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            We Build Your Dream
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Parks &amp; game zones · Lights, festivals &amp; parties · Sports
            &amp; outdoor · Food &amp; beverage · Cinema, OTT &amp; cultural
            events — joy delivered worldwide.
          </motion.p>
          <motion.div variants={item} className="mt-12 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-solid">
              Start Your Project
            </Link>
            <Link href="/contact#partner" className="btn btn-ghost-light">
              Become a Partner
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro statement */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 className="rule-gold mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Transforming landscapes, enriching lives
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-soft">
            <p>
              E7 Entertainments is the leisure and lifestyle venture of an
              established <strong className="font-bold text-ink">multinational business group</strong>,
              backed by <strong className="font-bold text-ink">E7Tex Limited (Hong Kong)</strong>, with
              group companies and partner networks operating internationally.
            </p>
            <p>
              From concept to <strong className="font-bold text-ink">grand opening</strong> —
              manufacturing, quality inspection, shipping, documentation and
              safe payments. We own every step, so you enjoy every result.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Founder's Message */}
      <section className="bg-sand py-28">
        <Reveal className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10">
          <div>
            <p className="eyebrow">Chairman&apos;s Message</p>
            <blockquote className="mt-8">
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
                &ldquo;Every great destination begins with one person&apos;s
                dream. For over two decades, I have built international
                businesses and delivered world-class projects across the globe.
                E7 Entertainments stands on one simple belief: joy is the
                world&apos;s greatest business. If you carry a dream, we will
                build it together.&rdquo;
              </p>
              <footer className="mt-10">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                  Manimaran
                </p>
                <p className="mt-1 text-sm text-muted">
                  Founder &amp; Chairman, E7 Entertainments Group
                </p>
              </footer>
            </blockquote>
          </div>
          <Image
            src="/images/chairman.jpg"
            alt="Manimaran, Founder & Chairman, E7 Entertainments Group"
            width={1122}
            height={1402}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="mx-auto h-auto w-full max-w-md rounded-2xl shadow-lg lg:max-w-none"
          />
        </Reveal>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-line bg-white py-5">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.28em] text-muted">
          {[...buzzwords, ...buzzwords].map((word, i) => (
            <span key={i} className="flex items-center gap-10">
              {word}
              <span className="text-gold">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Opportunities */}
      <section id="opportunities" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Where We&apos;re Building</p>
          <h2 className="rule-gold mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            A portfolio of opportunities, one partnership away
          </h2>
          <p className="mt-8 text-base leading-relaxed text-ink-soft">
            We bring the sourcing, execution and delivery network. You bring
            the land, the market, or the vision. Together, we build.
          </p>
        </Reveal>

        <div className="mt-16 space-y-px">
          <StaggerGroup className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.slice(0, 3).map((opportunity, index) => (
              <StaggerItem
                key={opportunity.title}
                className={`group h-full bg-white transition-colors hover:bg-sand ${
                  index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {opportunity.video && (
                  <div className="relative h-52 w-full overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    >
                      <source src={opportunity.video} type="video/mp4" />
                    </video>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {opportunity.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {opportunity.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <StaggerGroup className="grid gap-px bg-line sm:grid-cols-2 lg:mx-auto lg:w-2/3 lg:grid-cols-2">
            {opportunities.slice(3).map((opportunity) => (
              <StaggerItem
                key={opportunity.title}
                className="group h-full bg-white transition-colors hover:bg-sand"
              >
                {opportunity.video && (
                  <div className="relative h-52 w-full overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    >
                      <source src={opportunity.video} type="video/mp4" />
                    </video>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {opportunity.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {opportunity.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
