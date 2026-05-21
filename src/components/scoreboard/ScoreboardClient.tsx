"use client";

import { useMemo, useState } from "react";
import { ScoreboardList } from "@/components/scoreboard/ScoreboardList";
import { ChipFilter } from "@/components/ui/ChipFilter";
import { filterReviews, sortReviews } from "@/lib/review-filters";
import type { ProductCategory, ProductReview, ScoreboardSort } from "@/lib/types";
import { PRODUCT_CATEGORIES } from "@/lib/types";

const CATEGORY_OPTIONS = [
  { value: "All" as const, label: "All" },
  ...PRODUCT_CATEGORIES.map((c) => ({ value: c, label: c })),
];

const SORT_OPTIONS: { value: ScoreboardSort; label: string }[] = [
  { value: "danScore", label: "Dan Score" },
  { value: "communityScore", label: "Community Score" },
  { value: "newest", label: "Newest" },
  { value: "worthTheTax", label: "Worth the Tax" },
];

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
        <ChipFilter
          options={CATEGORY_OPTIONS}
          selected={category}
          onChange={setCategory}
          ariaLabel="Filter by category"
        />
        <ChipFilter
          options={SORT_OPTIONS}
          selected={sort}
          onChange={setSort}
          ariaLabel="Sort scoreboard"
          label="Sort by"
          activeClass="bg-electric text-ink shadow-sticker"
        />
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
