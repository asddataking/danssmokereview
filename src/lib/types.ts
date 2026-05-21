export type ProductCategory =
  | "Flower"
  | "Rosin"
  | "Pre-Roll"
  | "Edible"
  | "Vape"
  | "Concentrate";

export type Verdict = "Worth It" | "Mid" | "Taxed";

export type ScoreboardSort =
  | "danScore"
  | "communityScore"
  | "newest"
  | "worthTheTax";

export type Movement = "up" | "down" | "neutral";

export interface ProductReview {
  id: string;
  slug: string;
  productName: string;
  brand: string;
  category: ProductCategory;
  imageUrl: string;
  danScore: number;
  communityScore: number;
  pricePaid: number;
  verdict: Verdict;
  flavorNotes: string[];
  effects: string[];
  shortQuote: string;
  fullReview: string;
  whereToBuyUrl: string;
  /** External link to a review episode (Kick, YouTube, etc.) — not hosted on this site */
  listenUrl?: string;
  videoUrl?: string;
  movement?: Movement;
  createdAt: string;
}

export interface AudioSession {
  id: string;
  title: string;
  slug: string;
  date: string;
  duration: string;
  topic: string;
  relatedReviewId?: string;
  relatedReviewSlug?: string;
  /** External link (Kick, Spotify, YouTube, etc.) — not hosted on this site */
  listenUrl?: string;
  description: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Flower",
  "Rosin",
  "Pre-Roll",
  "Edible",
  "Vape",
  "Concentrate",
];

export const VERDICT_ORDER: Record<Verdict, number> = {
  "Worth It": 0,
  Mid: 1,
  Taxed: 2,
};

export function formatScore(score: number): string {
  return score.toFixed(1);
}

export function getVerdictStyles(verdict: Verdict): {
  bg: string;
  text: string;
  border: string;
} {
  switch (verdict) {
    case "Worth It":
      return {
        bg: "bg-slime",
        text: "text-ink",
        border: "border-ink",
      };
    case "Mid":
      return {
        bg: "bg-nick-orange",
        text: "text-white",
        border: "border-ink",
      };
    case "Taxed":
      return {
        bg: "bg-grape",
        text: "text-white",
        border: "border-ink",
      };
  }
}

export function getMovement(slug: string): Movement {
  const hash = slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const mod = hash % 3;
  if (mod === 0) return "up";
  if (mod === 1) return "down";
  return "neutral";
}
