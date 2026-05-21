import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductReviewCard } from "@/components/ui/ProductReviewCard";
import { SlimeButton } from "@/components/ui/SlimeButton";
import { StickerLabel } from "@/components/ui/StickerLabel";
import { VerdictBadge } from "@/components/ui/VerdictBadge";
import { productReviews } from "@/data/seed";
import {
  getRelatedReviews,
  getReviewBySlug,
} from "@/lib/data/reviews";
import { formatScore } from "@/lib/types";
import { KICK_URL, SITE_URL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productReviews.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const review = getReviewBySlug(slug);
  if (!review) {
    return createPageMetadata({
      title: "Review Not Found",
      path: `/reviews/${slug}`,
      noIndex: true,
    });
  }
  return createPageMetadata({
    title: `${review.productName} — ${review.brand}`,
    description: `${review.shortQuote} Dan Score: ${review.danScore}/10. Verdict: ${review.verdict}.`,
    path: `/reviews/${review.slug}`,
    image: review.imageUrl.startsWith("http")
      ? review.imageUrl
      : `${SITE_URL}${review.imageUrl}`,
  });
}

export default async function ReviewDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const review = getReviewBySlug(slug);
  if (!review) notFound();

  const related = getRelatedReviews(review.id);

  return (
    <article className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative aspect-square border-4 border-ink bg-gradient-to-br from-slime/30 to-grape/30 shadow-sticker-lg">
          <Image
            src={review.imageUrl}
            alt={review.productName}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <StickerLabel color="orange">{review.category}</StickerLabel>
          <h1 className="mt-4 font-display text-4xl font-black uppercase text-ink md:text-5xl">
            {review.productName}
          </h1>
          <p className="mt-2 text-xl font-bold text-ink/70">{review.brand}</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="border-4 border-ink bg-slime px-4 py-2 shadow-sticker">
              <p className="text-xs font-bold uppercase">Dan Score</p>
              <p className="font-display text-3xl font-black">
                {formatScore(review.danScore)}
              </p>
            </div>
            <div className="border-4 border-ink bg-white px-4 py-2 shadow-sticker">
              <p className="text-xs font-bold uppercase text-ink/50">
                Community (placeholder)
              </p>
              <p className="font-display text-3xl font-black text-ink/70">
                {formatScore(review.communityScore)}
              </p>
            </div>
            <VerdictBadge verdict={review.verdict} />
          </div>

          <p className="mt-4 text-lg italic text-ink/80">
            &ldquo;{review.shortQuote}&rdquo;
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="font-bold uppercase text-ink/50">Price paid</dt>
              <dd className="font-black">${review.pricePaid}</dd>
            </div>
            <div>
              <dt className="font-bold uppercase text-ink/50">Worth the tax?</dt>
              <dd>
                <VerdictBadge verdict={review.verdict} size="sm" />
              </dd>
            </div>
          </dl>

          {review.whereToBuyUrl && (
            <div className="mt-6">
              <SlimeButton href={review.whereToBuyUrl} external variant="electric">
                Where to buy
              </SlimeButton>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="border-4 border-ink bg-white p-6 shadow-sticker">
          <h2 className="font-display text-xl font-black uppercase">Flavor notes</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {review.flavorNotes.map((note) => (
              <li key={note}>
                <StickerLabel color="slime" tilt={false}>
                  {note}
                </StickerLabel>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-4 border-ink bg-white p-6 shadow-sticker">
          <h2 className="font-display text-xl font-black uppercase">Effects</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {review.effects.map((effect) => (
              <li key={effect}>
                <StickerLabel color="grape" tilt={false}>
                  {effect}
                </StickerLabel>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="flex min-h-[140px] flex-col items-center justify-center border-4 border-dashed border-ink bg-zinc-100 p-6">
          <span className="text-4xl">🎧</span>
          <p className="mt-2 font-bold uppercase text-ink/60">Audio session placeholder</p>
          {review.audioUrl && (
            <p className="text-xs text-ink/40">{review.audioUrl}</p>
          )}
        </div>
        <div className="flex min-h-[140px] flex-col items-center justify-center border-4 border-dashed border-ink bg-zinc-100 p-6">
          <span className="text-4xl">📺</span>
          <p className="mt-2 font-bold uppercase text-ink/60">
            Video / Kick / YouTube placeholder
          </p>
          <SlimeButton
            href={review.videoUrl ?? KICK_URL}
            variant="secondary"
            external
            className="mt-4"
          >
            Watch on Kick
          </SlimeButton>
        </div>
      </div>

      <div className="prose prose-lg mt-10 max-w-none border-4 border-ink bg-white p-6 shadow-sticker">
        <h2 className="font-display text-2xl font-black uppercase text-ink">
          Full review
        </h2>
        {review.fullReview.split("\n\n").map((para, i) => (
          <p key={i} className="mt-4 text-ink/90 leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-2xl font-black uppercase text-ink">
            Related products
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ProductReviewCard key={r.id} review={r} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-8">
        <Link
          href="/reviews"
          className="font-bold uppercase text-electric hover:text-nick-orange"
        >
          ← Back to reviews
        </Link>
      </div>
    </article>
  );
}
