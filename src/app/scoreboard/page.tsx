import { NewsletterCTA } from "@/components/newsletter/NewsletterCTA";
import { ScoreboardClient } from "@/components/scoreboard/ScoreboardClient";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickerLabel } from "@/components/ui/StickerLabel";
import { getAllReviews } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Smoke Scoreboard",
  description:
    "Michigan's Smoke Scoreboard — rank flower, concentrates, edibles, and vapes by Dan Score, category, and verdict.",
  path: "/scoreboard",
});

export default async function ScoreboardPage() {
  const reviews = await getAllReviews();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 scoreboard-page">
      <StickerLabel color="slime" className="mb-4">
        Michigan Rankings
      </StickerLabel>
      <SectionHeading
        title="Smoke Scoreboard"
        subtitle="Filter by category, sort by Dan Score, community score, newest, or worth the tax."
      />
      <NewsletterCTA
        source="scoreboard_top"
        variant="compact"
        className="mb-8"
        showLinkToSubscribe
      />
      <ScoreboardClient reviews={reviews} />
      <NewsletterCTA
        source="scoreboard_footer"
        variant="default"
        className="mt-10"
      />
    </div>
  );
}
