"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { property } from "@/lib/property";

function todayIso() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
}

export function BookingForm() {
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const min = todayIso();
    if (checkInRef.current) checkInRef.current.min = min;
    if (checkOutRef.current) checkOutRef.current.min = min;
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const arrival = String(data.get("checkIn") ?? "");
    const departure = String(data.get("checkOut") ?? "");

    if (!arrival || !departure || departure <= arrival) {
      setError("Check-out must be after check-in.");
      return;
    }

    setError(null);
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="flex min-h-80 flex-col items-start justify-center rounded-md border border-line bg-linen px-6 py-10"
        role="status"
      >
        <p className="text-xs font-medium tracking-[0.16em] text-bronze uppercase">
          Request received
        </p>
        <p className="mt-3 font-serif text-3xl text-ink">
          We’ll confirm within 24 hours.
        </p>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
          No payment is taken here. The exact address is shared after your
          booking is confirmed.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-pine underline-offset-4 hover:underline"
          onClick={() => setSent(false)}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
      <label className="flex flex-col gap-1.5 text-xs font-medium tracking-[0.08em] text-muted uppercase">
        Check-in
        <input
          ref={checkInRef}
          className="field"
          type="date"
          name="checkIn"
          required
          onChange={(event) => {
            if (checkOutRef.current) {
              checkOutRef.current.min = event.target.value || todayIso();
            }
          }}
        />
      </label>
      <label className="flex flex-col gap-1.5 text-xs font-medium tracking-[0.08em] text-muted uppercase">
        Check-out
        <input
          ref={checkOutRef}
          className="field"
          type="date"
          name="checkOut"
          required
        />
      </label>
      <label className="flex flex-col gap-1.5 text-xs font-medium tracking-[0.08em] text-muted uppercase">
        Guests
        <select className="field field-select" name="guests" defaultValue="2">
          {Array.from({ length: property.booking.maxGuests }, (_, index) => {
            const count = index + 1;
            return (
              <option key={count} value={count}>
                {count} guest{count === 1 ? "" : "s"}
              </option>
            );
          })}
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-xs font-medium tracking-[0.08em] text-muted uppercase">
        Your name
        <input
          className="field"
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder={property.booking.namePlaceholder}
        />
      </label>
      <label className="flex flex-col gap-1.5 text-xs font-medium tracking-[0.08em] text-muted uppercase sm:col-span-2">
        Email
        <input
          className="field"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={property.booking.emailPlaceholder}
        />
      </label>
      <label className="flex flex-col gap-1.5 text-xs font-medium tracking-[0.08em] text-muted uppercase sm:col-span-2">
        Message (optional)
        <textarea
          className="field min-h-28 resize-y"
          name="message"
          rows={3}
          placeholder={property.booking.messagePlaceholder}
        />
      </label>
      {error ? (
        <p className="text-sm text-red-800 sm:col-span-2" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="inline-flex items-center justify-center bg-pine px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-pine-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine sm:col-span-2"
      >
        {property.booking.submit}
      </button>
    </form>
  );
}
