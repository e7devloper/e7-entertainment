import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { MailtoForm } from "../components/MailtoForm";

export const metadata = {
  title: "Contact — E7 Entertainments Group",
  description:
    "Start your project with E7 Entertainments. Share your vision and let's build it together.",
};

const offices = [
  {
    label: "Head Office — Hong Kong",
    address:
      "Flat 721, 7/F, LIVEN HOUSE, No. 61–63 King Yip Street, Kwun Tong, Kowloon, Hong Kong",
  },
  {
    label: "Representative Office — China",
    address:
      "Room 2102, 21st Floor, Guomao Building, Keqiao District, Shaoxing City.",
  },
  {
    label: "Service Centre — India",
    address: "9/1 Bungalow Street Extension, Tiruppur - 641602.",
  },
];

export default function Contact() {
  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteHeader />

      {/* Page intro */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-44 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h1 className="rule-gold text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Tell us about your dream.
            </h1>
          </div>
          <div className="text-base leading-relaxed text-ink-soft">
            <p>
              Share your vision, land, market or capability — we&apos;ll
              explore where it fits and build it with you.
            </p>
            <div className="mt-10 border-t-2 border-gold bg-sand p-8">
              <MailtoForm
                to="support@e7entertainments.com"
                subject="Contact Form Submission — E7 Entertainments"
                submitLabel="Send Message"
                fields={[
                  { name: "name", label: "Name", required: true },
                  {
                    name: "email",
                    label: "Email",
                    type: "email",
                    required: true,
                  },
                  {
                    name: "message",
                    label: "Message",
                    textarea: true,
                    required: true,
                  },
                ]}
              />
            </div>
            <p className="mt-6 text-sm text-muted">
              Prefer email?{" "}
              <a
                href="mailto:support@e7entertainments.com"
                className="text-gold-ink hover:text-ink"
              >
                support@e7entertainments.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section id="partner" className="bg-sand py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="rule-gold text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Become a Partner
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-soft">
                If you have land, a market, a network, or capability worth
                building on, tell us about it — we bring the sourcing,
                execution and delivery network.
              </p>
            </div>
            <div className="border-t-2 border-gold bg-white p-8">
              <MailtoForm
                to="support@e7entertainments.com"
                subject="Partnership Inquiry — E7 Entertainments"
                submitLabel="Submit Inquiry"
                fields={[
                  { name: "name", label: "Name", required: true },
                  { name: "company", label: "Company / Organisation" },
                  {
                    name: "email",
                    label: "Email",
                    type: "email",
                    required: true,
                  },
                  {
                    name: "message",
                    label: "Tell us about your land, market or vision",
                    textarea: true,
                    required: true,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="rule-gold text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Where to find us
          </h2>

          <div className="mt-16 grid gap-px bg-line sm:grid-cols-3">
            {offices.map((office) => (
              <div key={office.label} className="bg-sand p-8">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                  {office.label}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
