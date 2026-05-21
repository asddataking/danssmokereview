INSERT INTO reviews (
  id, slug, product_name, brand, category, image_url,
  dan_score, community_score, price_paid, verdict,
  flavor_notes, effects, short_quote, full_review,
  where_to_buy_url, audio_url, video_url, movement, created_at
) VALUES (
  '1', 'jeeter-juice-detroiter', E'Juice Detroiter', E'Jeeter', 'Pre-Roll', E'/images/placeholders/pre-roll.svg',
  8.7, 8.2, 28, 'Worth It',
  ARRAY['Citrus','Gas','Sweet exhale'], ARRAY['Uplifted','Creative','Social'], E'Detroit energy in a joint — loud flavor, clean burn.', E'Jeeter''s Juice Detroiter hits like a Saturday in the D — bold, flashy, and impossible to ignore. The pre-roll burns even with a thick white ash, and the terp profile leans citrus-forward with that classic Michigan gas underneath.\n\nOn the first few pulls you get sweet orange peel, then the exhale opens into fuel and a little cream. Effects come on quick: mood lift, light body buzz, still functional enough for a walk or a session on Kick.\n\nAt $28 for a infused pre-roll it''s not cheap, but compared to mid shelf options at most dispos, this is Worth It if you want a showpiece smoke for the scoreboard.',
  E'https://jeeter.com', E'https://kick.com/danssmokereview', NULL, 'up', '2026-05-01T12:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  dan_score = EXCLUDED.dan_score,
  community_score = EXCLUDED.community_score,
  movement = EXCLUDED.movement,
  full_review = EXCLUDED.full_review,
  updated_at = NOW();

INSERT INTO reviews (
  id, slug, product_name, brand, category, image_url,
  dan_score, community_score, price_paid, verdict,
  flavor_notes, effects, short_quote, full_review,
  where_to_buy_url, audio_url, video_url, movement, created_at
) VALUES (
  '2', 'rise-gary-payton', E'Gary Payton', E'RISE', 'Flower', E'/images/placeholders/flower.svg',
  9.1, 8.8, 45, 'Worth It',
  ARRAY['Diesel','Pepper','Funk'], ARRAY['Relaxed','Happy','Hungry'], E'Top-shelf GP — funky, potent, scoreboard material.', E'RISE''s Gary Payton batch is what you want on the Michigan Smoke Scoreboard: dense nugs, loud nose, and effects that match the hype. Crack the jar and it''s instant diesel and pepper with a sweet funk on the back end.\n\nThe smoke is smooth through a bong — creamy exhale, no harsh throat hit. High builds in waves: happy, relaxed, definitely munchie-friendly. Great for evening sessions or pairing with DankNDevour content.\n\n$45 an eighth stings a little, but the potency and terp quality justify it. Worth the Tax for GP chasers.',
  E'https://risecannabis.com', NULL, E'https://kick.com/danssmokereview', 'up', '2026-04-28T10:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  dan_score = EXCLUDED.dan_score,
  community_score = EXCLUDED.community_score,
  movement = EXCLUDED.movement,
  full_review = EXCLUDED.full_review,
  updated_at = NOW();

INSERT INTO reviews (
  id, slug, product_name, brand, category, image_url,
  dan_score, community_score, price_paid, verdict,
  flavor_notes, effects, short_quote, full_review,
  where_to_buy_url, audio_url, video_url, movement, created_at
) VALUES (
  '3', 'wyld-marionberry-indica', E'Marionberry Indica Gummies', E'Wyld', 'Edible', E'/images/placeholders/edible.svg',
  8.4, 8.6, 22, 'Worth It',
  ARRAY['Berry','Herbal','Light cannabis'], ARRAY['Sleepy','Calm','Body melt'], E'Reliable nighttime edible — berry flavor, heavy landing.', E'Wyld Marionberry is the edible you keep in the fridge for when you need to shut down after a long stream day. Real berry flavor, not candy-chemical weirdness, with a light herbal cannabis note on the finish.\n\n10mg per piece is the sweet spot for most — two pieces and you''re sliding into couch mode without anxiety spikes. Onset is predictable around 45–90 minutes depending on what you ate (Munchie Mode matters here).\n\n$22 for a 10-pack is fair Michigan pricing. Consistent, dialed, Worth It for indica edible fans.',
  E'https://wyldcanna.com', NULL, NULL, 'neutral', '2026-04-20T18:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  dan_score = EXCLUDED.dan_score,
  community_score = EXCLUDED.community_score,
  movement = EXCLUDED.movement,
  full_review = EXCLUDED.full_review,
  updated_at = NOW();

INSERT INTO reviews (
  id, slug, product_name, brand, category, image_url,
  dan_score, community_score, price_paid, verdict,
  flavor_notes, effects, short_quote, full_review,
  where_to_buy_url, audio_url, video_url, movement, created_at
) VALUES (
  '4', 'element-live-rosin-gmo', E'Live Rosin GMO', E'Element', 'Rosin', E'/images/placeholders/rosin.svg',
  9.4, 9, 55, 'Worth It',
  ARRAY['Garlic','Onion','Skunk','Cream'], ARRAY['Heavy','Euphoric','Couch-lock'], E'GMO rosin that slaps — solventless fire for the top 3.', E'Element''s live rosin GMO is straight scoreboard gold. Cold cure badder with a wet, greasy look and a nose that fills the room — garlic, onion, skunk, finished with cream.\n\nLow-temp dabs reward you with full flavor and a creeping heavy high. This is not daytime fuel unless you''re committed to the couch. Potency is there without harshness; terps carry the experience.\n\n$55 a gram is premium Michigan pricing, but for solventless GMO lovers this is Worth It. One of the loudest rosins on the board right now.',
  E'https://elementextracts.com', E'https://kick.com/danssmokereview', NULL, 'up', '2026-04-15T14:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  dan_score = EXCLUDED.dan_score,
  community_score = EXCLUDED.community_score,
  movement = EXCLUDED.movement,
  full_review = EXCLUDED.full_review,
  updated_at = NOW();

INSERT INTO reviews (
  id, slug, product_name, brand, category, image_url,
  dan_score, community_score, price_paid, verdict,
  flavor_notes, effects, short_quote, full_review,
  where_to_buy_url, audio_url, video_url, movement, created_at
) VALUES (
  '5', 'common-citizen-disposable-tangie', E'Tangie Dream Disposable', E'Common Citizen', 'Vape', E'/images/placeholders/vape.svg',
  7.2, 7.5, 35, 'Mid',
  ARRAY['Tangerine','Sweet','Light earth'], ARRAY['Light head','Mild relax'], E'Fine for errands — flavor ok, effects just mid.', E'Common Citizen''s Tangie Dream disposable is the definition of Mid on the Michigan board: not bad, not memorable. Orange-forward taste on the pull, a little artificial sweet on exhale, light earth underneath.\n\nEffects are gentle — good for errands or a low-key afternoon, not for a Gas session on stream. Hardware worked fine, no clogging through a full cart test.\n\n$35 feels a touch high for what you get. Grab on sale or if you need portability; otherwise keep climbing the scoreboard for Worth It picks.',
  E'https://commoncitizen.com', NULL, NULL, 'down', '2026-04-10T11:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  dan_score = EXCLUDED.dan_score,
  community_score = EXCLUDED.community_score,
  movement = EXCLUDED.movement,
  full_review = EXCLUDED.full_review,
  updated_at = NOW();

INSERT INTO reviews (
  id, slug, product_name, brand, category, image_url,
  dan_score, community_score, price_paid, verdict,
  flavor_notes, effects, short_quote, full_review,
  where_to_buy_url, audio_url, video_url, movement, created_at
) VALUES (
  '6', 'mac-1-concentrate-badder', E'MAC 1 Badder', E'Glorious Cannabis', 'Concentrate', E'/images/placeholders/concentrate.svg',
  8.9, 8.4, 40, 'Worth It',
  ARRAY['Vanilla','Citrus','Cream','Herbal'], ARRAY['Euphoric','Focused','Creative'], E'MAC 1 badder with dessert terps — gas without the chaos.', E'Glorious MAC 1 badder brings that dessert-terp profile MAC fans chase: vanilla, citrus cream, light herbal spice. Consistency is scoopable, easy on the dab rig or Puffco.\n\nHigh is euphoric and focused early, then mellows into creative flow — great for editing reviews or prepping Splifft community content. No harsh finish at reasonable temps.\n\n$40 a gram is solid value for Michigan concentrate shelves. Worth It for terp hunters who want balance over knockout.',
  E'https://gloriouscannabis.com', NULL, NULL, 'up', '2026-04-05T09:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  dan_score = EXCLUDED.dan_score,
  community_score = EXCLUDED.community_score,
  movement = EXCLUDED.movement,
  full_review = EXCLUDED.full_review,
  updated_at = NOW();

INSERT INTO reviews (
  id, slug, product_name, brand, category, image_url,
  dan_score, community_score, price_paid, verdict,
  flavor_notes, effects, short_quote, full_review,
  where_to_buy_url, audio_url, video_url, movement, created_at
) VALUES (
  '7', 'local-grove-runtz-pre-roll-pack', E'Runtz 5-Pack', E'Local Grove', 'Pre-Roll', E'/images/placeholders/pre-roll.svg',
  6.8, 7.1, 32, 'Taxed',
  ARRAY['Candy','Muted gas'], ARRAY['Mild relax','Short duration'], E'Runtz name, taxed price — flavor didn''t match the hype.', E'Local Grove''s Runtz 5-pack looks the part — tight rolls, nice label — but the smoke doesn''t pay the Runtz tax. Candy notes on the light side, gas is muted, and effects tap out faster than expected.\n\nBurn was ok, one joint ran a little canoed. Fine for sharing at a sesh if someone else brought it, but I wouldn''t rebuy at $32 for five.\n\nTaxed verdict: you''re paying for the strain name more than the experience. Skip unless on heavy discount.',
  E'https://localgrove.com', NULL, NULL, 'down', '2026-03-28T16:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  dan_score = EXCLUDED.dan_score,
  community_score = EXCLUDED.community_score,
  movement = EXCLUDED.movement,
  full_review = EXCLUDED.full_review,
  updated_at = NOW();

INSERT INTO reviews (
  id, slug, product_name, brand, category, image_url,
  dan_score, community_score, price_paid, verdict,
  flavor_notes, effects, short_quote, full_review,
  where_to_buy_url, audio_url, video_url, movement, created_at
) VALUES (
  '8', 'peninsula-garden-blue-dream', E'Blue Dream', E'Peninsula Garden', 'Flower', E'/images/placeholders/flower.svg',
  8, 7.9, 38, 'Worth It',
  ARRAY['Berry','Sweet','Herbal'], ARRAY['Balanced','Creative','Calm'], E'Classic Blue Dream done right — balanced, smooth, daily driver.', E'Peninsula Garden Blue Dream is the balanced flower you keep in rotation for reviews and casual sessions. Berry-sweet nose with herbal back notes, not overly dry, breaks down fluffy.\n\nSmoke is smooth in a joint or pipe — creative calm without couch-lock. Great intro strain for new Michigan patients following the scoreboard.\n\n$38 an eighth is fair for quality outdoor-hybrid vibes. Worth It as a daily driver when you don''t need rosin-level intensity.',
  E'https://peninsulagarden.com', NULL, NULL, 'neutral', '2026-03-20T13:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  dan_score = EXCLUDED.dan_score,
  community_score = EXCLUDED.community_score,
  movement = EXCLUDED.movement,
  full_review = EXCLUDED.full_review,
  updated_at = NOW();

INSERT INTO reviews (
  id, slug, product_name, brand, category, image_url,
  dan_score, community_score, price_paid, verdict,
  flavor_notes, effects, short_quote, full_review,
  where_to_buy_url, audio_url, video_url, movement, created_at
) VALUES (
  '9', 'distro-10-sherb-cake-live-resin', E'Sherb Cake Live Resin', E'Distro 10', 'Concentrate', E'/images/placeholders/concentrate.svg',
  8.6, 8.3, 42, 'Worth It',
  ARRAY['Cake','Sherbet','Gas'], ARRAY['Happy','Relaxed','Social'], E'Dessert gas in a jar — live resin that actually tastes.', E'Distro 10 Sherb Cake live resin brings cake batter and sherbet sweetness with a gas punch on the exhale. Sauce consistency makes it easy to work with on cold starts.\n\nEffects are social-happy first, then relaxed — good for Kick streams and post-review hangs. Terps hold up through multiple dabs.\n\n$42 is competitive for live resin in Michigan. Worth It when you want dessert profiles without paying rosin prices.',
  E'https://distro10.com', NULL, NULL, 'up', '2026-03-15T10:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  dan_score = EXCLUDED.dan_score,
  community_score = EXCLUDED.community_score,
  movement = EXCLUDED.movement,
  full_review = EXCLUDED.full_review,
  updated_at = NOW();

INSERT INTO audio_sessions (
  id, slug, title, session_date, duration, topic, description, related_review_id, audio_url
) VALUES (
  'a1', 'gmo-rosin-deep-dive', E'GMO Rosin Deep Dive', '2026-05-15', E'18:42', E'Element Live Rosin GMO', E'Dan breaks down cold cure, dab temps, and why GMO belongs at the top of the Michigan board.',
  E'4', E'https://kick.com/danssmokereview'
) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO audio_sessions (
  id, slug, title, session_date, duration, topic, description, related_review_id, audio_url
) VALUES (
  'a2', 'jeeter-in-the-d', E'Jeeter in the D', '2026-05-08', E'12:05', E'Jeeter Juice Detroiter Pre-Roll', E'Pre-roll review session — infused vs classic, and whether Jeeter is Worth the Tax in 2026.',
  E'1', E'https://kick.com/danssmokereview'
) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO audio_sessions (
  id, slug, title, session_date, duration, topic, description, related_review_id, audio_url
) VALUES (
  'a3', 'munchie-mode-wyld', E'Munchie Mode: Wyld + Late Night Eats', '2026-04-22', E'22:30', E'Edibles & DankNDevour pairings', E'Pairing Wyld Marionberry with Detroit late-night food spots — DankNDevour crossover episode.',
  E'3', E'https://kick.com/danssmokereview'
) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO audio_sessions (
  id, slug, title, session_date, duration, topic, description, related_review_id, audio_url
) VALUES (
  'a4', 'scoreboard-may-rankings', E'Scoreboard Shake-Up: May Rankings', '2026-05-01', E'15:18', E'Michigan Smoke Scoreboard', E'Monthly scoreboard rundown — who moved up, who got taxed, and what to grab this week.',
  NULL, E'https://kick.com/danssmokereview'
) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO audio_sessions (
  id, slug, title, session_date, duration, topic, description, related_review_id, audio_url
) VALUES (
  'a5', 'splifft-community-preview', E'Splifft Community Preview', '2026-04-10', E'9:55', E'Community ratings & badges', E'Early look at Splifft integration — community scores, tracking, and future social features.',
  NULL, E'https://kick.com/danssmokereview'
) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO audio_sessions (
  id, slug, title, session_date, duration, topic, description, related_review_id, audio_url
) VALUES (
  'a6', 'gary-payton-flower-session', E'Gary Payton Flower Session', '2026-04-28', E'14:20', E'RISE Gary Payton', E'Live session notes on GP flower — jar appeal, grind, and where it lands on the board.',
  E'2', E'https://kick.com/danssmokereview'
) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;