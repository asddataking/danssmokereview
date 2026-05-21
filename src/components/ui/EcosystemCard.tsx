import { SlimeButton } from "@/components/ui/SlimeButton";
import { StickerLabel } from "@/components/ui/StickerLabel";
import { cn } from "@/lib/utils";

interface EcosystemCardProps {
  title: string;
  sticker: string;
  description: string;
  href: string;
  cta: string;
  accent: "slime" | "orange" | "grape" | "electric";
  className?: string;
}

const accentBg = {
  slime: "bg-slime",
  orange: "bg-nick-orange",
  grape: "bg-grape",
  electric: "bg-electric",
};

export function EcosystemCard({
  title,
  sticker,
  description,
  href,
  cta,
  accent,
  className,
}: EcosystemCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col border-4 border-ink bg-white p-6 shadow-sticker",
        className,
      )}
    >
      <div className={cn("mb-4 h-3 w-20 border-3 border-ink", accentBg[accent])} />
      <StickerLabel color={accent === "orange" ? "orange" : accent === "grape" ? "grape" : accent === "electric" ? "electric" : "slime"}>
        {sticker}
      </StickerLabel>
      <h3 className="mt-4 font-display text-2xl font-black uppercase text-ink">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-ink/80">{description}</p>
      <div className="mt-6">
        <SlimeButton
          href={href}
          variant={accent === "orange" ? "secondary" : accent === "grape" ? "electric" : "primary"}
          external
        >
          {cta}
        </SlimeButton>
      </div>
    </div>
  );
}
