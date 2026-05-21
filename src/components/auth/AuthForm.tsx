"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

type AuthMode = "sign-in" | "sign-up";

interface AuthFormProps {
  mode: AuthMode;
}

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo =
    searchParams.get("redirect") ?? "/admin/scoreboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setMessage(null);
    setPending(true);

    const supabase = createClient();

    if (mode === "sign-in") {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      setPending(false);
      if (signInError) {
        setError(signInError.message);
        return;
      }
      router.push(redirectTo);
      router.refresh();
      return;
    }

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });
    setPending(false);
    if (signUpError) {
      setError(signUpError.message);
      return;
    }
    setMessage("Check your email to confirm your account, then sign in.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md border-4 border-ink bg-white p-6 shadow-sticker"
    >
      <h1 className="font-display text-2xl font-black uppercase text-ink">
        {mode === "sign-in" ? "Sign in" : "Create account"}
      </h1>
      <p className="mt-2 text-sm text-ink/70">
        {mode === "sign-in"
          ? "Access the scoreboard editor."
          : "Admin accounts only — used for scoreboard edits."}
      </p>

      <div className="mt-6 space-y-4">
        <label className="flex flex-col gap-1 text-xs font-bold uppercase">
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-3 border-ink px-3 py-2 text-sm"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs font-bold uppercase">
          Password
          <input
            type="password"
            name="password"
            autoComplete={
              mode === "sign-in" ? "current-password" : "new-password"
            }
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-3 border-ink px-3 py-2 text-sm"
          />
        </label>
      </div>

      {error && (
        <p className="mt-4 text-sm font-bold text-grape" role="alert">
          {error}
        </p>
      )}
      {message && (
        <p className="mt-4 text-sm font-bold text-ink" role="status">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 w-full border-4 border-ink bg-slime px-4 py-3 text-sm font-black uppercase text-ink shadow-sticker disabled:opacity-60"
      >
        {pending
          ? "Please wait…"
          : mode === "sign-in"
            ? "Sign in"
            : "Sign up"}
      </button>

      <p className="mt-4 text-center text-sm font-semibold text-ink/70">
        {mode === "sign-in" ? (
          <>
            No account?{" "}
            <Link href="/sign-up" className="text-electric underline">
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/sign-in" className="text-electric underline">
              Sign in
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
