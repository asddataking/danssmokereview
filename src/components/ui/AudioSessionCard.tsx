import Link from "next/link";
import type { AudioSession } from "@/lib/types";
import { getReviewById } from "@/lib/data/reviews";
import { cn } from "@/lib/utils";

interface AudioSessionCardProps {
  session: AudioSession;
  expanded?: boolean;
}

export function AudioSessionCard({ session, expanded = false }: AudioSessionCardProps) {
  const related = session.relatedReviewId
    ? getReviewById(session.relatedReviewId)
    : undefined;

  return (
    <article
      className={cn(
        "border-4 border-ink bg-white p-4 shadow-sticker",
        expanded && "p-6",
      )}
    >
      <div className="flex gap-4">
        <button
          type="button"
          aria-label={`Play ${session.title}`}
          className="flex h-14 w-14 shrink-0 items-center justify-center border-4 border-ink bg-grape text-2xl text-white shadow-sticker transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
        >
          ▶
        </button>
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
          {related && (
            <Link
              href={`/reviews/${related.slug}`}
              className="mt-2 inline-block text-sm font-bold text-electric underline hover:text-ink"
            >
              Related review: {related.productName} →
            </Link>
          )}
        </div>
      </div>
      {expanded && (
        <div className="mt-4 flex h-12 items-center gap-2 rounded-none border-3 border-dashed border-ink/30 bg-zinc-100 px-4">
          <span className="text-xs font-bold uppercase text-ink/50">
            Audio player placeholder
          </span>
          <div className="h-1 flex-1 bg-ink/20">
            <div className="h-full w-1/3 bg-slime" />
          </div>
        </div>
      )}
    </article>
  );
}
