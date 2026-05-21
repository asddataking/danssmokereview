import Image from "next/image";
import { cn } from "@/lib/utils";

interface PartnerLogoProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}

const sizeMap = {
  sm: { box: "h-8 w-8", width: 32, height: 32 },
  md: { box: "h-14 w-14", width: 56, height: 56 },
  lg: { box: "h-24 w-24 md:h-28 md:w-28", width: 112, height: 112 },
};

export function PartnerLogo({
  src,
  alt,
  size = "md",
  className,
  priority = false,
}: PartnerLogoProps) {
  const { box, width, height } = sizeMap[size];

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden border-3 border-ink bg-white",
        box,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain p-1"
        priority={priority}
      />
    </span>
  );
}
