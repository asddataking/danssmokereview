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
    <div className={cn("flex flex-wrap gap-2", className)}>
      {OPTIONS.map((v) => (
        <button
          key={v}
          type="button"
          onClick={() => onChange(v)}
          className={cn(
            "border-3 border-ink px-3 py-1.5 text-xs font-bold uppercase",
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
