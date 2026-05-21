"use server";

import { revalidatePath } from "next/cache";
import { requireScoreboardAdmin } from "@/lib/auth";
import type { Movement, Verdict } from "@/lib/types";
import { getSupabaseServer } from "@/utils/supabase/server";

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
    const supabase = await getSupabaseServer();

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
            ? "Database blocked the update. Add your Supabase user ID to scoreboard_admins (see README)."
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
