import { audioSessions } from "@/data/seed";
import type { AudioSession } from "@/lib/types";

// SUPABASE: import { createClient } from "@/utils/supabase/server";
// SUPABASE: const { data } = await supabase.from("audio_sessions").select("*");

export function getAllAudioSessions(): AudioSession[] {
  return [...audioSessions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getAudioSessionBySlug(slug: string): AudioSession | undefined {
  return audioSessions.find((s) => s.slug === slug);
}

export function getLatestAudioSessions(limit = 3): AudioSession[] {
  return getAllAudioSessions().slice(0, limit);
}
