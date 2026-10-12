import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata = {
  title: "Careers — E7 Entertainments Group",
  description:
    "Join E7 Entertainments Group and help build parks, festivals, sports and entertainment experiences worldwide.",
};

const eoi = {
  notice: "OXF/E7E/EOI/ARCH/2026/001",
  pdf: "/careers/E7_EOI_Empanelment_of_Architects_2026.pdf",
  forms: "/careers/E7_EOI_Application_Forms_Architects_2026.docx",
  email: "support@e7entertainments.com",
  meet: "https://meet.google.com/uuu-dhfh-cwt",
  schedule: [
    ["Last date for queries", "22.10.2026, 5:00 PM IST"],
    ["Online pre-submission meeting", "24.10.2026, 12:00 PM IST"],
    ["Last date for submission", "31.10.2026, 5:00 PM IST"],
    ["Application fee", "NIL — free to apply"],
  ],
};

export default function Careers() {
  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteHeader />

      <section className="mx-auto w-full max-w-4xl px-6 py-28 pt-44 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow">Careers</p>
          <h1 className="rule-gold mx-auto mt-4 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Build the future of entertainment with us
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            We&apos;re growing across parks, festivals, sports, food and
            entertainment worldwide. See our current openings below, or reach
            out and tell us how you&apos;d like to be part of it.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn btn-solid">
              Get in Touch
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Open opportunities */}
      <section className="mx-auto w-full max-w-4xl px-6 pb-28 lg:px-10">
        <Reveal>
          <p className="eyebrow">Open Opportunities</p>
          <div className="mt-6 border-t-2 border-gold bg-sand p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
              Notice No. {eoi.notice}
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Expression of Interest — Empanelment of Architects
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              We invite COA-registered architects and architectural firms to
              apply for empanelment to prepare Master Plans (DMP), 3D video
              walkthroughs and Detailed Project Reports (DPR) for amusement,
              theme, water and dinosaur parks, glow gardens and leisure
              destinations across India. Free to apply.
            </p>

            <p className="mt-6 border-l-2 border-gold bg-white px-4 py-3 text-sm leading-relaxed text-ink-soft">
              <span className="font-semibold text-ink">Dates revised (12.10.2026):</span>{" "}
              the pre-submission meeting is now on 24.10.2026 and the last
              date for submission is extended to 31.10.2026. Shortlisting and
              online interaction will be held from 02.11.2026 to 07.11.2026,
              and Empanelment Letters issued by 15.11.2026. The EOI document
              below has been updated.
            </p>

            <dl className="mt-8 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
              {eoi.schedule.map(([label, value]) => (
                <div key={label} className="border-l-2 border-gold pl-4">
                  <dt className="text-muted">{label}</dt>
                  <dd className="mt-1 font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-sm leading-relaxed text-ink-soft">
              <span className="font-semibold text-ink">
                Online pre-submission meeting (Google Meet):
              </span>{" "}
              Saturday, 24.10.2026, 12:00 PM IST —{" "}
              <a
                href={eoi.meet}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap font-semibold text-gold-ink underline hover:text-ink"
              >
                Join on Google Meet
              </a>
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={eoi.pdf} download className="btn btn-solid">
                Download EOI (PDF)
              </a>
              <a href={eoi.forms} download className="btn btn-solid">
                Application Forms (Word)
              </a>
              <a
                href={`mailto:${eoi.email}?subject=${encodeURIComponent(
                  "EOI – Empanelment of Architects – <Firm Name>",
                )}`}
                className="btn btn-outline"
              >
                Email Your Application
              </a>
            </div>

            <div className="mt-10 border-t border-line pt-8 text-sm leading-relaxed text-ink-soft">
              <h3 className="text-base font-bold text-ink">How to apply</h3>
              <ol className="mt-4 list-decimal space-y-2 pl-5">
                <li>
                  Download the EOI document and the Application Forms (Word),
                  and fill in Forms 1 to 6.
                </li>
                <li>
                  Sign every form and put Form 1 on your letterhead.
                </li>
                <li>
                  Combine everything into one PDF (max 20 MB) named{" "}
                  <span className="font-semibold text-ink">
                    EOI-ARCH_&lt;Firm Name&gt;.pdf
                  </span>
                  .
                </li>
                <li>
                  Email it to{" "}
                  <a
                    href={`mailto:${eoi.email}`}
                    className="font-semibold text-gold-ink hover:text-ink"
                  >
                    {eoi.email}
                  </a>{" "}
                  with the subject &ldquo;EOI – Empanelment of Architects –
                  &lt;Firm Name&gt;&rdquo;. Larger files may be shared as a
                  Google Drive link. Applications are accepted by email only.
                </li>
              </ol>
              <p className="mt-6">
                Queries: email us with the subject &ldquo;Query – EOI for
                Empanelment of Architects&rdquo; by 22.10.2026, 5:00 PM IST, or
                WhatsApp +91-90421 87810.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
