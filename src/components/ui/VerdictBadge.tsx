import type { Verdict } from "@/lib/types";
import { getVerdictStyles } from "@/lib/types";
import { cn } from "@/lib/utils";

interface VerdictBadgeProps {
  verdict: Verdict;
  className?: string;
  size?: "sm" | "md";
}

export function VerdictBadge({ verdict, className, size = "md" }: VerdictBadgeProps) {
  const styles = getVerdictStyles(verdict);
  const label =
    verdict === "Worth It"
      ? "Worth It"
      : verdict === "Mid"
        ? "Mid"
        : "Taxed";

  return (
    <span
      className={cn(
        "inline-block border-3 border-ink font-black uppercase shadow-sticker",
        styles.bg,
        styles.text,
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm",
        className,
      )}
    >
      {label}
    </span>
  );
}
