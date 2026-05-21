import { productReviews } from "@/data/seed";
import type {
  ProductCategory,
  ProductReview,
  ScoreboardSort,
  Verdict,
} from "@/lib/types";
import { VERDICT_ORDER } from "@/lib/types";

// SUPABASE: import { createClient } from "@/utils/supabase/server";
// SUPABASE: const supabase = createClient(cookieStore);
// SUPABASE: const { data } = await supabase.from("reviews").select("*");

export function getAllReviews(): ProductReview[] {
  return [...productReviews];
}

export function getReviewBySlug(slug: string): ProductReview | undefined {
  return productReviews.find((r) => r.slug === slug);
}

export function getReviewById(id: string): ProductReview | undefined {
  return productReviews.find((r) => r.id === id);
}

export interface ReviewFilters {
  category?: ProductCategory | "All";
  verdict?: Verdict | "All";
}

export function filterReviews(
  reviews: ProductReview[],
  filters: ReviewFilters,
): ProductReview[] {
  return reviews.filter((r) => {
    if (filters.category && filters.category !== "All" && r.category !== filters.category) {
      return false;
    }
    if (filters.verdict && filters.verdict !== "All" && r.verdict !== filters.verdict) {
      return false;
    }
    return true;
  });
}

export function sortReviews(
  reviews: ProductReview[],
  sort: ScoreboardSort,
): ProductReview[] {
  const sorted = [...reviews];
  switch (sort) {
    case "danScore":
      return sorted.sort((a, b) => b.danScore - a.danScore);
    case "communityScore":
      return sorted.sort((a, b) => b.communityScore - a.communityScore);
    case "newest":
      return sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    case "worthTheTax":
      return sorted.sort(
        (a, b) => VERDICT_ORDER[a.verdict] - VERDICT_ORDER[b.verdict],
      );
    default:
      return sorted;
  }
}

export function getScoreboardReviews(
  filters: ReviewFilters = {},
  sort: ScoreboardSort = "danScore",
): ProductReview[] {
  const filtered = filterReviews(productReviews, filters);
  return sortReviews(filtered, sort);
}

export function getTopReviews(limit = 5): ProductReview[] {
  return getScoreboardReviews({}, "danScore").slice(0, limit);
}

export function getLatestReviews(limit = 4): ProductReview[] {
  return sortReviews(productReviews, "newest").slice(0, limit);
}

export function getRelatedReviews(
  id: string,
  limit = 3,
): ProductReview[] {
  const current = getReviewById(id);
  if (!current) return [];
  return productReviews
    .filter((r) => r.id !== id && r.category === current.category)
    .sort((a, b) => b.danScore - a.danScore)
    .slice(0, limit);
}
