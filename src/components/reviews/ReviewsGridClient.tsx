"use client";

import { useMemo, useState } from "react";
import { ProductReviewCard } from "@/components/ui/ProductReviewCard";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import { VerdictFilter } from "@/components/ui/VerdictFilter";
import { filterReviews, getAllReviews } from "@/lib/data/reviews";
import type { ProductCategory, Verdict } from "@/lib/types";

export function ReviewsGridClient() {
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const [verdict, setVerdict] = useState<Verdict | "All">("All");

  const reviews = useMemo(() => {
    const all = getAllReviews();
    return filterReviews(all, {
      category: category === "All" ? undefined : category,
      verdict: verdict === "All" ? undefined : verdict,
    });
  }, [category, verdict]);

  return (
    <div>
      <div className="mb-8 space-y-4">
        <CategoryFilter selected={category} onChange={setCategory} />
        <VerdictFilter selected={verdict} onChange={setVerdict} />
      </div>
      {reviews.length === 0 ? (
        <p className="border-4 border-dashed border-ink/30 p-8 text-center font-bold text-ink/60">
          No reviews match. Clear filters and try again.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ProductReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}
