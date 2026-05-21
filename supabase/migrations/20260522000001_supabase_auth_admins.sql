-- Switch scoreboard_admins from Clerk IDs to Supabase auth user UUIDs

DROP POLICY IF EXISTS "Admins can update reviews" ON reviews;
DROP POLICY IF EXISTS "Admins can insert reviews" ON reviews;

DROP TABLE IF EXISTS scoreboard_admins;

CREATE TABLE scoreboard_admins (
  user_id UUID PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE POLICY "Admins can update reviews"
  ON reviews FOR UPDATE
  TO authenticated
  USING (auth.uid() IN (SELECT user_id FROM scoreboard_admins))
  WITH CHECK (auth.uid() IN (SELECT user_id FROM scoreboard_admins));

CREATE POLICY "Admins can insert reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IN (SELECT user_id FROM scoreboard_admins));
