import { ScoreboardCard } from "@/components/ui/ScoreboardCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlimeButton } from "@/components/ui/SlimeButton";
import { getTopReviews } from "@/lib/data/reviews";

export function ScoreboardPreview() {
  const topFive = getTopReviews(5);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Smoke Scoreboard"
        subtitle="Ranked Michigan products — Dan Score, community placeholder, movement."
        accent="orange"
      />
      <div className="space-y-3">
        {topFive.map((review, i) => (
          <ScoreboardCard key={review.id} review={review} rank={i + 1} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <SlimeButton href="/scoreboard" variant="electric">
          Full Scoreboard
        </SlimeButton>
      </div>
    </section>
  );
}
