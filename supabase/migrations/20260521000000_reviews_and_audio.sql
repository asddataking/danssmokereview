-- Reviews & audio sessions for Dan's Smoke Reviews scoreboard

CREATE TABLE IF NOT EXISTS reviews (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  product_name TEXT NOT NULL,
  brand TEXT NOT NULL,
  category TEXT NOT NULL CHECK (
    category IN ('Flower', 'Rosin', 'Pre-Roll', 'Edible', 'Vape', 'Concentrate')
  ),
  image_url TEXT NOT NULL,
  dan_score NUMERIC(4, 1) NOT NULL,
  community_score NUMERIC(4, 1) NOT NULL,
  price_paid NUMERIC(10, 2) NOT NULL,
  verdict TEXT NOT NULL CHECK (verdict IN ('Worth It', 'Mid', 'Taxed')),
  flavor_notes TEXT[] NOT NULL DEFAULT '{}',
  effects TEXT[] NOT NULL DEFAULT '{}',
  short_quote TEXT NOT NULL,
  full_review TEXT NOT NULL,
  where_to_buy_url TEXT,
  audio_url TEXT,
  video_url TEXT,
  movement TEXT NOT NULL DEFAULT 'neutral' CHECK (movement IN ('up', 'down', 'neutral')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS audio_sessions (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  session_date DATE NOT NULL,
  duration TEXT NOT NULL,
  topic TEXT NOT NULL,
  description TEXT NOT NULL,
  related_review_id TEXT REFERENCES reviews (id) ON DELETE SET NULL,
  audio_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS reviews_slug_idx ON reviews (slug);
CREATE INDEX IF NOT EXISTS reviews_category_idx ON reviews (category);
CREATE INDEX IF NOT EXISTS reviews_dan_score_idx ON reviews (dan_score DESC);
CREATE INDEX IF NOT EXISTS reviews_created_at_idx ON reviews (created_at DESC);
CREATE INDEX IF NOT EXISTS audio_sessions_date_idx ON audio_sessions (session_date DESC);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE audio_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read reviews"
  ON reviews FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public read audio_sessions"
  ON audio_sessions FOR SELECT
  TO anon, authenticated
  USING (true);
