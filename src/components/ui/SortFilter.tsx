"use client";

import type { ScoreboardSort } from "@/lib/types";
import { cn } from "@/lib/utils";

const SORT_OPTIONS: { value: ScoreboardSort; label: string }[] = [
  { value: "danScore", label: "Dan Score" },
  { value: "communityScore", label: "Community Score" },
  { value: "newest", label: "Newest" },
  { value: "worthTheTax", label: "Worth the Tax" },
];

interface SortFilterProps {
  selected: ScoreboardSort;
  onChange: (sort: ScoreboardSort) => void;
  className?: string;
}

export function SortFilter({ selected, onChange, className }: SortFilterProps) {
  return (
    <div className={cn("flex flex-col gap-2 sm:flex-row sm:items-center", className)}>
      <span className="text-xs font-bold uppercase text-ink/70">Sort by</span>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Sort scoreboard"
      >
        {SORT_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            aria-pressed={selected === opt.value}
            className={cn(
              "border-3 border-ink px-3 py-1.5 text-xs font-bold uppercase transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric",
              selected === opt.value
                ? "bg-electric text-ink shadow-sticker"
                : "bg-white text-ink hover:bg-zinc-100",
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
