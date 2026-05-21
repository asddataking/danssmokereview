"use client";

import type { Verdict } from "@/lib/types";
import { cn } from "@/lib/utils";

const OPTIONS: (Verdict | "All")[] = ["All", "Worth It", "Mid", "Taxed"];

interface VerdictFilterProps {
  selected: Verdict | "All";
  onChange: (verdict: Verdict | "All") => void;
  className?: string;
}

export function VerdictFilter({
  selected,
  onChange,
  className,
}: VerdictFilterProps) {
  return (
    <div
      className={cn("flex flex-wrap gap-2", className)}
      role="group"
      aria-label="Filter by verdict"
    >
      {OPTIONS.map((v) => (
        <button
          key={v}
          type="button"
          onClick={() => onChange(v)}
          aria-pressed={selected === v}
          className={cn(
            "border-3 border-ink px-3 py-1.5 text-xs font-bold uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric",
            selected === v
              ? "bg-grape text-white shadow-sticker"
              : "bg-white text-ink hover:bg-zinc-100",
          )}
        >
          {v === "All" ? "All Verdicts" : v}
        </button>
      ))}
    </div>
  );
}
