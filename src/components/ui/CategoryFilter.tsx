"use client";

import type { ProductCategory } from "@/lib/types";
import { PRODUCT_CATEGORIES } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selected: ProductCategory | "All";
  onChange: (category: ProductCategory | "All") => void;
  className?: string;
}

const options: (ProductCategory | "All")[] = ["All", ...PRODUCT_CATEGORIES];

export function CategoryFilter({
  selected,
  onChange,
  className,
}: CategoryFilterProps) {
  return (
    <div
      className={cn("flex flex-wrap gap-2", className)}
      role="group"
      aria-label="Filter by category"
    >
      {options.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={cn(
            "border-3 border-ink px-3 py-1.5 text-xs font-bold uppercase transition-all hover-wiggle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric",
            selected === cat
              ? "bg-slime text-ink shadow-sticker"
              : "bg-white text-ink hover:bg-zinc-100",
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
