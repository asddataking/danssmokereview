export const NEWSLETTER_NAME = "Michigan Smoke Scoreboard";
export const NEWSLETTER_TAGLINE =
  "Weekly rankings, hidden gems, worth-the-tax picks, and real Michigan smoke culture.";
export const NEWSLETTER_HEADLINE = `Join the ${NEWSLETTER_NAME}`;
export const NEWSLETTER_BUTTON = "Get the Weekly Scoreboard";
export const NEWSLETTER_MICROCOPY =
  "No spam. Just the best Michigan smoke signals.";
export const NEWSLETTER_POWERED_BY = "Powered by Dan's Smoke Reviews";

export const NEWSLETTER_SOURCES = [
  "homepage_hero",
  "homepage_scoreboard",
  "scoreboard_top",
  "scoreboard_footer",
  "review_footer",
  "site_footer",
  "subscribe_page",
] as const;

export type NewsletterSource = (typeof NEWSLETTER_SOURCES)[number];

export const NEWSLETTER_BENEFITS = [
  "Worth-the-tax picks",
  "Hidden Michigan dispensary finds",
  "Product rankings",
  "Smoke culture notes",
  "Review recaps",
  "Food pairing callouts when relevant",
] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidNewsletterEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email.trim());
}
