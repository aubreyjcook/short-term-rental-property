"use client";

import { FormEvent, useState } from "react";
import { property } from "@/lib/property";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="flex min-h-64 flex-col justify-center rounded-md border border-line bg-white px-6 py-10"
        role="status"
      >
        <p className="text-sm font-semibold text-pine">Message sent</p>
        <p className="mt-2 font-serif text-3xl font-semibold text-ink">
          We’re happy to help.
        </p>
        <p className="mt-3 text-sm leading-6 text-muted">
          Questions about the property, the area, or your dates will reach the
          host at {property.email}.
        </p>
        <button
          type="button"
          className="mt-6 self-start text-sm font-medium text-pine underline-offset-4 hover:underline"
          onClick={() => setSent(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Email
        <input
          className="field bg-white"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={property.contact.emailPlaceholder}
        />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Message
        <textarea
          className="field min-h-32 resize-y bg-white"
          name="message"
          rows={4}
          required
          placeholder={property.contact.messagePlaceholder}
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-lg bg-pine px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pine-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine"
      >
        {property.contact.submit}
      </button>
    </form>
  );
}
