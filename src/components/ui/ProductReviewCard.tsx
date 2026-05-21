import Image from "next/image";
import Link from "next/link";
import { SlimeButton } from "@/components/ui/SlimeButton";
import { StickerLabel } from "@/components/ui/StickerLabel";
import { VerdictBadge } from "@/components/ui/VerdictBadge";
import type { ProductReview } from "@/lib/types";
import { formatScore } from "@/lib/types";

interface ProductReviewCardProps {
  review: ProductReview;
}

export function ProductReviewCard({ review }: ProductReviewCardProps) {
  return (
    <article className="flex h-full flex-col border-4 border-ink bg-white shadow-sticker transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-sticker-lg">
      <div className="relative aspect-[4/3] border-b-4 border-ink bg-gradient-to-br from-slime/30 via-electric/20 to-grape/30">
        <Image
          src={review.imageUrl}
          alt={review.productName}
          fill
          className="object-cover mix-blend-multiply"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute left-3 top-3">
          <StickerLabel color="orange">{review.category}</StickerLabel>
        </div>
        <div className="absolute right-3 top-3">
          <span className="border-3 border-ink bg-ink px-2 py-1 font-display text-xl font-black text-slime">
            {formatScore(review.danScore)}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-xl font-black uppercase text-ink">
          {review.productName}
        </h3>
        <p className="text-sm font-bold text-ink/70">{review.brand}</p>
        <p className="mt-2 flex-1 text-sm italic text-ink/80">
          &ldquo;{review.shortQuote}&rdquo;
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <VerdictBadge verdict={review.verdict} size="sm" />
          <StickerLabel color="electric" tilt={false}>
            Worth the Tax?
          </StickerLabel>
        </div>
        <div className="mt-4">
          <SlimeButton href={`/reviews/${review.slug}`} variant="ghost" className="w-full text-sm">
            Read Review
          </SlimeButton>
        </div>
      </div>
    </article>
  );
}
