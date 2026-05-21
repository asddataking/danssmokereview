export const SITE_NAME = "Dan's Smoke Reviews";
export const SITE_TAGLINE = "Michigan's Smoke Scoreboard";
export const SITE_DESCRIPTION =
  "Real reviews. Real smoke. Real Michigan. Cannabis product reviews, scoreboard rankings, audio sessions, and culture.";

export const KICK_URL = "https://kick.com/danssmokereview";
export const DANK_N_DEVOUR_URL = "https://dankndevour.com";
export const SPLIFFT_URL = "https://www.getsplifft.com";

export const NAV_LINKS = [
  { label: "Scoreboard", href: "/scoreboard", external: false },
  { label: "Reviews", href: "/reviews", external: false },
  { label: "Audio", href: "/audio", external: false },
  { label: "Live at 4:20", href: "/about#live", external: false },
  { label: "DankNDevour", href: DANK_N_DEVOUR_URL, external: true },
  { label: "Splifft", href: SPLIFFT_URL, external: true },
] as const;
