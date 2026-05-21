import { AudioSessionCard } from "@/components/ui/AudioSessionCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlimeButton } from "@/components/ui/SlimeButton";
import { getLatestAudioSessions } from "@/lib/data/audio";

export function AudioSessionsPreview() {
  const sessions = getLatestAudioSessions(3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Audio Sessions"
        subtitle="Dan's Smoke Review on the mic — products, culture, scoreboard."
        accent="grape"
      />
      <div className="grid gap-4 md:grid-cols-3">
        {sessions.map((session) => (
          <AudioSessionCard key={session.id} session={session} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <SlimeButton href="/audio" variant="electric">
          All Audio Sessions
        </SlimeButton>
      </div>
    </section>
  );
}
