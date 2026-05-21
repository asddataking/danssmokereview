"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { SlimeButton } from "@/components/ui/SlimeButton";
import { StickerLabel } from "@/components/ui/StickerLabel";
import { VerdictBadge } from "@/components/ui/VerdictBadge";
import type { ProductReview } from "@/lib/types";
import { formatScore } from "@/lib/types";

interface ReviewDetailModalProps {
  review: ProductReview | null;
  rank?: number;
  onClose: () => void;
}

function reviewExcerpt(fullReview: string, maxParagraphs = 2): string[] {
  return fullReview.split("\n\n").slice(0, maxParagraphs);
}

export function ReviewDetailModal({
  review,
  rank,
  onClose,
}: ReviewDetailModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!review) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [review, onClose]);

  if (!review) return null;

  const excerpt = reviewExcerpt(review.fullReview);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        aria-label="Close review details"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto border-4 border-ink bg-white shadow-sticker-lg animate-modal-in"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center border-3 border-ink bg-nick-orange text-xl font-black text-white shadow-sticker transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
          aria-label="Close"
        >
          <span aria-hidden="true">✕</span>
        </button>

        <div className="grid gap-0 sm:grid-cols-[140px_1fr]">
          <div className="relative aspect-square border-b-4 border-ink bg-gradient-to-br from-slime/30 to-grape/30 sm:border-b-0 sm:border-r-4">
            {rank != null && (
              <span className="absolute left-3 top-3 z-10 border-3 border-ink bg-slime px-2 py-1 font-display text-lg font-black text-ink">
                #{rank}
              </span>
            )}
            <Image
              src={review.imageUrl}
              alt=""
              fill
              className="object-cover"
              sizes="280px"
              priority
            />
          </div>

          <div className="p-5 pr-14 sm:p-6 sm:pr-16">
            <StickerLabel color="orange">{review.category}</StickerLabel>
            <h2
              id={titleId}
              className="mt-3 font-display text-2xl font-black uppercase leading-tight text-ink sm:text-3xl"
            >
              {review.productName}
            </h2>
            <p className="mt-1 font-bold text-ink/70">{review.brand}</p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="border-3 border-ink bg-slime px-3 py-1.5">
                <p className="text-[10px] font-bold uppercase">Dan Score</p>
                <p className="font-display text-2xl font-black">
                  {formatScore(review.danScore)}
                </p>
              </div>
              <div className="border-3 border-ink bg-white px-3 py-1.5">
                <p className="text-[10px] font-bold uppercase text-ink/50">
                  Community
                </p>
                <p className="font-display text-2xl font-black text-ink/70">
                  {formatScore(review.communityScore)}
                </p>
              </div>
              <VerdictBadge verdict={review.verdict} />
            </div>

            <p className="mt-4 text-lg font-semibold italic text-ink/90">
              &ldquo;{review.shortQuote}&rdquo;
            </p>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink/85">
              {excerpt.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {review.flavorNotes.slice(0, 3).map((note) => (
                <StickerLabel key={note} color="slime" tilt={false}>
                  {note}
                </StickerLabel>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <SlimeButton href={`/reviews/${review.slug}`}>
                Full review
              </SlimeButton>
              {review.whereToBuyUrl && (
                <SlimeButton
                  href={review.whereToBuyUrl}
                  variant="electric"
                  external
                >
                  Where to buy
                </SlimeButton>
              )}
            </div>

            <p className="mt-4 text-xs text-ink/50">
              <Link
                href={`/reviews/${review.slug}`}
                className="font-bold uppercase text-electric hover:text-nick-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
              >
                Open full page →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
