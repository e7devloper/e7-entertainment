import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/park-request", label: "Request a Park" },
  { href: "/request-status", label: "Check Your Status" },
  { href: "/news", label: "News" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

const offices = [
  {
    label: "Head Office — Hong Kong",
    address:
      "Flat 721, 7/F, LIVEN HOUSE, No. 61–63 King Yip Street, Kwun Tong, Kowloon, Hong Kong",
  },
  {
    label: "Representative Office — China",
    address:
      "Room 2102, 21st Floor, Guomao Building, Keqiao District, Shaoxing City.",
  },
  {
    label: "Service Centre — India",
    address: "9/1 Bungalow Street Extension, Tiruppur - 641602.",
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.7fr_1.6fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-20 w-20 items-center justify-center rounded-md bg-white p-2.5">
                <Image
                  src="/images/logo.png"
                  alt="E7 Entertainments"
                  width={84}
                  height={90}
                  className="h-full w-auto"
                />
              </span>
              <span className="font-display text-base font-semibold uppercase tracking-[0.16em]">
                E7 Entertainments
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              The entertainment, leisure and lifestyle venture of an
              established multinational business group.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Quick Links
            </p>
            <ul className="mt-8 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Our Address
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-[1.12fr_1.35fr_1fr]">
              {offices.map((office) => (
                <div key={office.label}>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.10em] text-white">
                    {office.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs tracking-wide text-white/55">
            &copy; {new Date().getFullYear()} E7 Entertainments Group. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
