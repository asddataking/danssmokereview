import { ExternalLinkLabel } from "@/components/ui/ExternalLinkLabel";
import { StickerLabel } from "@/components/ui/StickerLabel";
import { MIDNIGHT_SMOKING_URL } from "@/lib/constants";

export function MidnightSmokingAffiliate() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-8"
      aria-labelledby="midnight-smoking-affiliate-heading"
    >
      <aside className="flex flex-col gap-4 border-4 border-ink bg-gradient-to-br from-ink via-ink to-grape/80 p-5 text-white shadow-sticker sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
        <div className="min-w-0 flex-1">
          <StickerLabel color="slime" className="mb-3">
            Affiliate
          </StickerLabel>
          <h2
            id="midnight-smoking-affiliate-heading"
            className="font-display text-xl font-black uppercase leading-tight text-slime sm:text-2xl"
          >
            We roll with their papers
          </h2>
          <p className="mt-2 text-sm text-white/85 sm:text-base">
            <span className="font-bold text-white">Midnight Smoking</span> —
            Cannon rolling gear and high-quality papers built for the session.
            When we&apos;re ranking Michigan smoke, this is what&apos;s in the
            rotation.
          </p>
        </div>
        <a
          href={MIDNIGHT_SMOKING_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="shrink-0 border-4 border-slime bg-slime px-5 py-3 text-center text-sm font-black uppercase text-ink shadow-sticker transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slime"
        >
          Shop Midnight Smoking
          <ExternalLinkLabel />
        </a>
      </aside>
    </section>
  );
}
