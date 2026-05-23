import Link from "next/link";
import { NewsletterCTA } from "@/components/newsletter/NewsletterCTA";
import { ScoreboardList } from "@/components/scoreboard/ScoreboardList";
import { ProductReviewCard } from "@/components/ui/ProductReviewCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlimeButton } from "@/components/ui/SlimeButton";
import { StickerLabel } from "@/components/ui/StickerLabel";
import { getLatestReviews, getTopReviews } from "@/lib/data";
import {
  NEWSLETTER_BENEFITS,
  NEWSLETTER_NAME,
  NEWSLETTER_POWERED_BY,
  NEWSLETTER_TAGLINE,
} from "@/lib/newsletter";
import { SITE_NAME } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Michigan Smoke Scoreboard Newsletter",
  description:
    "Join the Michigan Smoke Scoreboard for weekly cannabis rankings, hidden gems, worth-the-tax picks, and real Michigan smoke culture.",
  path: "/subscribe",
});

const whySubscribe = [
  "Rankings and verdicts before they spread on social.",
  "Hidden gems and dispensary finds you won't see in generic lists.",
  "Real Michigan smoke culture — not corporate weed blog energy.",
  "From the same crew behind Dan's Smoke Reviews and the live scoreboard.",
];

export default async function SubscribePage() {
  const topThree = await getTopReviews(3);
  const latestReviews = await getLatestReviews(3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <StickerLabel color="slime" className="mb-4">
        {NEWSLETTER_NAME}
      </StickerLabel>
      <h1 className="font-display text-4xl font-black uppercase text-ink md:text-5xl">
        {NEWSLETTER_NAME}
      </h1>
      <p className="mt-4 max-w-2xl text-lg font-semibold text-ink/80 md:text-xl">
        {NEWSLETTER_TAGLINE} — {NEWSLETTER_POWERED_BY.toLowerCase()}.
      </p>

      <div className="mt-10">
        <NewsletterCTA source="subscribe_page" variant="dark" />
      </div>

      <section className="mt-14" aria-labelledby="what-you-get-heading">
        <SectionHeading
          id="what-you-get-heading"
          title="What you'll get"
          subtitle="Every week in your inbox — scoreboard energy, not spam."
          accent="electric"
        />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {NEWSLETTER_BENEFITS.map((benefit) => (
            <li
              key={benefit}
              className="border-4 border-ink bg-white px-4 py-3 font-bold text-ink shadow-sticker"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="why-subscribe-heading">
        <SectionHeading
          id="why-subscribe-heading"
          title="Why subscribe"
          accent="orange"
        />
        <ul className="mt-6 space-y-3">
          {whySubscribe.map((reason) => (
            <li
              key={reason}
              className="border-l-4 border-nick-orange pl-4 text-base font-semibold text-ink/85"
            >
              {reason}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="latest-from-site-heading">
        <SectionHeading
          id="latest-from-site-heading"
          title="On the site right now"
          subtitle="Catch up on the scoreboard and latest reviews — then get the weekly email."
          accent="slime"
        />
        <div className="mt-6 space-y-8">
          <div>
            <h3 className="font-display text-lg font-black uppercase text-ink">
              Top of the board
            </h3>
            <div className="mt-4">
              <ScoreboardList reviews={topThree} compact animated={false} />
            </div>
            <div className="mt-4">
              <SlimeButton href="/scoreboard" variant="electric">
                Full scoreboard
              </SlimeButton>
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-black uppercase text-ink">
              Latest reviews
            </h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latestReviews.map((review) => (
                <ProductReviewCard key={review.id} review={review} />
              ))}
            </div>
            <div className="mt-4">
              <SlimeButton href="/reviews">All reviews</SlimeButton>
            </div>
          </div>
        </div>
      </section>

      <p className="mt-12 text-center text-sm font-bold uppercase text-ink/50">
        <Link href="/" className="text-electric hover:text-nick-orange">
          ← Back to {SITE_NAME}
        </Link>
      </p>
    </div>
  );
}
