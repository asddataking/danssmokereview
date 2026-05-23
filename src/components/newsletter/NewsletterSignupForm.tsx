"use client";

import { useState } from "react";
import {
  isValidNewsletterEmail,
  NEWSLETTER_BUTTON,
  NEWSLETTER_MICROCOPY,
  type NewsletterSource,
} from "@/lib/newsletter";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

interface NewsletterSignupFormProps {
  source: NewsletterSource;
  layout?: "stacked" | "inline";
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  showMicrocopy?: boolean;
}

export function NewsletterSignupForm({
  source,
  layout = "stacked",
  className,
  inputClassName,
  buttonClassName,
  showMicrocopy = true,
}: NewsletterSignupFormProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidNewsletterEmail(email)) {
      setState("error");
      setErrorMessage("Enter a valid email address.");
      return;
    }

    setState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setState("error");
        setErrorMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }

      setState("success");
      setEmail("");
    } catch {
      setState("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  }

  if (state === "success") {
    return (
      <div
        className={cn("border-4 border-ink bg-slime/30 p-4 shadow-sticker", className)}
        role="status"
        data-cta="newsletter"
        data-source={source}
        data-state="success"
      >
        <p className="font-display text-lg font-black uppercase text-ink">
          You&apos;re on the board
        </p>
        <p className="mt-1 text-sm font-semibold text-ink/80">
          Check your inbox for the Michigan Smoke Scoreboard welcome.
        </p>
      </div>
    );
  }

  return (
    <div data-cta="newsletter" data-source={source}>
      <form
        onSubmit={handleSubmit}
        className={cn(
          layout === "inline"
            ? "flex flex-col gap-3 sm:flex-row sm:items-stretch"
            : "space-y-3",
          className,
        )}
        noValidate
      >
        <label htmlFor={`newsletter-email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`newsletter-email-${source}`}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@email.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (state === "error") {
              setState("idle");
              setErrorMessage("");
            }
          }}
          disabled={state === "loading"}
          required
          className={cn(
            "min-w-0 flex-1 border-4 border-ink bg-white px-4 py-3 text-base font-semibold text-ink placeholder:text-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric disabled:opacity-60",
            layout === "inline" && "sm:flex-[2]",
            inputClassName,
          )}
          aria-invalid={state === "error"}
          aria-describedby={
            state === "error" ? `newsletter-error-${source}` : undefined
          }
        />
        <button
          type="submit"
          disabled={state === "loading"}
          data-cta="newsletter"
          data-source={source}
          className={cn(
            "border-4 border-ink bg-nick-orange px-5 py-3 font-bold uppercase tracking-wide text-white shadow-sticker transition-all hover:bg-[#e55a00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric disabled:cursor-wait disabled:opacity-70",
            layout === "inline" && "sm:shrink-0",
            buttonClassName,
          )}
        >
          {state === "loading" ? "Joining…" : NEWSLETTER_BUTTON}
        </button>
      </form>
      {state === "error" && errorMessage && (
        <p
          id={`newsletter-error-${source}`}
          className="mt-2 text-sm font-bold text-nick-orange"
          role="alert"
        >
          {errorMessage}
        </p>
      )}
      {showMicrocopy && state !== "error" && (
        <p className="mt-2 text-xs font-semibold text-ink/60">{NEWSLETTER_MICROCOPY}</p>
      )}
    </div>
  );
}
