import { ScoreboardList } from "@/components/scoreboard/ScoreboardList";
import Link from "next/link";
import { SlimeButton } from "@/components/ui/SlimeButton";
import { StickerLabel } from "@/components/ui/StickerLabel";
import { getTopReviews } from "@/lib/data";
import { KICK_URL, SITE_TAGLINE } from "@/lib/constants";

export async function HeroSection() {
  const topThree = await getTopReviews(3);

  return (
    <section
      className="relative overflow-hidden border-b-4 border-ink bg-gradient-to-br from-slime/40 via-background to-electric/30 px-4 py-12 md:py-16"
      aria-labelledby="hero-heading"
    >
      <div className="absolute right-4 top-8 h-24 w-32 slime-blob opacity-70 md:h-40 md:w-48" />
      <div className="absolute bottom-8 left-4 h-16 w-16 rotate-12 border-4 border-ink bg-nick-orange opacity-80" />
      <div className="absolute right-1/4 top-1/2 hidden h-8 w-8 rounded-full bg-grape md:block" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <StickerLabel color="orange" className="mb-4">
            Mid or Gas?
          </StickerLabel>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-black uppercase leading-[0.95] text-ink md:text-6xl lg:text-7xl"
          >
            {SITE_TAGLINE}
          </h1>
          <p className="mt-4 text-xl font-semibold text-ink/80 md:text-2xl">
            Real reviews. Real smoke. Real Michigan.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <SlimeButton href="/scoreboard">View Scoreboard</SlimeButton>
            <SlimeButton href={KICK_URL} variant="secondary" external>
              Watch Live on Kick
            </SlimeButton>
          </div>
          <p className="mt-6 text-sm font-bold uppercase text-ink/50 doodle-arrow">
            <Link href="/reviews" className="hover:text-nick-orange">
              Browse all reviews
            </Link>
          </p>
        </div>

        <div className="space-y-3">
          <p className="font-display text-sm font-black uppercase text-ink">
            Top of the board
          </p>
          <ScoreboardList reviews={topThree} compact animated={false} />
        </div>
      </div>
    </section>
  );
}
