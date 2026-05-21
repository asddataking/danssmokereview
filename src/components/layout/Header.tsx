"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-white shadow-sticker">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="font-display text-lg font-black uppercase tracking-tight text-ink hover:text-nick-orange md:text-xl"
        >
          {SITE_NAME}
        </Link>

        <button
          type="button"
          className="border-3 border-ink bg-slime px-3 py-2 font-bold uppercase md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        <nav
          className={cn(
            "absolute left-0 right-0 top-full border-b-4 border-ink bg-white md:static md:flex md:border-0 md:bg-transparent",
            open ? "block" : "hidden md:flex",
          )}
        >
          <ul className="flex flex-col gap-0 md:flex-row md:items-center md:gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block border-ink px-4 py-3 text-sm font-bold uppercase hover:bg-slime/30 md:border-0 md:py-2 md:hover:bg-slime"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
