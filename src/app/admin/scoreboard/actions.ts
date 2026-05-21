"use server";

import { revalidatePath } from "next/cache";
import { requireScoreboardAdmin } from "@/lib/auth";
import type { Movement, Verdict } from "@/lib/types";
import { getSupabaseWithClerk } from "@/utils/supabase/clerk";

export type ReviewEditorInput = {
  id: string;
  danScore: number;
  communityScore: number;
  verdict: Verdict;
  movement: Movement;
  shortQuote: string;
};

export async function updateReviewScores(
  input: ReviewEditorInput,
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    await requireScoreboardAdmin();
    const supabase = await getSupabaseWithClerk();

    const { error } = await supabase
      .from("reviews")
      .update({
        dan_score: input.danScore,
        community_score: input.communityScore,
        verdict: input.verdict,
        movement: input.movement,
        short_quote: input.shortQuote,
        updated_at: new Date().toISOString(),
      })
      .eq("id", input.id);

    if (error) {
      return {
        ok: false,
        error:
          error.message.includes("policy")
            ? "Database blocked the update. Add your Clerk user ID to scoreboard_admins in Supabase and enable the Clerk integration."
            : error.message,
      };
    }

    revalidatePath("/");
    revalidatePath("/scoreboard");
    revalidatePath("/reviews");
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Update failed.",
    };
  }
}
