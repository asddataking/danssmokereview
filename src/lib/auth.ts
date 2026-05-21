import "server-only";

import { auth } from "@clerk/nextjs/server";

const adminIds = () =>
  (process.env.CLERK_ADMIN_USER_IDS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

export async function getAuthUserId(): Promise<string | null> {
  const { userId } = await auth();
  return userId;
}

export async function isScoreboardAdmin(): Promise<boolean> {
  const userId = await getAuthUserId();
  if (!userId) return false;

  const allowed = adminIds();
  if (allowed.length === 0) return true;
  return allowed.includes(userId);
}

export async function requireScoreboardAdmin(): Promise<string> {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Sign in required.");
  }

  const allowed = adminIds();
  if (allowed.length > 0 && !allowed.includes(userId)) {
    throw new Error("You do not have permission to edit the scoreboard.");
  }

  return userId;
}
