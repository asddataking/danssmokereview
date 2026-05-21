import { AudioSessionsPreview } from "@/components/home/AudioSessionsPreview";
import { HeroSection } from "@/components/home/HeroSection";
import { LatestReviews } from "@/components/home/LatestReviews";
import { LiveAt420Section } from "@/components/home/LiveAt420Section";
import { MunchieModeSection } from "@/components/home/MunchieModeSection";
import { ScoreboardPreview } from "@/components/home/ScoreboardPreview";
import { SplifftCommunitySection } from "@/components/home/SplifftCommunitySection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Michigan's Smoke Scoreboard",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LiveAt420Section />
      <ScoreboardPreview />
      <LatestReviews />
      <AudioSessionsPreview />
      <MunchieModeSection />
      <SplifftCommunitySection />
    </>
  );
}
