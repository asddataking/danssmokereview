import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SlimeButton } from "@/components/ui/SlimeButton";
import { StickerLabel } from "@/components/ui/StickerLabel";
import {
  BRAND_COLORS,
  KICK_URL,
  MEDIA_ASSETS,
  MEDIA_BLURB,
  MEDIA_CONTACT_EMAIL,
  MEDIA_LINKS,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Media Pack",
  description:
    "Press kit for Dan's Smoke Reviews — brand colors, assets, boilerplate, and links for media and partners.",
  path: "/media",
});

export default function MediaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <StickerLabel color="electric" className="mb-4">
        Press & partners
      </StickerLabel>
      <SectionHeading
        title="Media Pack"
        subtitle="Brand assets, colors, and copy for coverage, collabs, and the Dank Network."
        accent="electric"
      />

      <div className="space-y-8">
        <section className="border-4 border-ink bg-white p-6 shadow-sticker">
          <h2 className="font-display text-xl font-black uppercase text-ink">
            Boilerplate
          </h2>
          <p className="mt-4 leading-relaxed text-ink/90">{MEDIA_BLURB}</p>
          <p className="mt-4 text-sm font-bold text-ink/60">
            {SITE_NAME} · {SITE_TAGLINE}
          </p>
        </section>

        <section className="border-4 border-ink bg-white p-6 shadow-sticker">
          <h2 className="font-display text-xl font-black uppercase text-ink">
            Brand colors
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BRAND_COLORS.map((color) => (
              <li
                key={color.name}
                className="flex items-center gap-4 border-3 border-ink p-3"
              >
                <span
                  className="h-12 w-12 shrink-0 border-3 border-ink"
                  style={{ backgroundColor: color.hex }}
                  aria-hidden
                />
                <div>
                  <p className="font-bold text-ink">{color.name}</p>
                  <p className="font-mono text-sm text-ink/70">{color.hex}</p>
                  <p className="text-xs text-ink/50">{color.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-4 border-ink bg-white p-6 shadow-sticker">
          <h2 className="font-display text-xl font-black uppercase text-ink">
            Download assets
          </h2>
          <ul className="mt-4 space-y-3">
            {MEDIA_ASSETS.map((asset) => (
              <li key={asset.href}>
                <a
                  href={asset.href}
                  download
                  className="flex flex-wrap items-center justify-between gap-2 border-3 border-ink bg-slime/20 px-4 py-3 font-semibold text-ink hover:bg-slime/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
                >
                  <span>{asset.label}</span>
                  <span className="text-xs font-bold uppercase text-ink/60">
                    {asset.type} · Download
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-4 border-ink bg-ink p-6 text-white shadow-sticker">
          <h2 className="font-display text-xl font-black uppercase text-slime">
            Contact & links
          </h2>
          <p className="mt-3 text-white/80">
            Press inquiries:{" "}
            <a
              href={`mailto:${MEDIA_CONTACT_EMAIL}`}
              className="font-bold text-slime hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slime"
            >
              {MEDIA_CONTACT_EMAIL}
            </a>
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {MEDIA_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-bold uppercase text-slime hover:underline"
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <SlimeButton href={KICK_URL} variant="secondary" external>
              Watch on Kick
            </SlimeButton>
          </div>
        </section>
      </div>
    </div>
  );
}
