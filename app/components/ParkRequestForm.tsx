"use client";

import { useId, useState, type ReactNode } from "react";
import {
  CONTACT_METHODS,
  CURRENCIES,
  PARK_TYPES,
  TIMELINES,
  type ContactMethod,
  type Currency,
  type ParkType,
  type Ticket,
  type Timeline,
} from "../park-request/catalog";

const API_BASE =
  process.env.NEXT_PUBLIC_E7_PARKS_API_URL || "https://api.e7entertainments.com/api";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9][0-9\s-]{6,17}$/;
const digits = (s: string) => s.replace(/\D/g, "");

type Errors = Partial<
  Record<
    | "name"
    | "email"
    | "phone"
    | "parkType"
    | "budget"
    | "location"
    | "timeline"
    | "notes",
    string
  >
>;

function FieldShell({
  label,
  htmlFor,
  optional,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink"
      >
        {label}
        {optional ? (
          <span className="ml-1.5 font-sans text-xs font-normal normal-case tracking-normal text-muted">
            optional
          </span>
        ) : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-1.5 text-sm text-error">{error}</p> : null}
    </div>
  );
}

const inputClass =
  "w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted transition-colors focus:border-gold";

function RadioTiles<T extends string>({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: { value: T; label: string }[];
  value: T | null;
  onChange: (v: T) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {options.map((opt) => {
        const checked = value === opt.value;
        return (
          <label
            key={opt.value}
            className={`flex min-h-[44px] cursor-pointer items-center justify-center rounded border px-3 py-3 text-center text-sm font-medium transition-colors ${
              checked
                ? "border-gold bg-sand text-ink"
                : "border-line text-ink-soft hover:bg-sand"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={checked}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            {opt.label}
          </label>
        );
      })}
    </div>
  );
}

function RadioSegments<T extends string>({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="inline-flex flex-wrap rounded border border-line bg-white p-1">
      {options.map((opt) => {
        const checked = value === opt.value;
        return (
          <label
            key={opt.value}
            className={`flex min-h-[38px] cursor-pointer items-center justify-center rounded px-4 py-2 text-sm font-semibold transition-colors ${
              checked ? "bg-gold text-ink" : "text-ink-soft hover:text-ink"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={checked}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            {opt.label}
          </label>
        );
      })}
    </div>
  );
}

function RadioList<T extends string>({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: { value: T; label: string }[];
  value: T | null;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((opt) => {
        const checked = value === opt.value;
        return (
          <label
            key={opt.value}
            className={`flex min-h-[44px] cursor-pointer items-center gap-3 rounded border px-4 py-2.5 text-sm font-medium transition-colors ${
              checked ? "border-gold bg-sand text-ink" : "border-line text-ink-soft hover:bg-sand"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={checked}
              onChange={() => onChange(opt.value)}
              className="h-4 w-4 accent-gold"
            />
            {opt.label}
          </label>
        );
      })}
    </div>
  );
}

const PARK_OPTIONS = Object.entries(PARK_TYPES).map(([value, label]) => ({
  value: value as ParkType,
  label,
}));
const CURRENCY_OPTIONS = CURRENCIES.map((value) => ({ value, label: value }));
const TIMELINE_OPTIONS = Object.entries(TIMELINES).map(([value, label]) => ({
  value: value as Timeline,
  label,
}));
const CONTACT_OPTIONS = Object.entries(CONTACT_METHODS).map(([value, label]) => ({
  value: value as ContactMethod,
  label,
}));

export function ParkRequestForm() {
  const formId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [parkType, setParkType] = useState<ParkType | null>(null);
  const [budget, setBudget] = useState("");
  const [currency, setCurrency] = useState<Currency>("INR");
  const [location, setLocation] = useState("");
  const [siteArea, setSiteArea] = useState("");
  const [visitors, setVisitors] = useState("");
  const [timeline, setTimeline] = useState<Timeline | null>(null);
  const [contactMethod, setContactMethod] = useState<ContactMethod>("email");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ ticket: Ticket; emailSent: boolean } | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const amount = Number(budget);
    const found: Errors = {};
    if (name.trim().length < 2) found.name = "Please enter your full name.";
    if (!EMAIL_RE.test(email.trim())) found.email = "Please enter a valid email address.";
    if (!PHONE_RE.test(phone.trim())) found.phone = "Please enter a valid phone number.";
    if (!parkType) found.parkType = "Choose the kind of park.";
    if (!Number.isFinite(amount) || amount <= 0) found.budget = "Enter your budget. A rough figure is fine.";
    if (location.trim().length < 2) found.location = "Tell us where the park will be.";
    if (!timeline) found.timeline = "Choose when you would like to start.";
    if (parkType === "other" && !notes.trim()) found.notes = "Describe the park you have in mind.";

    setErrors(found);
    const missing = Object.keys(found).length;
    if (missing) {
      setFormError(
        missing === 1
          ? Object.values(found)[0]
          : `${missing} things still need your attention. They're marked above.`
      );
      return;
    }

    setFormError(null);
    setBusy(true);
    try {
      const res = await fetch(`${API_BASE}/web-leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          parkTypes: [parkType],
          budget: amount,
          currency,
          location,
          siteArea: siteArea || null,
          expectedVisitors: visitors ? Number(visitors) : null,
          timeline,
          contactMethod,
          notes: notes || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong. Please try again.");
      setResult({ ticket: data.ticket, emailSent: data.emailSent });
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  if (result) {
    const how = CONTACT_METHODS[result.ticket.contactMethod];
    return (
      <div className="border-t-2 border-gold bg-sand p-8 sm:p-10">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink">
          Request received
        </p>
        <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          It&apos;s with the E7 team.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          {how === "Email"
            ? "Someone from E7 Entertainments will reply by email."
            : `Someone from E7 Entertainments will reach you by ${how === "WhatsApp" ? "WhatsApp" : "phone"} at ${phone}.`}
        </p>
        <div className="mt-6 border-t border-line bg-white px-4 py-3">
          <p className="text-sm text-muted">Your reference</p>
          <p className="font-display text-lg font-semibold tracking-tight text-ink">
            {result.ticket.ref}
          </p>
        </div>
        <p className="mt-6 text-sm text-muted">
          {result.emailSent
            ? `A copy of everything you submitted is on its way to ${email}.`
            : "We couldn't send the confirmation email just now, but your request is saved and nothing is lost."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border-t-2 border-gold bg-sand p-8 sm:p-10">
      <fieldset>
        <legend className="font-display text-lg font-semibold tracking-tight text-ink">
          The park
        </legend>
        <div className="mt-4">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink">
            What would you like to build?
          </p>
          <div className="mt-2">
            <RadioTiles name={`${formId}-parkType`} options={PARK_OPTIONS} value={parkType} onChange={setParkType} />
          </div>
          {errors.parkType ? <p className="mt-1.5 text-sm text-error">{errors.parkType}</p> : null}
        </div>
      </fieldset>

      <fieldset className="mt-10">
        <legend className="font-display text-lg font-semibold tracking-tight text-ink">
          Budget and site
        </legend>
        <p className="mt-1 text-sm text-muted">A rough figure is fine. Only the E7 team sees it.</p>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <FieldShell label="Total budget" htmlFor={`${formId}-budget`} error={errors.budget}>
            <input
              id={`${formId}-budget`}
              value={budget}
              onChange={(e) => setBudget(digits(e.target.value).slice(0, 13))}
              inputMode="numeric"
              placeholder="25000000"
              className={inputClass}
            />
          </FieldShell>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink">
              Currency
            </p>
            <div className="mt-2">
              <RadioSegments
                name={`${formId}-currency`}
                options={CURRENCY_OPTIONS}
                value={currency}
                onChange={setCurrency}
              />
            </div>
          </div>
          <FieldShell label="Location" htmlFor={`${formId}-location`} error={errors.location}>
            <input
              id={`${formId}-location`}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, country"
              maxLength={120}
              className={inputClass}
            />
          </FieldShell>
          <FieldShell label="Site area" htmlFor={`${formId}-siteArea`} optional>
            <input
              id={`${formId}-siteArea`}
              value={siteArea}
              onChange={(e) => setSiteArea(e.target.value)}
              placeholder="5 acres or 20,000 sq ft"
              maxLength={60}
              className={inputClass}
            />
          </FieldShell>
          <FieldShell label="Expected visitors per day" htmlFor={`${formId}-visitors`} optional>
            <input
              id={`${formId}-visitors`}
              value={visitors}
              onChange={(e) => setVisitors(digits(e.target.value).slice(0, 7))}
              inputMode="numeric"
              placeholder="2000"
              className={inputClass}
            />
          </FieldShell>
        </div>
      </fieldset>

      <fieldset className="mt-10">
        <legend className="font-display text-lg font-semibold tracking-tight text-ink">
          Timing and contact
        </legend>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink">
              When would you like to start?
            </p>
            <div className="mt-2">
              <RadioList
                name={`${formId}-timeline`}
                options={TIMELINE_OPTIONS}
                value={timeline}
                onChange={setTimeline}
              />
            </div>
            {errors.timeline ? <p className="mt-1.5 text-sm text-error">{errors.timeline}</p> : null}
          </div>
          <div className="space-y-5">
            <FieldShell label="Your name" htmlFor={`${formId}-name`} error={errors.name}>
              <input
                id={`${formId}-name`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={80}
                className={inputClass}
              />
            </FieldShell>
            <FieldShell label="Email" htmlFor={`${formId}-email`} error={errors.email}>
              <input
                id={`${formId}-email`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </FieldShell>
            <FieldShell label="Phone" htmlFor={`${formId}-phone`} error={errors.phone}>
              <input
                id={`${formId}-phone`}
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className={inputClass}
              />
            </FieldShell>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink">
                How should we reach you?
              </p>
              <div className="mt-2">
                <RadioSegments
                  name={`${formId}-contactMethod`}
                  options={CONTACT_OPTIONS}
                  value={contactMethod}
                  onChange={setContactMethod}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <FieldShell
            label="Anything else we should know?"
            htmlFor={`${formId}-notes`}
            optional={parkType !== "other"}
            error={errors.notes}
          >
            <textarea
              id={`${formId}-notes`}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              maxLength={2000}
              placeholder="Theme ideas, must-have rides, age groups, whether you already own the land"
              className={inputClass}
            />
          </FieldShell>
        </div>
      </fieldset>

      {formError ? <p className="mt-6 text-sm font-medium text-error">{formError}</p> : null}

      <button type="submit" disabled={busy} className="btn btn-solid mt-8 disabled:opacity-60">
        {busy ? "Sending…" : "Send request"}
      </button>
      <p className="mt-4 text-sm text-muted">We&apos;ll email a copy of this request to you.</p>
    </form>
  );
}
