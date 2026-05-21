import { readFileSync } from "fs";
import { join } from "path";
import { createClient } from "@supabase/supabase-js";
import { audioSessions, productReviews } from "../src/data/seed";
import type { Movement } from "../src/lib/types";

const movementBySlug: Record<string, Movement> = {
  "jeeter-juice-detroiter": "up",
  "rise-gary-payton": "up",
  "wyld-marionberry-indica": "neutral",
  "element-live-rosin-gmo": "up",
  "common-citizen-disposable-tangie": "down",
  "mac-1-concentrate-badder": "up",
  "local-grove-runtz-pre-roll-pack": "down",
  "peninsula-garden-blue-dream": "neutral",
  "distro-10-sherb-cake-live-resin": "up",
};

function loadEnv() {
  const path = join(process.cwd(), ".env.local");
  try {
    const raw = readFileSync(path, "utf8");
    for (const line of raw.split("\n")) {
      const m = line.match(/^([^#=]+)=(.*)$/);
      if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, "");
    }
  } catch {
    /* optional */
  }
}

loadEnv();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  console.error("Missing Supabase URL or key in .env.local");
  process.exit(1);
}

const supabase = createClient(url, key);

async function main() {
  const reviewRows = productReviews.map((r) => ({
    id: r.id,
    slug: r.slug,
    product_name: r.productName,
    brand: r.brand,
    category: r.category,
    image_url: r.imageUrl,
    dan_score: r.danScore,
    community_score: r.communityScore,
    price_paid: r.pricePaid,
    verdict: r.verdict,
    flavor_notes: r.flavorNotes,
    effects: r.effects,
    short_quote: r.shortQuote,
    full_review: r.fullReview,
    where_to_buy_url: r.whereToBuyUrl ?? null,
    audio_url: r.listenUrl ?? null,
    video_url: r.videoUrl ?? null,
    movement: movementBySlug[r.slug] ?? "neutral",
    created_at: r.createdAt,
  }));

  const { error: reviewError } = await supabase
    .from("reviews")
    .upsert(reviewRows, { onConflict: "id" });

  if (reviewError) {
    console.error("Reviews:", reviewError.message);
    process.exit(1);
  }

  const audioRows = audioSessions.map((s) => ({
    id: s.id,
    slug: s.slug,
    title: s.title,
    session_date: s.date,
    duration: s.duration,
    topic: s.topic,
    description: s.description,
    related_review_id: s.relatedReviewId ?? null,
    audio_url: s.listenUrl ?? null,
  }));

  const { error: audioError } = await supabase
    .from("audio_sessions")
    .upsert(audioRows, { onConflict: "id" });

  if (audioError) {
    console.error("Audio:", audioError.message);
    process.exit(1);
  }

  console.log(
    `Seeded ${reviewRows.length} reviews and ${audioRows.length} audio sessions.`,
  );
}

main();
