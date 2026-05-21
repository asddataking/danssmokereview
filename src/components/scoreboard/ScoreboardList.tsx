"use client";

import { useState, type CSSProperties } from "react";
import { ReviewDetailModal } from "@/components/scoreboard/ReviewDetailModal";
import { ScoreboardCard } from "@/components/ui/ScoreboardCard";
import type { ProductReview } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ScoreboardListProps {
  reviews: ProductReview[];
  compact?: boolean;
  animated?: boolean;
  className?: string;
}

export function ScoreboardList({
  reviews,
  compact = false,
  animated = true,
  className,
}: ScoreboardListProps) {
  const [selected, setSelected] = useState<ProductReview | null>(null);
  const selectedRank =
    selected != null
      ? reviews.findIndex((r) => r.id === selected.id) + 1
      : undefined;

  return (
    <>
      <div
        className={cn(
          "space-y-3",
          animated && "scoreboard-list",
          className,
        )}
        role="list"
        aria-label="Scoreboard rankings"
      >
        {reviews.map((review, i) => (
          <div
            key={review.id}
            role="listitem"
            className={animated ? "scoreboard-item-enter" : undefined}
            style={
              animated
                ? ({ animationDelay: `${i * 70}ms` } satisfies CSSProperties)
                : undefined
            }
          >
            <ScoreboardCard
              review={review}
              rank={i + 1}
              compact={compact}
              onSelect={setSelected}
            />
          </div>
        ))}
      </div>

      <ReviewDetailModal
        review={selected}
        rank={selectedRank}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
