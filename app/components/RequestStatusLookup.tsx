"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";

const API_BASE =
  process.env.NEXT_PUBLIC_E7_PARKS_API_URL || "https://api.e7entertainments.com/api";

const REF_RE = /^E7-\d{8}-[0-9A-F]{6}$/;

// Keep in sync with STATUSES in e7parks server/src/catalog.js
const STEPS = [
  { status: "open", label: "Received", detail: "Your request is in the E7 team's queue." },
  { status: "in_review", label: "In review", detail: "The team is working through your requirements." },
  { status: "quoted", label: "Quoted", detail: "A proposal has been sent to you." },
  { status: "closed", label: "Closed", detail: "This request has been wrapped up." },
] as const;

type RequestStatus = {
  ref: string;
  parkTypes: string[];
  status: string;
  statusLabel: string;
  createdAt: string;
  updatedAt: string;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

type LookupResult = { request: RequestStatus } | { error: string };

async function fetchStatus(ref: string): Promise<LookupResult> {
  try {
    const res = await fetch(`${API_BASE}/web-leads/${encodeURIComponent(ref)}`);
    const data = await res.json();
    if (!res.ok) return { error: data?.error || "Something went wrong. Please try again." };
    return { request: data.request };
  } catch {
    return { error: "Something went wrong. Please try again." };
  }
}

const normalise = (value: string) => value.trim().toUpperCase();

export function RequestStatusLookup({ initialRef = "" }: { initialRef?: string }) {
  const inputId = useId();
  const [ref, setRef] = useState(initialRef);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(() => REF_RE.test(normalise(initialRef)));
  const [result, setResult] = useState<RequestStatus | null>(null);

  function apply(outcome: LookupResult) {
    if ("request" in outcome) {
      setResult(outcome.request);
      setError(null);
    } else {
      setResult(null);
      setError(outcome.error);
    }
    setBusy(false);
  }

  async function lookup(value: string) {
    const clean = normalise(value);
    if (!REF_RE.test(clean)) {
      apply({ error: "That doesn't look like an E7 reference. It should look like E7-20261029-A1B2C3." });
      return;
    }
    setBusy(true);
    apply(await fetchStatus(clean));
  }

  // A link from the confirmation screen (?ref=...) checks straight away.
  useEffect(() => {
    const clean = normalise(initialRef);
    if (!REF_RE.test(clean)) return;
    let cancelled = false;
    fetchStatus(clean).then((outcome) => {
      if (!cancelled) apply(outcome);
    });
    return () => {
      cancelled = true;
    };
  }, [initialRef]);

  const current = result ? STEPS.findIndex((s) => s.status === result.status) : -1;

  return (
    <div className="border-t-2 border-gold bg-sand p-8 sm:p-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          lookup(ref);
        }}
      >
        <label
          htmlFor={inputId}
          className="font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink"
        >
          Your reference
        </label>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <input
            id={inputId}
            value={ref}
            onChange={(e) => setRef(e.target.value)}
            placeholder="E7-20261029-A1B2C3"
            autoComplete="off"
            spellCheck={false}
            maxLength={24}
            className="w-full border border-line bg-white px-4 py-3 font-display text-sm uppercase tracking-wide text-ink placeholder:normal-case placeholder:text-muted transition-colors focus:border-gold"
          />
          <button type="submit" disabled={busy} className="btn btn-solid shrink-0 disabled:opacity-60">
            {busy ? "Checking…" : "Check status"}
          </button>
        </div>
        <p className="mt-2 text-sm text-muted">
          You&apos;ll find it on the confirmation screen and in the email we sent you.
        </p>
        {error ? (
          <p role="alert" className="mt-4 text-sm font-medium text-error">
            {error}
          </p>
        ) : null}
      </form>

      {result ? (
        <div aria-live="polite" className="mt-8 border-t border-line pt-8">
          <p className="text-sm text-muted">Request {result.ref}</p>
          <h2 className="mt-1 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            {result.statusLabel}
          </h2>
          <p className="mt-2 text-base text-ink-soft">
            {result.parkTypes.join(", ")} · submitted {formatDate(result.createdAt)}
            {result.updatedAt !== result.createdAt ? ` · updated ${formatDate(result.updatedAt)}` : ""}
          </p>

          <ol className="mt-8 grid gap-3 sm:grid-cols-4">
            {STEPS.map((step, i) => {
              const done = current >= 0 && i <= current;
              return (
                <li
                  key={step.status}
                  aria-current={i === current ? "step" : undefined}
                  className={`border-t-2 bg-white px-4 py-3 ${done ? "border-gold" : "border-line"}`}
                >
                  <p className={`font-display text-sm font-semibold ${done ? "text-ink" : "text-muted"}`}>
                    {step.label}
                  </p>
                  {i === current ? <p className="mt-1 text-sm text-ink-soft">{step.detail}</p> : null}
                </li>
              );
            })}
          </ol>

          <p className="mt-8 text-sm text-muted">
            Questions about your request?{" "}
            <Link href="/contact" className="font-semibold text-ink underline underline-offset-4 hover:text-gold-ink">
              Contact the E7 team
            </Link>{" "}
            and quote your reference.
          </p>
        </div>
      ) : null}
    </div>
  );
}
