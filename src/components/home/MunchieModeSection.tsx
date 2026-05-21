import { EcosystemCard } from "@/components/ui/EcosystemCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DANK_N_DEVOUR_URL, PARTNER_LOGOS } from "@/lib/constants";

export function MunchieModeSection() {
  return (
    <section
      className="border-t-4 border-ink bg-gradient-to-r from-nick-orange/20 to-slime/20 py-12"
      aria-labelledby="munchie-mode-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          id="munchie-mode-heading"
          title="Munchie Mode"
          subtitle="Cannabis + food pairings from the DankNDevour universe."
          accent="orange"
        />
        <EcosystemCard
          title="DankNDevour"
          sticker="Eat Different"
          description="When the edible hits and you need a Michigan spot — DankNDevour pairs strains with plates, late-night runs, and culture-forward food content. The other half of the munchie equation."
          href={DANK_N_DEVOUR_URL}
          cta="Visit DankNDevour"
          accent="orange"
          logo={PARTNER_LOGOS.dankNDevour}
        />
      </div>
    </section>
  );
}
