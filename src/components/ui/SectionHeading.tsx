import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
  accent?: "slime" | "orange" | "electric" | "grape";
}

const accents = {
  slime: "bg-slime",
  orange: "bg-nick-orange",
  electric: "bg-electric",
  grape: "bg-grape",
};

export function SectionHeading({
  id,
  title,
  subtitle,
  className,
  accent = "slime",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8", className)}>
      <div
        className={cn("mb-2 h-2 w-16 border-3 border-ink", accents[accent])}
        aria-hidden="true"
      />
      <h2
        id={id}
        className="font-display text-3xl font-black uppercase tracking-tight text-ink md:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-xl text-lg text-ink/80">{subtitle}</p>
      )}
    </div>
  );
}
