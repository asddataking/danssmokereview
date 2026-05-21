import { AudioSessionCard } from "@/components/ui/AudioSessionCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickerLabel } from "@/components/ui/StickerLabel";
import { getAllAudioSessions } from "@/lib/data/audio";

export const metadata = {
  title: "Audio Sessions",
};

export default function AudioPage() {
  const sessions = getAllAudioSessions();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <StickerLabel color="grape" className="mb-4">
        On the mic
      </StickerLabel>
      <SectionHeading
        title="Audio Sessions"
        subtitle="Dan's Smoke Review episodes — products, culture, and scoreboard talk."
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
