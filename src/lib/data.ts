import "server-only";

import { audioSessions, productReviews } from "@/data/seed";
import {
  filterReviews,
  sortReviews,
  type ReviewFilters,
} from "@/lib/review-filters";
import type {
  AudioSession,
  Movement,
  ProductCategory,
  ProductReview,
  ScoreboardSort,
  Verdict,
} from "@/lib/types";
import { getMovement } from "@/lib/types";
import { getSupabaseServer } from "@/utils/supabase/server";

export type { ReviewFilters } from "@/lib/review-filters";

type ReviewRow = {
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

type AudioSessionRow = {
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

const AUDIO_SELECT = `
  *,
  related_review:reviews!audio_sessions_related_review_id_fkey (slug)
`;

const reviewSlugById = Object.fromEntries(
  productReviews.map((r) => [r.id, r.slug]),
);

function mapReviewRow(row: ReviewRow): ProductReview {
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

function mapAudioSessionRow(row: AudioSessionRow): AudioSession {
  const related = row.related_review;
  const review = Array.isArray(related) ? related[0] : related;
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    date: row.session_date,
    duration: row.duration,
    topic: row.topic,
    description: row.description,
    relatedReviewId: row.related_review_id ?? undefined,
    relatedReviewSlug: review?.slug,
    listenUrl: row.audio_url ?? undefined,
  };
}

async function getReviewsSource(): Promise<ProductReview[]> {
  try {
    const supabase = await getSupabaseServer();
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("dan_score", { ascending: false });

    if (!error && data?.length) {
      return (data as ReviewRow[]).map(mapReviewRow);
    }
  } catch {
    /* seed fallback */
  }
  return [...productReviews];
}

function enrichSeedAudio(sessions: AudioSession[]): AudioSession[] {
  return sessions.map((session) => ({
    ...session,
    relatedReviewSlug: session.relatedReviewId
      ? reviewSlugById[session.relatedReviewId]
      : undefined,
  }));
}

async function getAudioSource(): Promise<AudioSession[]> {
  try {
    const supabase = await getSupabaseServer();
    const { data, error } = await supabase
      .from("audio_sessions")
      .select(AUDIO_SELECT)
      .order("session_date", { ascending: false });

    if (!error && data?.length) {
      return (data as AudioSessionRow[]).map(mapAudioSessionRow);
    }
  } catch {
    /* seed fallback */
  }
  return enrichSeedAudio(audioSessions).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getAllReviews(): Promise<ProductReview[]> {
  return getReviewsSource();
}

export async function getReviewBySlug(
  slug: string,
): Promise<ProductReview | undefined> {
  try {
    const supabase = await getSupabaseServer();
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (!error && data) return mapReviewRow(data as ReviewRow);
  } catch {
    /* fall through */
  }
  return productReviews.find((r) => r.slug === slug);
}

export async function getScoreboardReviews(
  filters: ReviewFilters = {},
  sort: ScoreboardSort = "danScore",
): Promise<ProductReview[]> {
  const reviews = await getReviewsSource();
  return sortReviews(filterReviews(reviews, filters), sort);
}

export async function getTopReviews(limit = 5): Promise<ProductReview[]> {
  return (await getScoreboardReviews({}, "danScore")).slice(0, limit);
}

export async function getLatestReviews(limit = 4): Promise<ProductReview[]> {
  return sortReviews(await getReviewsSource(), "newest").slice(0, limit);
}

export async function getRelatedReviews(
  id: string,
  limit = 3,
): Promise<ProductReview[]> {
  const reviews = await getReviewsSource();
  const current = reviews.find((r) => r.id === id);
  if (!current) return [];
  return reviews
    .filter((r) => r.id !== id && r.category === current.category)
    .sort((a, b) => b.danScore - a.danScore)
    .slice(0, limit);
}

export async function getAllReviewSlugs(): Promise<string[]> {
  return (await getReviewsSource()).map((r) => r.slug);
}

export async function getAllAudioSessions(): Promise<AudioSession[]> {
  return getAudioSource();
}

export async function getLatestAudioSessions(
  limit = 3,
): Promise<AudioSession[]> {
  return (await getAudioSource()).slice(0, limit);
}
