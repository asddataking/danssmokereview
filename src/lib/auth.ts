import "server-only";

import { redirect } from "next/navigation";
import { getSupabaseServer } from "@/utils/supabase/server";

const adminIds = () =>
  (process.env.SUPABASE_ADMIN_USER_IDS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

export async function getAuthUserId(): Promise<string | null> {
  const supabase = await getSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user?.id ?? null;
}

export async function isScoreboardAdmin(): Promise<boolean> {
  const userId = await getAuthUserId();
  if (!userId) return false;

  const allowed = adminIds();
  if (allowed.length === 0) return true;
  return allowed.includes(userId);
}

export async function requireScoreboardAdmin(): Promise<string> {
  const userId = await getAuthUserId();
  if (!userId) {
    redirect("/sign-in?redirect=/admin/scoreboard");
  }

  const allowed = adminIds();
  if (allowed.length > 0 && !allowed.includes(userId)) {
    throw new Error("You do not have permission to edit the scoreboard.");
  }

  return userId;
}

export async function signOut() {
  const supabase = await getSupabaseServer();
  await supabase.auth.signOut();
  redirect("/");
}
