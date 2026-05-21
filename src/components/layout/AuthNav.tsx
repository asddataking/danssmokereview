"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SignOutButton } from "@/components/auth/SignOutButton";
import { createClient } from "@/utils/supabase/client";

export function AuthNav() {
  const [signedIn, setSignedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSignedIn(!!session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSignedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (signedIn === null) {
    return (
      <li className="px-4 py-3 md:py-2">
        <span className="text-xs font-bold uppercase text-ink/40">…</span>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-2 border-t-4 border-ink px-4 py-3 md:border-t-0 md:py-2">
      {!signedIn ? (
        <Link
          href="/sign-in"
          className="border-3 border-ink bg-electric px-3 py-1.5 text-xs font-bold uppercase text-ink hover:bg-electric/80"
        >
          Sign in
        </Link>
      ) : (
        <>
          <Link
            href="/admin/scoreboard"
            className="text-xs font-bold uppercase text-ink hover:text-nick-orange"
          >
            Editor
          </Link>
          <SignOutButton />
        </>
      )}
    </li>
  );
}
