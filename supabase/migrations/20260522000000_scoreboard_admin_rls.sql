-- Allow authenticated Clerk users in scoreboard_admins to edit reviews

CREATE TABLE IF NOT EXISTS scoreboard_admins (
  clerk_user_id TEXT PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE POLICY "Admins can update reviews"
  ON reviews FOR UPDATE
  TO authenticated
  USING (
    (SELECT auth.jwt()->>'sub') IN (
      SELECT clerk_user_id FROM scoreboard_admins
    )
  )
  WITH CHECK (
    (SELECT auth.jwt()->>'sub') IN (
      SELECT clerk_user_id FROM scoreboard_admins
    )
  );

CREATE POLICY "Admins can insert reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (
    (SELECT auth.jwt()->>'sub') IN (
      SELECT clerk_user_id FROM scoreboard_admins
    )
  );
