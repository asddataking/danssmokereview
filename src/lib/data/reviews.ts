import "server-only";

import { productReviews } from "@/data/seed";
import type { ProductReview, ScoreboardSort } from "@/lib/types";
import {
  filterReviews,
  sortReviews,
  type ReviewFilters,
} from "@/lib/data/review-filters";
import { mapReviewRow, type ReviewRow } from "@/lib/supabase/mappers";
import { getSupabaseServer } from "@/lib/supabase/server";

export type { ReviewFilters } from "@/lib/data/review-filters";

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
    /* use seed fallback */
  }
  return [...productReviews];
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

export async function getReviewById(
  id: string,
): Promise<ProductReview | undefined> {
  const reviews = await getReviewsSource();
  return reviews.find((r) => r.id === id);
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
  const current = await getReviewById(id);
  if (!current) return [];
  return (await getReviewsSource())
    .filter((r) => r.id !== id && r.category === current.category)
    .sort((a, b) => b.danScore - a.danScore)
    .slice(0, limit);
}

export async function getAllReviewSlugs(): Promise<string[]> {
  return (await getReviewsSource()).map((r) => r.slug);
}
