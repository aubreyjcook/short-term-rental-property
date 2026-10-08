"use client";

import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { property } from "@/lib/property";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-linen/90 backdrop-blur-md">
      <div className="h-1 bg-pine" />
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-ink">
          <span className="grid size-8 place-items-center bg-pine font-serif text-sm text-ivory">
            L
          </span>
          <span className="font-serif text-lg tracking-tight">
            {property.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {property.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#book"
            className="inline-flex items-center justify-center bg-pine px-3.5 py-2 text-sm font-medium text-ivory transition-colors hover:bg-pine-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine sm:px-4"
          >
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Request to book</span>
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-linen px-5 py-3 md:hidden"
          aria-label="Primary"
        >
          <ul className="flex flex-col">
            {property.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  className="block py-3 text-base text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
