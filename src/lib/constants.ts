export const SITE_NAME = "Dan's Smoke Reviews";
export const SITE_TAGLINE = "Michigan's Smoke Scoreboard";
export const SITE_DESCRIPTION =
  "Real reviews. Real smoke. Real Michigan. Cannabis product reviews, scoreboard rankings, audio sessions, and culture.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://danssmokereview.vercel.app";

export const KICK_URL = "https://kick.com/danssmokereview";
export const DANK_N_DEVOUR_URL = "https://dankndevour.com";
export const SPLIFFT_URL = "https://www.getsplifft.com";
export const MIDNIGHT_SMOKING_URL = "https://www.midnightsmoking.com/";

export const PARTNER_LOGOS = {
  dankNDevour: {
    src: "/images/partners/dankndevour-logo.png",
    alt: "DankNDevour logo",
  },
  splifft: {
    src: "/images/partners/splifft-logo.png",
    alt: "Splifft logo",
  },
} as const;

export const NAV_LINKS = [
  { label: "Scoreboard", href: "/scoreboard", external: false },
  { label: "Reviews", href: "/reviews", external: false },
  { label: "Audio", href: "/audio", external: false },
  { label: "Live at 4:20", href: "/about#live", external: false },
  { label: "DankNDevour", href: DANK_N_DEVOUR_URL, external: true },
  { label: "Splifft", href: SPLIFFT_URL, external: true },
] as const;

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
    href: "/images/og-default.jpg",
    type: "JPG",
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
