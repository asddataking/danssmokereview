import { cn } from "@/lib/utils";

interface StickerLabelProps {
  children: React.ReactNode;
  color?: "slime" | "orange" | "electric" | "grape" | "white";
  className?: string;
  tilt?: boolean;
}

const colors = {
  slime: "bg-slime text-ink",
  orange: "bg-nick-orange text-white",
  electric: "bg-electric text-ink",
  grape: "bg-grape text-white",
  white: "bg-white text-ink",
};

export function StickerLabel({
  children,
  color = "slime",
  className,
  tilt = true,
}: StickerLabelProps) {
  return (
    <span
      className={cn(
        "inline-block border-3 border-ink px-3 py-1 text-xs font-black uppercase tracking-wider shadow-sticker",
        colors[color],
        tilt && "sticker-tilt",
        className,
      )}
    >
      {children}
    </span>
  );
}
