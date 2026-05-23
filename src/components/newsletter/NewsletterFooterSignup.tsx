import Link from "next/link";
import { NewsletterSignupForm } from "@/components/newsletter/NewsletterSignupForm";
import {
  NEWSLETTER_HEADLINE,
  NEWSLETTER_POWERED_BY,
  NEWSLETTER_TAGLINE,
} from "@/lib/newsletter";

export function NewsletterFooterSignup() {
  return (
    <div data-cta="newsletter" data-source="site_footer">
      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slime">
        Newsletter
      </p>
      <p className="font-display text-lg font-black uppercase text-white">
        {NEWSLETTER_HEADLINE}
      </p>
      <p className="mt-2 text-sm text-white/80">{NEWSLETTER_TAGLINE}</p>
      <p className="mt-1 text-xs font-bold uppercase text-white/50">
        {NEWSLETTER_POWERED_BY}
      </p>
      <div className="mt-4">
        <NewsletterSignupForm
          source="site_footer"
          showMicrocopy={false}
          inputClassName="border-slime/40 bg-ink text-white placeholder:text-white/40"
          buttonClassName="bg-slime text-ink hover:bg-[#6ee600]"
        />
        <p className="mt-2 text-xs text-white/50">
          No spam. Just the best Michigan smoke signals.
        </p>
      </div>
      <Link
        href="/subscribe"
        className="mt-3 inline-block text-xs font-bold uppercase text-slime hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slime"
        data-cta="newsletter"
        data-source="site_footer"
      >
        Full subscribe page →
      </Link>
    </div>
  );
}
