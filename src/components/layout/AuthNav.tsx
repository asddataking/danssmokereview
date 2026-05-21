"use client";

import { SignInButton, useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function AuthNav() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <li className="px-4 py-3 md:py-2">
        <span className="text-xs font-bold uppercase text-ink/40">…</span>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-2 border-t-4 border-ink px-4 py-3 md:border-t-0 md:py-2">
      {!isSignedIn ? (
        <SignInButton mode="modal">
          <button
            type="button"
            className="border-3 border-ink bg-electric px-3 py-1.5 text-xs font-bold uppercase text-ink hover:bg-electric/80"
          >
            Sign in
          </button>
        </SignInButton>
      ) : (
        <>
          <Link
            href="/admin/scoreboard"
            className="text-xs font-bold uppercase text-ink hover:text-nick-orange"
          >
            Editor
          </Link>
          <UserButton />
        </>
      )}
    </li>
  );
}
