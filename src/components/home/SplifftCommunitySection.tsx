import { EcosystemCard } from "@/components/ui/EcosystemCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PARTNER_LOGOS, SPLIFFT_URL } from "@/lib/constants";

export function SplifftCommunitySection() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-12"
      aria-labelledby="splifft-community-heading"
    >
      <SectionHeading
        id="splifft-community-heading"
        title="Join the Smoke Community"
        subtitle="Community ratings, product tracking, badges — powered by Splifft."
        accent="electric"
      />
      <EcosystemCard
        title="Splifft"
        sticker="Track · Rate · Badge"
        description="Community scores on the scoreboard are placeholders for now — Splifft will power real ratings, product tracking, badges, and future social features. Your Michigan smoke diary starts here."
        href={SPLIFFT_URL}
        cta="Join on Splifft"
        accent="grape"
        logo={PARTNER_LOGOS.splifft}
      />
    </section>
  );
}
