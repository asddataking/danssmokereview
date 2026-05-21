import Link from "next/link";
import { ScoreboardEditor } from "@/app/admin/scoreboard/ScoreboardEditor";
import { SignOutButton } from "@/components/auth/SignOutButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickerLabel } from "@/components/ui/StickerLabel";
import { requireScoreboardAdmin } from "@/lib/auth";
import { getAllReviews } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Scoreboard Editor",
  description: "Edit Dan scores and verdicts on the smoke scoreboard.",
  path: "/admin/scoreboard",
  noIndex: true,
});

export default async function AdminScoreboardPage() {
  await requireScoreboardAdmin();
  const reviews = await getAllReviews();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <StickerLabel color="slime">Admin</StickerLabel>
        <div className="flex items-center gap-3">
          <Link
            href="/scoreboard"
            className="text-sm font-bold uppercase text-electric hover:underline"
          >
            View public scoreboard
          </Link>
          <SignOutButton />
        </div>
      </div>

      <SectionHeading
        title="Scoreboard Editor"
        subtitle="Update Dan score, community score, verdict, movement, and short quote. Changes save to Supabase when connected."
      />

      {reviews.length === 0 ? (
        <p className="border-4 border-dashed border-ink/30 p-6 text-center font-bold text-ink/70">
          No reviews in the database yet. Seed Supabase or add rows first.
        </p>
      ) : (
        <ScoreboardEditor reviews={reviews} />
      )}
    </div>
  );
}
