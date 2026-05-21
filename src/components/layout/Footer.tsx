import Link from "next/link";
import {
  DANK_N_DEVOUR_URL,
  KICK_URL,
  SITE_NAME,
  SPLIFFT_URL,
} from "@/lib/constants";

const ecosystem = [
  { label: SITE_NAME, href: "/" },
  { label: "DankNDevour", href: DANK_N_DEVOUR_URL, external: true },
  { label: "Splifft", href: SPLIFFT_URL, external: true },
  { label: "The Dank Network", href: "#" },
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
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-black uppercase text-slime">
              {SITE_NAME}
            </p>
            <p className="mt-2 text-sm text-white/80">
              Michigan&apos;s Smoke Scoreboard. Real reviews. Real smoke. Real
              Michigan.
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slime">
              Ecosystem
            </p>
            <ul className="space-y-2">
              {ecosystem.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={"external" in item && item.external ? "_blank" : undefined}
                    rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
                    className="text-sm font-semibold hover:text-slime"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slime">
              Social
            </p>
            <ul className="space-y-2">
              {socials.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold hover:text-slime"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-white/20 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {SITE_NAME}. For adults 21+ in Michigan.
        </p>
      </div>
    </footer>
  );
}
