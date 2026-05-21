"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export function SignOutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleSignOut() {
    setPending(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={pending}
      className="border-3 border-ink bg-white px-3 py-1.5 text-xs font-bold uppercase text-ink hover:bg-zinc-100 disabled:opacity-60"
    >
      {pending ? "…" : "Sign out"}
    </button>
  );
}
