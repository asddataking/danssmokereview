import Link from "next/link";
import { ExternalLinkLabel } from "@/components/ui/ExternalLinkLabel";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "electric" | "ghost";

interface SlimeButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
}

const variants: Record<Variant, string> = {
  primary: "bg-slime text-ink hover:bg-[#6ee600]",
  secondary: "bg-nick-orange text-white hover:bg-[#e55a00]",
  electric: "bg-electric text-ink hover:bg-[#00a8e6]",
  ghost: "bg-white text-ink hover:bg-zinc-100",
};

export function SlimeButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  external,
  type = "button",
}: SlimeButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 border-4 border-ink px-5 py-3 font-bold uppercase tracking-wide shadow-sticker transition-all hover-wiggle hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-sticker-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={base}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
        {external && <ExternalLinkLabel />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
