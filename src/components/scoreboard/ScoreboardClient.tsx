"use client";

import { useMemo, useState } from "react";
import { ScoreboardList } from "@/components/scoreboard/ScoreboardList";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import { SortFilter } from "@/components/ui/SortFilter";
import { filterReviews, sortReviews } from "@/lib/data/review-filters";
import type { ProductCategory, ProductReview, ScoreboardSort } from "@/lib/types";

interface ScoreboardClientProps {
  reviews: ProductReview[];
}

export function ScoreboardClient({ reviews }: ScoreboardClientProps) {
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const [sort, setSort] = useState<ScoreboardSort>("danScore");

  const filtered = useMemo(
    () =>
      sortReviews(
        filterReviews(reviews, {
          category: category === "All" ? undefined : category,
        }),
        sort,
      ),
    [reviews, category, sort],
  );

  return (
    <div>
      <div className="mb-6 space-y-4">
        <CategoryFilter selected={category} onChange={setCategory} />
        <SortFilter selected={sort} onChange={setSort} />
      </div>
      {filtered.length === 0 ? (
        <p className="border-4 border-dashed border-ink/30 p-8 text-center font-bold text-ink/60">
          No products match this filter. Try another category.
        </p>
      ) : (
        <ScoreboardList key={`${category}-${sort}`} reviews={filtered} animated />
      )}
    </div>
  );
}
