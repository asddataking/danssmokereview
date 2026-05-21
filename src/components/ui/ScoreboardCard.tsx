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
  onSelect?: (review: ProductReview) => void;
}

const cardStyles = (compact: boolean) =>
  cn(
    "group flex w-full gap-4 border-4 border-ink bg-white p-4 text-left shadow-sticker transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-sticker-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric",
    compact && "p-3",
  );

export function ScoreboardCard({
  review,
  rank,
  compact = false,
  onSelect,
}: ScoreboardCardProps) {
  const movement = review.movement ?? getMovement(review.slug);

  const content = (
    <>
      <div
        className={cn(
          "flex shrink-0 flex-col items-center justify-center border-4 border-ink bg-slime font-display font-black text-ink scoreboard-rank-badge",
          compact ? "h-12 w-12 text-xl" : "h-14 w-14 text-2xl",
        )}
      >
        #{rank}
      </div>

      <div className="relative h-16 w-16 shrink-0 overflow-hidden border-3 border-ink bg-zinc-200">
        <Image
          src={review.imageUrl}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
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
        {onSelect && (
          <p className="mt-2 text-xs font-bold uppercase text-electric opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            Tap for Dan&apos;s take →
          </p>
        )}
      </div>
    </>
  );

  if (onSelect) {
    return (
      <button
        type="button"
        onClick={() => onSelect(review)}
        className={cardStyles(compact)}
        aria-label={`${review.productName} by ${review.brand}, rank ${rank}, Dan score ${formatScore(review.danScore)}. View details.`}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={`/reviews/${review.slug}`}
      className={cardStyles(compact)}
    >
      {content}
    </Link>
  );
}
