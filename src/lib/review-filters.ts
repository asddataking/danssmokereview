import type {
  ProductCategory,
  ProductReview,
  ScoreboardSort,
  Verdict,
} from "@/lib/types";
import { VERDICT_ORDER } from "@/lib/types";

export interface ReviewFilters {
  category?: ProductCategory | "All";
  verdict?: Verdict | "All";
}

export function filterReviews(
  reviews: ProductReview[],
  filters: ReviewFilters,
): ProductReview[] {
  return reviews.filter((r) => {
    if (
      filters.category &&
      filters.category !== "All" &&
      r.category !== filters.category
    ) {
      return false;
    }
    if (
      filters.verdict &&
      filters.verdict !== "All" &&
      r.verdict !== filters.verdict
    ) {
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
