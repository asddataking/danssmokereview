"use client";

import { cn } from "@/lib/utils";

export type ChipOption<T extends string> = { value: T; label: string };

interface ChipFilterProps<T extends string> {
  options: ChipOption<T>[];
  selected: T;
  onChange: (value: T) => void;
  ariaLabel: string;
  activeClass?: string;
  className?: string;
  label?: string;
}

export function ChipFilter<T extends string>({
  options,
  selected,
  onChange,
  ariaLabel,
  activeClass = "bg-slime text-ink shadow-sticker",
  className,
  label,
}: ChipFilterProps<T>) {
  const chips = (
    <div className="flex flex-wrap gap-2" role="group" aria-label={ariaLabel}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          aria-pressed={selected === opt.value}
          className={cn(
            "border-3 border-ink px-3 py-1.5 text-xs font-bold uppercase transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric",
            selected === opt.value
              ? activeClass
              : "bg-white text-ink hover:bg-zinc-100",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );

  if (label) {
    return (
      <div
        className={cn("flex flex-col gap-2 sm:flex-row sm:items-center", className)}
      >
        <span className="text-xs font-bold uppercase text-ink/70">{label}</span>
        {chips}
      </div>
    );
  }

  return <div className={cn("flex flex-wrap gap-2", className)}>{chips}</div>;
}
