"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { AuthNav } from "@/components/layout/AuthNav";
import { ExternalLinkLabel } from "@/components/ui/ExternalLinkLabel";
import { NAV_LINKS, PARTNER_LOGOS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const partnerNavLogos: Record<string, { src: string; alt: string }> = {
  DankNDevour: PARTNER_LOGOS.dankNDevour,
  Splifft: PARTNER_LOGOS.splifft,
};

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-white shadow-sticker">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="font-display text-lg font-black uppercase tracking-tight text-ink hover:text-nick-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric md:text-xl"
          aria-label={`${SITE_NAME} — home`}
        >
          {SITE_NAME}
        </Link>

        <button
          type="button"
          className="border-3 border-ink bg-slime px-3 py-2 font-bold uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>

        <nav
          id={menuId}
          aria-label="Main navigation"
          className={cn(
            "absolute left-0 right-0 top-full border-b-4 border-ink bg-white md:static md:flex md:border-0 md:bg-transparent",
            open ? "block" : "hidden md:flex",
          )}
        >
          <ul className="flex flex-col gap-0 md:flex-row md:items-center md:gap-1">
            <li className="md:ml-1">
              <Link
                href="/subscribe"
                className="mx-4 my-2 block border-4 border-ink bg-nick-orange px-4 py-3 text-center text-sm font-black uppercase text-white shadow-sticker hover:bg-[#e55a00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric md:mx-0 md:my-0 md:inline-flex md:items-center md:px-4 md:py-2"
                onClick={() => setOpen(false)}
                data-cta="newsletter"
                data-source="nav"
              >
                Join Newsletter
              </Link>
            </li>
            {NAV_LINKS.map((link) => {
              const logo = partnerNavLogos[link.label];

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 border-ink px-4 py-3 text-sm font-bold uppercase hover:bg-slime/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric md:border-0 md:py-2 md:hover:bg-slime"
                    onClick={() => setOpen(false)}
                  >
                    {logo && (
                      <Image
                        src={logo.src}
                        alt=""
                        width={24}
                        height={24}
                        className="h-6 w-6 shrink-0 object-contain"
                        aria-hidden
                      />
                    )}
                    <span>{link.label}</span>
                    {link.external && <ExternalLinkLabel />}
                  </Link>
                </li>
              );
            })}
            <AuthNav />
          </ul>
        </nav>
      </div>
    </header>
  );
}
