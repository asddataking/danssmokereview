import { ScoreboardClient } from "@/components/scoreboard/ScoreboardClient";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickerLabel } from "@/components/ui/StickerLabel";

export const metadata = {
  title: "Smoke Scoreboard",
};

export default function ScoreboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <StickerLabel color="slime" className="mb-4">
        Michigan Rankings
      </StickerLabel>
      <SectionHeading
        title="Smoke Scoreboard"
        subtitle="Filter by category, sort by Dan Score, community placeholder, newest, or worth the tax."
      />
      <ScoreboardClient />
    </div>
  );
}
