import { ScoreboardList } from "@/components/scoreboard/ScoreboardList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlimeButton } from "@/components/ui/SlimeButton";
import { getTopReviews } from "@/lib/data/reviews";

export async function ScoreboardPreview() {
  const topFive = await getTopReviews(5);

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-12"
      aria-labelledby="scoreboard-preview-heading"
    >
      <SectionHeading
        id="scoreboard-preview-heading"
        title="Smoke Scoreboard"
        subtitle="Ranked Michigan products — tap any row for Dan's quick take."
        accent="orange"
      />
      <ScoreboardList reviews={topFive} animated />
      <div className="mt-8 text-center">
        <SlimeButton href="/scoreboard" variant="electric">
          Full Scoreboard
        </SlimeButton>
      </div>
    </section>
  );
}
