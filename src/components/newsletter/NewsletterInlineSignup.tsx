import { NewsletterSignupForm } from "@/components/newsletter/NewsletterSignupForm";
import {
  NEWSLETTER_HEADLINE,
  NEWSLETTER_POWERED_BY,
  NEWSLETTER_TAGLINE,
  type NewsletterSource,
} from "@/lib/newsletter";
import { cn } from "@/lib/utils";

interface NewsletterInlineSignupProps {
  source: NewsletterSource;
  className?: string;
}

export function NewsletterInlineSignup({
  source,
  className,
}: NewsletterInlineSignupProps) {
  return (
    <div
      className={cn(
        "mt-8 border-4 border-ink/80 bg-white/90 p-4 shadow-sticker backdrop-blur-sm md:p-5",
        className,
      )}
      data-cta="newsletter"
      data-source={source}
      aria-labelledby={`newsletter-inline-${source}`}
    >
      <p
        id={`newsletter-inline-${source}`}
        className="font-display text-sm font-black uppercase text-ink md:text-base"
      >
        {NEWSLETTER_HEADLINE}
      </p>
      <p className="mt-1 text-sm font-semibold text-ink/75">{NEWSLETTER_TAGLINE}</p>
      <p className="text-xs font-bold uppercase text-ink/45">{NEWSLETTER_POWERED_BY}</p>
      <div className="mt-4">
        <NewsletterSignupForm source={source} layout="inline" />
      </div>
    </div>
  );
}
