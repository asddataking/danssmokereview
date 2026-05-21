import "server-only";

import { audioSessions, productReviews } from "@/data/seed";
import type { AudioSession } from "@/lib/types";
import { mapAudioSessionRow, type AudioSessionRow } from "@/lib/supabase/mappers";
import { getSupabaseServer } from "@/lib/supabase/server";

const reviewSlugById = Object.fromEntries(
  productReviews.map((r) => [r.id, r.slug]),
);

const AUDIO_SELECT = `
  *,
  related_review:reviews!audio_sessions_related_review_id_fkey (slug)
`;

function enrichSeedAudio(sessions: AudioSession[]): AudioSession[] {
  return sessions.map((session) => ({
    ...session,
    relatedReviewSlug: session.relatedReviewId
      ? reviewSlugById[session.relatedReviewId]
      : undefined,
  }));
}

async function getAudioSource(): Promise<AudioSession[]> {
  try {
    const supabase = await getSupabaseServer();
    const { data, error } = await supabase
      .from("audio_sessions")
      .select(AUDIO_SELECT)
      .order("session_date", { ascending: false });

    if (!error && data?.length) {
      return (data as AudioSessionRow[]).map(mapAudioSessionRow);
    }
  } catch {
    /* use seed fallback */
  }
  return enrichSeedAudio(audioSessions).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getAllAudioSessions(): Promise<AudioSession[]> {
  return getAudioSource();
}

export async function getAudioSessionBySlug(
  slug: string,
): Promise<AudioSession | undefined> {
  try {
    const supabase = await getSupabaseServer();
    const { data, error } = await supabase
      .from("audio_sessions")
      .select(AUDIO_SELECT)
      .eq("slug", slug)
      .maybeSingle();

    if (!error && data) return mapAudioSessionRow(data as AudioSessionRow);
  } catch {
    /* fall through */
  }
  return enrichSeedAudio(audioSessions).find((s) => s.slug === slug);
}

export async function getLatestAudioSessions(
  limit = 3,
): Promise<AudioSession[]> {
  return (await getAudioSource()).slice(0, limit);
}
