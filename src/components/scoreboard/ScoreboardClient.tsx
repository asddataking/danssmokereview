"use client";

import { useMemo, useState } from "react";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import { ScoreboardCard } from "@/components/ui/ScoreboardCard";
import { SortFilter } from "@/components/ui/SortFilter";
import { getScoreboardReviews } from "@/lib/data/reviews";
import type { ProductCategory, ScoreboardSort } from "@/lib/types";

export function ScoreboardClient() {
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const [sort, setSort] = useState<ScoreboardSort>("danScore");

  const reviews = useMemo(
    () =>
      getScoreboardReviews(
        { category: category === "All" ? undefined : category },
        sort,
      ),
    [category, sort],
  );

  return (
    <div>
      <div className="mb-6 space-y-4">
        <CategoryFilter selected={category} onChange={setCategory} />
        <SortFilter selected={sort} onChange={setSort} />
      </div>
      {reviews.length === 0 ? (
        <p className="border-4 border-dashed border-ink/30 p-8 text-center font-bold text-ink/60">
          No products match this filter. Try another category.
        </p>
      ) : (
        <div className="space-y-3">
          {reviews.map((review, i) => (
            <ScoreboardCard key={review.id} review={review} rank={i + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
