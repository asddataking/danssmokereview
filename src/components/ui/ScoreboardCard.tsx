import Image from "next/image";
import Link from "next/link";
import { MovementIndicator } from "@/components/ui/MovementIndicator";
import { VerdictBadge } from "@/components/ui/VerdictBadge";
import type { ProductReview } from "@/lib/types";
import { formatScore, getMovement } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ScoreboardCardProps {
  review: ProductReview;
  rank: number;
  compact?: boolean;
}

export function ScoreboardCard({
  review,
  rank,
  compact = false,
}: ScoreboardCardProps) {
  const movement = getMovement(review.slug);

  return (
    <Link
      href={`/reviews/${review.slug}`}
      className={cn(
        "group flex gap-4 border-4 border-ink bg-white p-4 shadow-sticker transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-sticker-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric",
        compact && "p-3",
      )}
    >
      <div
        className={cn(
          "flex shrink-0 flex-col items-center justify-center border-4 border-ink bg-slime font-display font-black text-ink",
          compact ? "h-12 w-12 text-xl" : "h-14 w-14 text-2xl",
        )}
      >
        #{rank}
      </div>

      <div className="relative h-16 w-16 shrink-0 overflow-hidden border-3 border-ink bg-zinc-200">
        <Image
          src={review.imageUrl}
          alt={review.productName}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-lg font-black uppercase leading-tight text-ink group-hover:text-nick-orange">
              {review.productName}
            </h3>
            <p className="text-sm font-semibold text-ink/70">
              {review.brand} · {review.category}
            </p>
          </div>
          <MovementIndicator movement={movement} />
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <div className="text-sm">
            <span className="font-bold text-ink">Dan </span>
            <span className="font-black text-nick-orange">
              {formatScore(review.danScore)}
            </span>
          </div>
          <div className="text-sm text-ink/60">
            <span className="font-bold">Community </span>
            <span className="font-semibold">
              {formatScore(review.communityScore)}
            </span>
          </div>
          {!compact && (
            <span className="text-sm font-semibold text-ink/50">
              ~${review.pricePaid}
            </span>
          )}
          <VerdictBadge verdict={review.verdict} size="sm" />
        </div>
      </div>
    </Link>
  );
}
