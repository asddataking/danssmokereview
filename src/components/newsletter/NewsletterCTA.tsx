import Link from "next/link";
import { NewsletterSignupForm } from "@/components/newsletter/NewsletterSignupForm";
import { StickerLabel } from "@/components/ui/StickerLabel";
import {
  NEWSLETTER_HEADLINE,
  NEWSLETTER_POWERED_BY,
  NEWSLETTER_TAGLINE,
  type NewsletterSource,
} from "@/lib/newsletter";
import { cn } from "@/lib/utils";

type NewsletterCTAVariant = "default" | "compact" | "dark";

interface NewsletterCTAProps {
  source: NewsletterSource;
  variant?: NewsletterCTAVariant;
  className?: string;
  showLinkToSubscribe?: boolean;
}

const variantStyles: Record<
  NewsletterCTAVariant,
  { section: string; text: string; powered: string }
> = {
  default: {
    section:
      "border-4 border-ink bg-gradient-to-br from-slime/25 via-white to-electric/20 p-6 shadow-sticker md:p-8",
    text: "text-ink",
    powered: "text-ink/50",
  },
  compact: {
    section:
      "border-4 border-ink bg-white p-5 shadow-sticker md:p-6",
    text: "text-ink",
    powered: "text-ink/50",
  },
  dark: {
    section:
      "border-4 border-ink bg-gradient-to-br from-ink via-ink to-grape/70 p-6 text-white shadow-sticker md:p-8",
    text: "text-white",
    powered: "text-white/60",
  },
};

export function NewsletterCTA({
  source,
  variant = "default",
  className,
  showLinkToSubscribe = false,
}: NewsletterCTAProps) {
  const styles = variantStyles[variant];
  const stickerColor = variant === "dark" ? "slime" : "orange";

  return (
    <aside
      className={cn(styles.section, className)}
      aria-labelledby={`newsletter-cta-${source}`}
      data-cta="newsletter"
      data-source={source}
    >
      <StickerLabel color={stickerColor} className="mb-3">
        Weekly Email
      </StickerLabel>
      <h2
        id={`newsletter-cta-${source}`}
        className={cn(
          "font-display text-2xl font-black uppercase leading-tight md:text-3xl",
          styles.text,
        )}
      >
        {NEWSLETTER_HEADLINE}
      </h2>
      <p className={cn("mt-2 max-w-xl text-sm font-semibold md:text-base", styles.text, variant === "dark" && "text-white/90")}>
        {NEWSLETTER_TAGLINE}
      </p>
      <p className={cn("mt-1 text-xs font-bold uppercase", styles.powered)}>
        {NEWSLETTER_POWERED_BY}
      </p>
      <div className="mt-5 max-w-lg">
        <NewsletterSignupForm source={source} />
      </div>
      {showLinkToSubscribe && (
        <p className={cn("mt-4 text-xs font-bold uppercase", styles.powered)}>
          <Link
            href="/subscribe"
            className={cn(
              "underline decoration-2 underline-offset-4 hover:text-nick-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric",
              variant === "dark" ? "text-slime" : "text-electric",
            )}
            data-cta="newsletter"
            data-source={`${source}_learn_more`}
          >
            See what&apos;s in each issue →
          </Link>
        </p>
      )}
    </aside>
  );
}
