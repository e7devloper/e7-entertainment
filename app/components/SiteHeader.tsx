"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductsDropdown } from "./ProductsDropdown";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/#opportunities", label: "Services" },
  { href: "/news", label: "News" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white">
      <div className="flex items-center px-4 py-4 lg:px-6">
        {/* Logo & Brand - flush left */}
        <Link href="/" className="flex items-center gap-1.5 shrink-0">
          <Image
            src="/images/logo.png"
            alt="E7 Entertainments"
            width={84}
            height={90}
            className="h-12 w-auto"
            priority
          />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-ink whitespace-nowrap lg:text-sm">
            E7 Entertainments
          </span>
        </Link>

        {/* Navigation - spreads across full width */}
        <nav className="ml-12 flex flex-1 items-center">
          <ul className="hidden items-center lg:flex flex-1">
            <li className="shrink-0">
              <Link
                href="/"
                className="whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold px-6 xl:tracking-[0.16em]"
              >
                Home
              </Link>
            </li>
            <li className="shrink-0">
              <Link
                href="/about"
                className="whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold px-6 xl:tracking-[0.16em]"
              >
                About Us
              </Link>
            </li>
            <li className="shrink-0 px-6">
              <ProductsDropdown />
            </li>
            <li className="shrink-0">
              <Link
                href="/#opportunities"
                className="whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold px-6 xl:tracking-[0.16em]"
              >
                Services
              </Link>
            </li>
            <li className="shrink-0">
              <Link
                href="/news"
                className="whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold px-6 xl:tracking-[0.16em]"
              >
                News
              </Link>
            </li>
            <li className="shrink-0">
              <Link
                href="/careers"
                className="whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold px-6 xl:tracking-[0.16em]"
              >
                Careers
              </Link>
            </li>
            <li className="shrink-0">
              <Link
                href="/contact"
                className="whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold px-6 xl:tracking-[0.16em]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA buttons - flush right, desktop only */}
        <div className="ml-auto hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            href="/contact#partner"
            className="btn btn-outline hidden !px-5 !py-3 whitespace-nowrap text-xs xl:inline-flex"
          >
            Become a Partner
          </Link>
          <Link
            href="/park-request"
            className="btn btn-solid !px-5 !py-3 whitespace-nowrap text-xs"
          >
            Request a Park
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="ml-auto flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-nav"
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-white`}
      >
        <nav>
          <ul className="flex flex-col divide-y divide-line">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-4 font-display text-sm font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-3 p-6">
          <Link
            href="/contact#partner"
            onClick={() => setIsMenuOpen(false)}
            className="btn btn-outline block w-full !px-5 !py-3 text-center text-xs"
          >
            Become a Partner
          </Link>
          <Link
            href="/park-request"
            onClick={() => setIsMenuOpen(false)}
            className="btn btn-solid block w-full !px-5 !py-3 text-center text-xs"
          >
            Request a Park
          </Link>
        </div>
      </div>
    </header>
  );
}
