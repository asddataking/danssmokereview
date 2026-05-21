import { writeFileSync } from "fs";
import { join } from "path";
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

function esc(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "''")
    .replace(/\r\n/g, "\\n")
    .replace(/\n/g, "\\n");
}

function sqlStr(value: string): string {
  return `E'${esc(value)}'`;
}

function arr(values: string[]): string {
  return `ARRAY[${values.map((v) => `'${esc(v)}'`).join(",")}]`;
}

function nullable(value: string | undefined): string {
  return value ? sqlStr(value) : "NULL";
}

const reviewInserts = productReviews.map((r) => {
  const movement = movementBySlug[r.slug] ?? "neutral";
  return `INSERT INTO reviews (
  id, slug, product_name, brand, category, image_url,
  dan_score, community_score, price_paid, verdict,
  flavor_notes, effects, short_quote, full_review,
  where_to_buy_url, audio_url, video_url, movement, created_at
) VALUES (
  '${esc(r.id)}', '${esc(r.slug)}', ${sqlStr(r.productName)}, ${sqlStr(r.brand)}, '${esc(r.category)}', ${sqlStr(r.imageUrl)},
  ${r.danScore}, ${r.communityScore}, ${r.pricePaid}, '${esc(r.verdict)}',
  ${arr(r.flavorNotes)}, ${arr(r.effects)}, ${sqlStr(r.shortQuote)}, ${sqlStr(r.fullReview)},
  ${nullable(r.whereToBuyUrl)}, ${nullable(r.listenUrl)}, ${nullable(r.videoUrl)}, '${movement}', '${r.createdAt}'
) ON CONFLICT (id) DO UPDATE SET
  dan_score = EXCLUDED.dan_score,
  community_score = EXCLUDED.community_score,
  movement = EXCLUDED.movement,
  full_review = EXCLUDED.full_review,
  updated_at = NOW();`;
});

const audioInserts = audioSessions.map((s) => {
  return `INSERT INTO audio_sessions (
  id, slug, title, session_date, duration, topic, description, related_review_id, audio_url
) VALUES (
  '${esc(s.id)}', '${esc(s.slug)}', ${sqlStr(s.title)}, '${s.date}', ${sqlStr(s.duration)}, ${sqlStr(s.topic)}, ${sqlStr(s.description)},
  ${nullable(s.relatedReviewId)}, ${nullable(s.listenUrl)}
) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;`;
});

const sql = [...reviewInserts, ...audioInserts].join("\n\n");
const out = join(process.cwd(), "scripts", "generated-seed.sql");
writeFileSync(out, sql, "utf8");
console.log(`Wrote ${out} (${reviewInserts.length} reviews, ${audioInserts.length} audio)`);
