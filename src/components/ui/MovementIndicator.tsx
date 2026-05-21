import type { Movement } from "@/lib/types";
import { cn } from "@/lib/utils";

interface MovementIndicatorProps {
  movement: Movement;
  className?: string;
}

export function MovementIndicator({ movement, className }: MovementIndicatorProps) {
  if (movement === "neutral") {
    return (
      <span
        className={cn(
          "text-sm font-bold uppercase text-ink/50",
          className,
        )}
        aria-label="No change"
      >
        —
      </span>
    );
  }

  const isUp = movement === "up";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 text-sm font-black",
        isUp ? "text-slime" : "text-nick-orange",
        className,
      )}
      aria-label={isUp ? "Moved up" : "Moved down"}
    >
      {isUp ? "▲" : "▼"}
    </span>
  );
}
