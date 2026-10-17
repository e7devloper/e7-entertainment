"use client";

import { useState } from "react";

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
};

export function MailtoForm({
  to,
  subject,
  fields,
  submitLabel,
}: {
  to: string;
  subject: string;
  fields: Field[];
  submitLabel: string;
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body = fields
      .map((f) => `${f.label}: ${formData.get(f.name) ?? ""}`)
      .join("\n");
    const mailto = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink"
          >
            {field.label}
          </label>
          {field.textarea ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              rows={4}
              className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm text-ink transition-colors focus:border-gold"
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type ?? "text"}
              required={field.required}
              className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm text-ink transition-colors focus:border-gold"
            />
          )}
        </div>
      ))}

      <button type="submit" className="btn btn-solid">
        {submitLabel}
      </button>

      {sent && (
        <p className="text-sm text-muted">
          Opening your email app to send this — if nothing opened, email us
          directly at{" "}
          <a href={`mailto:${to}`} className="text-gold-ink hover:text-ink">
            {to}
          </a>
          .
        </p>
      )}
    </form>
  );
}
