import { SlimeButton } from "@/components/ui/SlimeButton";
import { StickerLabel } from "@/components/ui/StickerLabel";
import { KICK_URL } from "@/lib/constants";

export function LiveAt420Banner() {
  return (
    <div className="relative overflow-hidden border-4 border-ink bg-ink p-6 text-white shadow-sticker-lg md:p-8">
      <div className="absolute -right-8 -top-8 h-32 w-32 slime-blob opacity-40" />
      <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-nick-orange opacity-60" />
      <div className="relative z-10">
        <StickerLabel color="orange" className="mb-4">
          Live at 4:20
        </StickerLabel>
        <h2 className="font-display text-3xl font-black uppercase md:text-4xl">
          Catch Dan live at 4:20
        </h2>
        <p className="mt-2 max-w-lg text-lg text-white/90">
          A few days a week on Kick — reviews, reactions, Michigan smoke culture,
          and scoreboard shake-ups in real time.
        </p>
        <div className="mt-6">
          <SlimeButton href={KICK_URL} variant="primary" external>
            Follow on Kick
          </SlimeButton>
        </div>
      </div>
    </div>
  );
}
