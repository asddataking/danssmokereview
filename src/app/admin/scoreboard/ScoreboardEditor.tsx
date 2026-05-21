"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { updateReviewScores, type ReviewEditorInput } from "@/app/admin/scoreboard/actions";
import type { Movement, ProductReview, Verdict } from "@/lib/types";
import { formatScore } from "@/lib/types";

const VERDICTS: Verdict[] = ["Worth It", "Mid", "Taxed"];
const MOVEMENTS: Movement[] = ["up", "down", "neutral"];

interface ScoreboardEditorProps {
  reviews: ProductReview[];
}

export function ScoreboardEditor({ reviews }: ScoreboardEditorProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    review: ProductReview,
  ) {
    event.preventDefault();
    setMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const input: ReviewEditorInput = {
      id: review.id,
      danScore: Number(data.get("danScore")),
      communityScore: Number(data.get("communityScore")),
      verdict: data.get("verdict") as Verdict,
      movement: data.get("movement") as Movement,
      shortQuote: String(data.get("shortQuote") ?? "").trim(),
    };

    startTransition(async () => {
      const result = await updateReviewScores(input);
      if (result.ok) {
        setMessage(`Saved ${review.productName}.`);
        router.refresh();
      } else {
        setMessage(result.error);
      }
    });
  }

  return (
    <div className="space-y-6">
      {message && (
        <p
          role="status"
          className="border-4 border-ink bg-slime/30 px-4 py-3 text-sm font-bold text-ink"
        >
          {message}
        </p>
      )}

      {reviews.map((review) => (
        <form
          key={review.id}
          onSubmit={(e) => handleSubmit(e, review)}
          className="border-4 border-ink bg-white p-4 shadow-sticker md:p-6"
        >
          <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
            <div>
              <h2 className="font-display text-lg font-black uppercase text-ink">
                {review.productName}
              </h2>
              <p className="text-sm font-semibold text-ink/70">
                {review.brand} · {review.category} ·{" "}
                <span className="font-mono text-xs">{review.slug}</span>
              </p>
            </div>
            <p className="text-xs font-bold uppercase text-ink/50">
              Current Dan: {formatScore(review.danScore)}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <label className="flex flex-col gap-1 text-xs font-bold uppercase">
              Dan score
              <input
                name="danScore"
                type="number"
                min={0}
                max={10}
                step={0.1}
                defaultValue={review.danScore}
                required
                className="border-3 border-ink px-3 py-2 font-mono text-sm"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-bold uppercase">
              Community score
              <input
                name="communityScore"
                type="number"
                min={0}
                max={10}
                step={0.1}
                defaultValue={review.communityScore}
                required
                className="border-3 border-ink px-3 py-2 font-mono text-sm"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-bold uppercase">
              Verdict
              <select
                name="verdict"
                defaultValue={review.verdict}
                className="border-3 border-ink px-3 py-2 text-sm font-bold"
              >
                {VERDICTS.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs font-bold uppercase">
              Movement
              <select
                name="movement"
                defaultValue={review.movement ?? "neutral"}
                className="border-3 border-ink px-3 py-2 text-sm font-bold"
              >
                {MOVEMENTS.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-4 flex flex-col gap-1 text-xs font-bold uppercase">
            Short quote
            <input
              name="shortQuote"
              type="text"
              defaultValue={review.shortQuote}
              maxLength={200}
              className="border-3 border-ink px-3 py-2 text-sm"
            />
          </label>

          <button
            type="submit"
            disabled={pending}
            className="mt-4 border-4 border-ink bg-nick-orange px-4 py-2 text-sm font-black uppercase text-white shadow-sticker hover:bg-nick-orange/90 disabled:opacity-60"
          >
            {pending ? "Saving…" : "Save scores"}
          </button>
        </form>
      ))}
    </div>
  );
}
