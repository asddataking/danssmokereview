import { AudioSessionCard } from "@/components/ui/AudioSessionCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickerLabel } from "@/components/ui/StickerLabel";
import { getAllAudioSessions } from "@/lib/data/audio";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Audio Sessions",
  description:
    "Dan's Smoke Review episodes — linked out to Kick, YouTube, and other platforms. Products, culture, and scoreboard talk.",
  path: "/audio",
});

export default async function AudioPage() {
  const sessions = await getAllAudioSessions();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <StickerLabel color="grape" className="mb-4">
        On the mic
      </StickerLabel>
      <SectionHeading
        title="Audio Sessions"
        subtitle="Episodes live on external platforms — tap Listen to open Kick, YouTube, or wherever Dan posted it."
        accent="grape"
      />
      <div className="space-y-4">
        {sessions.map((session) => (
          <AudioSessionCard key={session.id} session={session} expanded />
        ))}
      </div>
    </div>
  );
}
