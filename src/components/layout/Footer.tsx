import Image from "next/image";
import Link from "next/link";
import { NewsletterFooterSignup } from "@/components/newsletter/NewsletterFooterSignup";
import { ExternalLinkLabel } from "@/components/ui/ExternalLinkLabel";
import {
  DANK_N_DEVOUR_URL,
  KICK_URL,
  PARTNER_LOGOS,
  SITE_NAME,
  SPLIFFT_URL,
} from "@/lib/constants";

const ecosystem = [
  { label: SITE_NAME, href: "/", external: false as const },
  {
    label: "DankNDevour",
    href: DANK_N_DEVOUR_URL,
    external: true as const,
    logo: PARTNER_LOGOS.dankNDevour,
  },
  {
    label: "Splifft",
    href: SPLIFFT_URL,
    external: true as const,
    logo: PARTNER_LOGOS.splifft,
  },
  { label: "The Dank Network", href: "/about", external: false as const },
];

const socials = [
  { label: "Kick", href: KICK_URL },
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-ink bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="font-display text-2xl font-black uppercase text-slime">
              {SITE_NAME}
            </p>
            <p className="mt-2 text-sm text-white/80">
              Michigan&apos;s Smoke Scoreboard. Real reviews. Real smoke. Real
              Michigan.
            </p>
            <Link
              href="/media"
              className="mt-4 inline-flex items-center gap-2 border-3 border-slime bg-slime/10 px-3 py-2 text-xs font-bold uppercase text-slime hover:bg-slime hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slime"
            >
              <span aria-hidden="true">📦</span>
              Media Pack
            </Link>
          </div>
          <nav aria-label="Ecosystem links">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slime">
              Ecosystem
            </p>
            <ul className="space-y-3">
              {ecosystem.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-3 text-sm font-semibold hover:text-slime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slime"
                  >
                    {"logo" in item && item.logo && (
                      <Image
                        src={item.logo.src}
                        alt=""
                        width={32}
                        height={32}
                        className="h-8 w-8 shrink-0 rounded-sm border-2 border-white/20 bg-white object-contain p-0.5"
                        aria-hidden
                      />
                    )}
                    <span>{item.label}</span>
                    {item.external && <ExternalLinkLabel />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <NewsletterFooterSignup />
          <nav aria-label="Social links">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slime">
              Social
            </p>
            <ul className="space-y-2">
              {socials.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold hover:text-slime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slime"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    {...(item.href === "#" && { "aria-disabled": true })}
                  >
                    {item.label}
                    {item.href.startsWith("http") && <ExternalLinkLabel />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 border-t border-white/20 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {SITE_NAME}. For adults 21+ in Michigan.
        </p>
      </div>
    </footer>
  );
}
