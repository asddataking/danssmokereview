import { EcosystemCard } from "@/components/ui/EcosystemCard";
import { LiveAt420Banner } from "@/components/ui/LiveAt420Banner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickerLabel } from "@/components/ui/StickerLabel";
import {
  DANK_N_DEVOUR_URL,
  KICK_URL,
  SITE_NAME,
  SPLIFFT_URL,
} from "@/lib/constants";

export const metadata = {
  title: "About & Ecosystem",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <StickerLabel color="slime" className="mb-4">
        The Dank Network
      </StickerLabel>
      <SectionHeading
        title="About Dan's Smoke Reviews"
        subtitle="Michigan cannabis reviews with Nickelodeon energy and Complex-level card culture."
      />

      <div className="space-y-6 border-4 border-ink bg-white p-6 shadow-sticker text-ink/90 leading-relaxed">
        <p>
          <strong className="text-ink">{SITE_NAME}</strong> is Michigan&apos;s
          Smoke Scoreboard — real reviews, real smoke, real Michigan. Dan breaks
          down flower, rosin, edibles, vapes, and more with loud scores, honest
          verdicts, and culture-forward content built for mobile-first fans.
        </p>
        <p>
          This MVP runs on seed data today. Community scores are placeholders
          until Splifft voting goes live. Supabase is wired for future auth,
          content, and affiliate tracking — swap seed accessors for database
          queries when tables are ready.
        </p>
      </div>

      <section className="mt-12">
        <SectionHeading title="The Ecosystem" accent="orange" />
        <div className="grid gap-6 md:grid-cols-2">
          <EcosystemCard
            title={SITE_NAME}
            sticker="Scoreboard HQ"
            description="Reviews, rankings, audio sessions, and Live at 4:20 on Kick. The home base for Michigan smoke culture."
            href="/"
            cta="Back to home"
            accent="slime"
          />
          <EcosystemCard
            title="DankNDevour"
            sticker="Munchie Mode"
            description="Cannabis meets Michigan food culture — pairings, late-night runs, and edible-friendly eats."
            href={DANK_N_DEVOUR_URL}
            cta="DankNDevour.com"
            accent="orange"
          />
          <EcosystemCard
            title="Splifft"
            sticker="Community"
            description="Track products, earn badges, and eventually power real community scores on the board."
            href={SPLIFFT_URL}
            cta="getsplifft.com"
            accent="grape"
          />
          <div className="flex h-full flex-col border-4 border-ink bg-ink p-6 text-white shadow-sticker">
            <StickerLabel color="electric">Network</StickerLabel>
            <h3 className="mt-4 font-display text-2xl font-black uppercase">
              The Dank Network
            </h3>
            <p className="mt-3 flex-1 text-white/80">
              Dan&apos;s Smoke Reviews, DankNDevour, Splifft, and Kick streams —
              one chaotic, colorful Michigan cannabis universe.
            </p>
            <a
              href={KICK_URL}
              className="mt-4 font-bold uppercase text-slime hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              kick.com/danssmokereview →
            </a>
          </div>
        </div>
      </section>

      <section id="live" className="mt-12 scroll-mt-24">
        <SectionHeading title="Live at 4:20" accent="electric" />
        <LiveAt420Banner />
      </section>
    </div>
  );
}
