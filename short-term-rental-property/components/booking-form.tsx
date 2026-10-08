"use client";

import { FormEvent, useState, useSyncExternalStore } from "react";
import { property } from "@/lib/property";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] as const;
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;
const SHORT_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

function todayIso() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
}

function subscribeToToday() {
  return () => {};
}

function useTodayIso() {
  return useSyncExternalStore(subscribeToToday, todayIso, () => "");
}

function shiftMonth(month: string, delta: number) {
  const [year, monthNumber] = month.split("-").map(Number);
  const next = new Date(year, monthNumber - 1 + delta, 1);
  return `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`;
}

function monthCells(month: string) {
  const [year, monthNumber] = month.split("-").map(Number);
  const firstWeekday = new Date(year, monthNumber - 1, 1).getDay();
  const count = new Date(year, monthNumber, 0).getDate();
  const cells: string[] = Array.from({ length: firstWeekday }, () => "");

  for (let day = 1; day <= count; day += 1) {
    cells.push(
      `${year}-${String(monthNumber).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
    );
  }

  while (cells.length % 7 !== 0) cells.push("");
  return cells;
}

function formatDate(iso: string) {
  const [, month, day] = iso.split("-").map(Number);
  const year = Number(iso.slice(0, 4));
  return `${SHORT_MONTHS[month - 1]} ${day}, ${year}`;
}

function nightCount(checkIn: string, checkOut: string) {
  const [startYear, startMonth, startDay] = checkIn.split("-").map(Number);
  const [endYear, endMonth, endDay] = checkOut.split("-").map(Number);
  const start = Date.UTC(startYear, startMonth - 1, startDay);
  const end = Date.UTC(endYear, endMonth - 1, endDay);
  return Math.round((end - start) / 86_400_000);
}

export function BookingForm() {
  const today = useTodayIso();
  const [monthOverride, setMonthOverride] = useState<string | null>(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const month = monthOverride ?? (today ? today.slice(0, 7) : "2026-10");
  const cells = monthCells(month);
  const [year, monthNumber] = month.split("-").map(Number);
  const canGoBack = !today || month > today.slice(0, 7);

  function chooseDay(iso: string) {
    if (today && iso < today) return;

    if (!checkIn || checkOut) {
      setCheckIn(iso);
      setCheckOut("");
      setError(null);
      return;
    }

    if (iso <= checkIn) {
      setCheckIn(iso);
      setError(null);
      return;
    }

    setCheckOut(iso);
    setError(null);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!checkIn || !checkOut || checkOut <= checkIn) {
      setError("Confirm a check-in and a later check-out on the calendar.");
      return;
    }

    setError(null);
    setSent(true);
  }

  if (sent && checkIn && checkOut) {
    const nights = nightCount(checkIn, checkOut);
    return (
      <div
        className="flex min-h-80 flex-col items-start justify-center rounded-md border border-line bg-linen px-6 py-10"
        role="status"
      >
        <p className="text-sm font-semibold text-pine">Request received</p>
        <p className="mt-2 font-serif text-3xl font-semibold text-ink">
          We’ll confirm within 24 hours.
        </p>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
          {formatDate(checkIn)} – {formatDate(checkOut)} · {nights} night
          {nights === 1 ? "" : "s"}. No payment is taken here. The exact
          address is shared after your booking is confirmed.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-pine underline-offset-4 hover:underline"
          onClick={() => {
            setSent(false);
            setCheckIn("");
            setCheckOut("");
          }}
        >
          Send another request
        </button>
      </div>
    );
  }

  const prompt = !checkIn
    ? "Select your check-in date."
    : !checkOut
      ? "Select your check-out date."
      : `${nightCount(checkIn, checkOut)} night${nightCount(checkIn, checkOut) === 1 ? "" : "s"} confirmed.`;

  return (
    <form className="grid gap-5" onSubmit={onSubmit}>
      <div>
        <div className="flex items-center justify-between gap-3">
          <p className="font-serif text-2xl font-semibold text-ink">
            {MONTHS[monthNumber - 1]} {year}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              className="grid size-9 place-items-center rounded-lg border border-line text-ink transition-colors hover:border-pine disabled:cursor-not-allowed disabled:opacity-30"
              onClick={() => setMonthOverride(shiftMonth(month, -1))}
              disabled={!canGoBack}
              aria-label="Previous month"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              className="grid size-9 place-items-center rounded-lg border border-line text-ink transition-colors hover:border-pine"
              onClick={() => setMonthOverride(shiftMonth(month, 1))}
              aria-label="Next month"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-7 text-center text-xs font-medium text-muted">
          {WEEKDAYS.map((day) => (
            <div key={day} className="py-1">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7" role="grid" aria-label="Stay dates">
          {cells.map((iso, index) => {
            if (!iso) {
              return <div key={`empty-${month}-${index}`} className="h-10" />;
            }

            const disabled = Boolean(today && iso < today);
            const isStart = iso === checkIn;
            const isEnd = iso === checkOut;
            const inRange = Boolean(checkIn && checkOut && iso > checkIn && iso < checkOut);
            const dayNumber = Number(iso.slice(8));

            return (
              <div key={iso} className="relative flex h-10 items-center justify-center">
                {checkOut && (inRange || isEnd) ? (
                  <span className="absolute inset-y-1 left-0 right-1/2 bg-pine/10" />
                ) : null}
                {checkOut && (inRange || isStart) ? (
                  <span className="absolute inset-y-1 left-1/2 right-0 bg-pine/10" />
                ) : null}
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => chooseDay(iso)}
                  aria-pressed={isStart || isEnd}
                  aria-label={formatDate(iso)}
                  className={`relative z-10 grid size-9 place-items-center rounded-full text-sm transition-colors ${
                    isStart || isEnd
                      ? "bg-pine text-ivory"
                      : disabled
                        ? "cursor-not-allowed text-stone-300"
                        : "text-ink hover:bg-linen"
                  } ${iso === today && !isStart && !isEnd ? "ring-1 ring-pine/40" : ""}`}
                >
                  {dayNumber}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
        <div className="bg-linen px-4 py-3">
          <p className="text-sm text-muted">Check-in</p>
          <p className="mt-0.5 text-sm font-semibold text-ink">
            {checkIn ? formatDate(checkIn) : "Select a date"}
          </p>
        </div>
        <div className="bg-linen px-4 py-3">
          <p className="text-sm text-muted">Check-out</p>
          <p className="mt-0.5 text-sm font-semibold text-ink">
            {checkOut ? formatDate(checkOut) : "Select a date"}
          </p>
        </div>
      </div>
      <p className="text-sm text-muted" aria-live="polite">
        {prompt}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
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
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
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
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink sm:col-span-2">
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
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink sm:col-span-2">
          Message (optional)
          <textarea
            className="field min-h-24 resize-y"
            name="message"
            rows={3}
            placeholder={property.booking.messagePlaceholder}
          />
        </label>
      </div>

      {error ? (
        <p className="text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-lg bg-pine px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pine-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine"
      >
        {property.booking.submit}
      </button>
    </form>
  );
}
