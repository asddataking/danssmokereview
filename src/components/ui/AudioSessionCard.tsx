import Link from "next/link";
import { ExternalLinkLabel } from "@/components/ui/ExternalLinkLabel";
import { SlimeButton } from "@/components/ui/SlimeButton";
import type { AudioSession } from "@/lib/types";
import { cn } from "@/lib/utils";

interface AudioSessionCardProps {
  session: AudioSession;
  expanded?: boolean;
}

export function AudioSessionCard({
  session,
  expanded = false,
}: AudioSessionCardProps) {
  return (
    <article
      className={cn(
        "border-4 border-ink bg-white p-4 shadow-sticker",
        expanded && "p-6",
      )}
    >
      <div className="flex gap-4">
        {session.listenUrl ? (
          <a
            href={session.listenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 shrink-0 items-center justify-center border-4 border-ink bg-grape text-xs font-black uppercase leading-tight text-white shadow-sticker transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            aria-label={`Listen to ${session.title} (opens in a new tab)`}
          >
            Listen
          </a>
        ) : (
          <span
            className="flex h-14 w-14 shrink-0 items-center justify-center border-4 border-dashed border-ink/30 bg-zinc-100 text-[10px] font-bold uppercase text-ink/40"
            aria-hidden
          >
            Soon
          </span>
        )}

        <div className="min-w-0 flex-1">
          <time className="text-xs font-bold uppercase text-ink/50">
            {new Date(session.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <h3 className="font-display text-lg font-black uppercase text-ink">
            {session.title}
          </h3>
          <p className="text-sm font-semibold text-nick-orange">{session.topic}</p>
          <p className="mt-1 text-xs font-bold text-ink/60">{session.duration}</p>
          {expanded && (
            <p className="mt-2 text-sm text-ink/80">{session.description}</p>
          )}
          {session.relatedReviewSlug && (
            <Link
              href={`/reviews/${session.relatedReviewSlug}`}
              className="mt-2 inline-block text-sm font-bold text-electric underline hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
            >
              Related review →
            </Link>
          )}
        </div>
      </div>

      {expanded && session.listenUrl && (
        <div className="mt-4">
          <SlimeButton href={session.listenUrl} variant="electric" external>
            Listen on external platform
            <ExternalLinkLabel />
          </SlimeButton>
        </div>
      )}
    </article>
  );
}
