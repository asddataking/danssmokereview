import type { AudioSession, Movement, ProductCategory, ProductReview, Verdict } from "@/lib/types";
import { getMovement } from "@/lib/types";

export type ReviewRow = {
  id: string;
  slug: string;
  product_name: string;
  brand: string;
  category: string;
  image_url: string;
  dan_score: number;
  community_score: number;
  price_paid: number;
  verdict: string;
  flavor_notes: string[];
  effects: string[];
  short_quote: string;
  full_review: string;
  where_to_buy_url: string | null;
  audio_url: string | null;
  video_url: string | null;
  movement: Movement;
  created_at: string;
};

export type AudioSessionRow = {
  id: string;
  slug: string;
  title: string;
  session_date: string;
  duration: string;
  topic: string;
  description: string;
  related_review_id: string | null;
  audio_url: string | null;
  related_review?: { slug: string } | { slug: string }[] | null;
};

export function mapReviewRow(row: ReviewRow): ProductReview {
  return {
    id: row.id,
    slug: row.slug,
    productName: row.product_name,
    brand: row.brand,
    category: row.category as ProductCategory,
    imageUrl: row.image_url,
    danScore: Number(row.dan_score),
    communityScore: Number(row.community_score),
    pricePaid: Number(row.price_paid),
    verdict: row.verdict as Verdict,
    flavorNotes: row.flavor_notes ?? [],
    effects: row.effects ?? [],
    shortQuote: row.short_quote,
    fullReview: row.full_review,
    whereToBuyUrl: row.where_to_buy_url ?? "",
    listenUrl: row.audio_url ?? undefined,
    videoUrl: row.video_url ?? undefined,
    movement: row.movement ?? getMovement(row.slug),
    createdAt: row.created_at,
  };
}

function relatedReviewSlug(
  related: AudioSessionRow["related_review"],
): string | undefined {
  if (!related) return undefined;
  const review = Array.isArray(related) ? related[0] : related;
  return review?.slug;
}

export function mapAudioSessionRow(row: AudioSessionRow): AudioSession {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    date: row.session_date,
    duration: row.duration,
    topic: row.topic,
    description: row.description,
    relatedReviewId: row.related_review_id ?? undefined,
    relatedReviewSlug: relatedReviewSlug(row.related_review),
    listenUrl: row.audio_url ?? undefined,
  };
}
