"use client";

import { useMemo, useState } from "react";
import { ProductReviewCard } from "@/components/ui/ProductReviewCard";
import { ChipFilter } from "@/components/ui/ChipFilter";
import { filterReviews } from "@/lib/review-filters";
import type { ProductCategory, ProductReview, Verdict } from "@/lib/types";
import { PRODUCT_CATEGORIES } from "@/lib/types";

const CATEGORY_OPTIONS = [
  { value: "All" as const, label: "All" },
  ...PRODUCT_CATEGORIES.map((c) => ({ value: c, label: c })),
];

const VERDICT_OPTIONS: { value: Verdict | "All"; label: string }[] = [
  { value: "All", label: "All Verdicts" },
  { value: "Worth It", label: "Worth It" },
  { value: "Mid", label: "Mid" },
  { value: "Taxed", label: "Taxed" },
];

interface ReviewsGridClientProps {
  reviews: ProductReview[];
}

export function ReviewsGridClient({ reviews }: ReviewsGridClientProps) {
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const [verdict, setVerdict] = useState<Verdict | "All">("All");

  const filtered = useMemo(
    () =>
      filterReviews(reviews, {
        category: category === "All" ? undefined : category,
        verdict: verdict === "All" ? undefined : verdict,
      }),
    [reviews, category, verdict],
  );

  return (
    <div>
      <div className="mb-8 space-y-4">
        <ChipFilter
          options={CATEGORY_OPTIONS}
          selected={category}
          onChange={setCategory}
          ariaLabel="Filter by category"
        />
        <ChipFilter
          options={VERDICT_OPTIONS}
          selected={verdict}
          onChange={setVerdict}
          ariaLabel="Filter by verdict"
          activeClass="bg-grape text-white shadow-sticker"
        />
      </div>
      {filtered.length === 0 ? (
        <p className="border-4 border-dashed border-ink/30 p-8 text-center font-bold text-ink/60">
          No reviews match. Clear filters and try again.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((review) => (
            <ProductReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}
