import { AudioSessionsPreview } from "@/components/home/AudioSessionsPreview";
import { HeroSection } from "@/components/home/HeroSection";
import { LatestReviews } from "@/components/home/LatestReviews";
import { MidnightSmokingAffiliate } from "@/components/home/MidnightSmokingAffiliate";
import { LiveAt420Banner } from "@/components/ui/LiveAt420Banner";
import { PartnerSection } from "@/components/home/PartnerSection";
import { ScoreboardPreview } from "@/components/home/ScoreboardPreview";
import {
  DANK_N_DEVOUR_URL,
  PARTNER_LOGOS,
  SPLIFFT_URL,
} from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Michigan's Smoke Scoreboard",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <LiveAt420Banner />
      </section>
      <ScoreboardPreview />
      <LatestReviews />
      <MidnightSmokingAffiliate />
      <AudioSessionsPreview />
      <PartnerSection
        id="munchie-mode-heading"
        title="Munchie Mode"
        subtitle="Cannabis + food pairings from the DankNDevour universe."
        accent="orange"
        sectionClassName="border-t-4 border-ink bg-gradient-to-r from-nick-orange/20 to-slime/20 py-12"
        card={{
          title: "DankNDevour",
          sticker: "Eat Different",
          description:
            "When the edible hits and you need a Michigan spot — DankNDevour pairs strains with plates, late-night runs, and culture-forward food content. The other half of the munchie equation.",
          href: DANK_N_DEVOUR_URL,
          cta: "Visit DankNDevour",
          accent: "orange",
          logo: PARTNER_LOGOS.dankNDevour,
        }}
      />
      <PartnerSection
        id="splifft-community-heading"
        title="Join the Smoke Community"
        subtitle="Community ratings, product tracking, badges — powered by Splifft."
        accent="electric"
        card={{
          title: "Splifft",
          sticker: "Track · Rate · Badge",
          description:
            "Community scores on the scoreboard are placeholders for now — Splifft will power real ratings, product tracking, badges, and future social features. Your Michigan smoke diary starts here.",
          href: SPLIFFT_URL,
          cta: "Join on Splifft",
          accent: "grape",
          logo: PARTNER_LOGOS.splifft,
        }}
      />
    </>
  );
}
