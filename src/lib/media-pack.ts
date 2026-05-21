import { KICK_URL, SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const MEDIA_CONTACT_EMAIL = "press@danssmokereview.com";

export const BRAND_COLORS = [
  { name: "Slime", hex: "#7CFC00", role: "Primary accent" },
  { name: "Nick Orange", hex: "#FF6600", role: "Energy / CTAs" },
  { name: "Electric", hex: "#00BFFF", role: "Links & highlights" },
  { name: "Grape", hex: "#9B59B6", role: "Community / Splifft" },
  { name: "Ink", hex: "#0A0A0A", role: "Borders & text" },
  { name: "Cream", hex: "#F5F0E8", role: "Background" },
] as const;

export const MEDIA_ASSETS = [
  {
    label: "Open Graph / social card",
    href: "/images/og-default.svg",
    type: "SVG",
  },
  {
    label: "DankNDevour partner logo",
    href: "/images/partners/dankndevour-logo.png",
    type: "PNG",
  },
  {
    label: "Splifft partner logo",
    href: "/images/partners/splifft-logo.png",
    type: "PNG",
  },
] as const;

export const MEDIA_BLURB = `${SITE_NAME} is ${SITE_TAGLINE} — ${SITE_DESCRIPTION} Built for mobile-first fans who want loud scores, honest verdicts, and Michigan cannabis culture with Nickelodeon energy and Complex-style cards.`;

export const MEDIA_LINKS = [
  { label: "Live on Kick", href: KICK_URL },
  { label: "Scoreboard", href: "/scoreboard" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
] as const;
