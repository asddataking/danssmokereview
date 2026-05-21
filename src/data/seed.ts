import type { AudioSession, ProductReview } from "@/lib/types";

export const productReviews: ProductReview[] = [
  {
    id: "1",
    slug: "jeeter-juice-detroiter",
    productName: "Juice Detroiter",
    brand: "Jeeter",
    category: "Pre-Roll",
    imageUrl: "/images/placeholders/pre-roll.svg",
    danScore: 8.7,
    communityScore: 8.2,
    pricePaid: 28,
    verdict: "Worth It",
    flavorNotes: ["Citrus", "Gas", "Sweet exhale"],
    effects: ["Uplifted", "Creative", "Social"],
    shortQuote: "Detroit energy in a joint — loud flavor, clean burn.",
    fullReview: `Jeeter's Juice Detroiter hits like a Saturday in the D — bold, flashy, and impossible to ignore. The pre-roll burns even with a thick white ash, and the terp profile leans citrus-forward with that classic Michigan gas underneath.

On the first few pulls you get sweet orange peel, then the exhale opens into fuel and a little cream. Effects come on quick: mood lift, light body buzz, still functional enough for a walk or a session on Kick.

At $28 for a infused pre-roll it's not cheap, but compared to mid shelf options at most dispos, this is Worth It if you want a showpiece smoke for the scoreboard.`,
    whereToBuyUrl: "https://jeeter.com",
    audioUrl: "/audio/placeholder.mp3",
    createdAt: "2026-05-01T12:00:00Z",
  },
  {
    id: "2",
    slug: "rise-gary-payton",
    productName: "Gary Payton",
    brand: "RISE",
    category: "Flower",
    imageUrl: "/images/placeholders/flower.svg",
    danScore: 9.1,
    communityScore: 8.8,
    pricePaid: 45,
    verdict: "Worth It",
    flavorNotes: ["Diesel", "Pepper", "Funk"],
    effects: ["Relaxed", "Happy", "Hungry"],
    shortQuote: "Top-shelf GP — funky, potent, scoreboard material.",
    fullReview: `RISE's Gary Payton batch is what you want on the Michigan Smoke Scoreboard: dense nugs, loud nose, and effects that match the hype. Crack the jar and it's instant diesel and pepper with a sweet funk on the back end.

The smoke is smooth through a bong — creamy exhale, no harsh throat hit. High builds in waves: happy, relaxed, definitely munchie-friendly. Great for evening sessions or pairing with DankNDevour content.

$45 an eighth stings a little, but the potency and terp quality justify it. Worth the Tax for GP chasers.`,
    whereToBuyUrl: "https://risecannabis.com",
    videoUrl: "https://kick.com/danssmokereview",
    createdAt: "2026-04-28T10:00:00Z",
  },
  {
    id: "3",
    slug: "wyld-marionberry-indica",
    productName: "Marionberry Indica Gummies",
    brand: "Wyld",
    category: "Edible",
    imageUrl: "/images/placeholders/edible.svg",
    danScore: 8.4,
    communityScore: 8.6,
    pricePaid: 22,
    verdict: "Worth It",
    flavorNotes: ["Berry", "Herbal", "Light cannabis"],
    effects: ["Sleepy", "Calm", "Body melt"],
    shortQuote: "Reliable nighttime edible — berry flavor, heavy landing.",
    fullReview: `Wyld Marionberry is the edible you keep in the fridge for when you need to shut down after a long stream day. Real berry flavor, not candy-chemical weirdness, with a light herbal cannabis note on the finish.

10mg per piece is the sweet spot for most — two pieces and you're sliding into couch mode without anxiety spikes. Onset is predictable around 45–90 minutes depending on what you ate (Munchie Mode matters here).

$22 for a 10-pack is fair Michigan pricing. Consistent, dialed, Worth It for indica edible fans.`,
    whereToBuyUrl: "https://wyldcanna.com",
    createdAt: "2026-04-20T18:00:00Z",
  },
  {
    id: "4",
    slug: "element-live-rosin-gmo",
    productName: "Live Rosin GMO",
    brand: "Element",
    category: "Rosin",
    imageUrl: "/images/placeholders/rosin.svg",
    danScore: 9.4,
    communityScore: 9.0,
    pricePaid: 55,
    verdict: "Worth It",
    flavorNotes: ["Garlic", "Onion", "Skunk", "Cream"],
    effects: ["Heavy", "Euphoric", "Couch-lock"],
    shortQuote: "GMO rosin that slaps — solventless fire for the top 3.",
    fullReview: `Element's live rosin GMO is straight scoreboard gold. Cold cure badder with a wet, greasy look and a nose that fills the room — garlic, onion, skunk, finished with cream.

Low-temp dabs reward you with full flavor and a creeping heavy high. This is not daytime fuel unless you're committed to the couch. Potency is there without harshness; terps carry the experience.

$55 a gram is premium Michigan pricing, but for solventless GMO lovers this is Worth It. One of the loudest rosins on the board right now.`,
    whereToBuyUrl: "https://elementextracts.com",
    audioUrl: "/audio/placeholder.mp3",
    createdAt: "2026-04-15T14:00:00Z",
  },
  {
    id: "5",
    slug: "common-citizen-disposable-tangie",
    productName: "Tangie Dream Disposable",
    brand: "Common Citizen",
    category: "Vape",
    imageUrl: "/images/placeholders/vape.svg",
    danScore: 7.2,
    communityScore: 7.5,
    pricePaid: 35,
    verdict: "Mid",
    flavorNotes: ["Tangerine", "Sweet", "Light earth"],
    effects: ["Light head", "Mild relax"],
    shortQuote: "Fine for errands — flavor ok, effects just mid.",
    fullReview: `Common Citizen's Tangie Dream disposable is the definition of Mid on the Michigan board: not bad, not memorable. Orange-forward taste on the pull, a little artificial sweet on exhale, light earth underneath.

Effects are gentle — good for errands or a low-key afternoon, not for a Gas session on stream. Hardware worked fine, no clogging through a full cart test.

$35 feels a touch high for what you get. Grab on sale or if you need portability; otherwise keep climbing the scoreboard for Worth It picks.`,
    whereToBuyUrl: "https://commoncitizen.com",
    createdAt: "2026-04-10T11:00:00Z",
  },
  {
    id: "6",
    slug: "mac-1-concentrate-badder",
    productName: "MAC 1 Badder",
    brand: "Glorious Cannabis",
    category: "Concentrate",
    imageUrl: "/images/placeholders/concentrate.svg",
    danScore: 8.9,
    communityScore: 8.4,
    pricePaid: 40,
    verdict: "Worth It",
    flavorNotes: ["Vanilla", "Citrus", "Cream", "Herbal"],
    effects: ["Euphoric", "Focused", "Creative"],
    shortQuote: "MAC 1 badder with dessert terps — gas without the chaos.",
    fullReview: `Glorious MAC 1 badder brings that dessert-terp profile MAC fans chase: vanilla, citrus cream, light herbal spice. Consistency is scoopable, easy on the dab rig or Puffco.

High is euphoric and focused early, then mellows into creative flow — great for editing reviews or prepping Splifft community content. No harsh finish at reasonable temps.

$40 a gram is solid value for Michigan concentrate shelves. Worth It for terp hunters who want balance over knockout.`,
    whereToBuyUrl: "https://gloriouscannabis.com",
    createdAt: "2026-04-05T09:00:00Z",
  },
  {
    id: "7",
    slug: "local-grove-runtz-pre-roll-pack",
    productName: "Runtz 5-Pack",
    brand: "Local Grove",
    category: "Pre-Roll",
    imageUrl: "/images/placeholders/pre-roll.svg",
    danScore: 6.8,
    communityScore: 7.1,
    pricePaid: 32,
    verdict: "Taxed",
    flavorNotes: ["Candy", "Muted gas"],
    effects: ["Mild relax", "Short duration"],
    shortQuote: "Runtz name, taxed price — flavor didn't match the hype.",
    fullReview: `Local Grove's Runtz 5-pack looks the part — tight rolls, nice label — but the smoke doesn't pay the Runtz tax. Candy notes on the light side, gas is muted, and effects tap out faster than expected.

Burn was ok, one joint ran a little canoed. Fine for sharing at a sesh if someone else brought it, but I wouldn't rebuy at $32 for five.

Taxed verdict: you're paying for the strain name more than the experience. Skip unless on heavy discount.`,
    whereToBuyUrl: "https://localgrove.com",
    createdAt: "2026-03-28T16:00:00Z",
  },
  {
    id: "8",
    slug: "peninsula-garden-blue-dream",
    productName: "Blue Dream",
    brand: "Peninsula Garden",
    category: "Flower",
    imageUrl: "/images/placeholders/flower.svg",
    danScore: 8.0,
    communityScore: 7.9,
    pricePaid: 38,
    verdict: "Worth It",
    flavorNotes: ["Berry", "Sweet", "Herbal"],
    effects: ["Balanced", "Creative", "Calm"],
    shortQuote: "Classic Blue Dream done right — balanced, smooth, daily driver.",
    fullReview: `Peninsula Garden Blue Dream is the balanced flower you keep in rotation for reviews and casual sessions. Berry-sweet nose with herbal back notes, not overly dry, breaks down fluffy.

Smoke is smooth in a joint or pipe — creative calm without couch-lock. Great intro strain for new Michigan patients following the scoreboard.

$38 an eighth is fair for quality outdoor-hybrid vibes. Worth It as a daily driver when you don't need rosin-level intensity.`,
    whereToBuyUrl: "https://peninsulagarden.com",
    createdAt: "2026-03-20T13:00:00Z",
  },
  {
    id: "9",
    slug: "distro-10-sherb-cake-live-resin",
    productName: "Sherb Cake Live Resin",
    brand: "Distro 10",
    category: "Concentrate",
    imageUrl: "/images/placeholders/concentrate.svg",
    danScore: 8.6,
    communityScore: 8.3,
    pricePaid: 42,
    verdict: "Worth It",
    flavorNotes: ["Cake", "Sherbet", "Gas"],
    effects: ["Happy", "Relaxed", "Social"],
    shortQuote: "Dessert gas in a jar — live resin that actually tastes.",
    fullReview: `Distro 10 Sherb Cake live resin brings cake batter and sherbet sweetness with a gas punch on the exhale. Sauce consistency makes it easy to work with on cold starts.

Effects are social-happy first, then relaxed — good for Kick streams and post-review hangs. Terps hold up through multiple dabs.

$42 is competitive for live resin in Michigan. Worth It when you want dessert profiles without paying rosin prices.`,
    whereToBuyUrl: "https://distro10.com",
    createdAt: "2026-03-15T10:00:00Z",
  },
];

export const audioSessions: AudioSession[] = [
  {
    id: "a1",
    title: "GMO Rosin Deep Dive",
    slug: "gmo-rosin-deep-dive",
    date: "2026-05-15",
    duration: "18:42",
    topic: "Element Live Rosin GMO",
    relatedReviewId: "4",
    audioUrl: "/audio/placeholder.mp3",
    description:
      "Dan breaks down cold cure, dab temps, and why GMO belongs at the top of the Michigan board.",
  },
  {
    id: "a2",
    title: "Jeeter in the D",
    slug: "jeeter-in-the-d",
    date: "2026-05-08",
    duration: "12:05",
    topic: "Jeeter Juice Detroiter Pre-Roll",
    relatedReviewId: "1",
    audioUrl: "/audio/placeholder.mp3",
    description:
      "Pre-roll review session — infused vs classic, and whether Jeeter is Worth the Tax in 2026.",
  },
  {
    id: "a3",
    title: "Munchie Mode: Wyld + Late Night Eats",
    slug: "munchie-mode-wyld",
    date: "2026-04-22",
    duration: "22:30",
    topic: "Edibles & DankNDevour pairings",
    relatedReviewId: "3",
    audioUrl: "/audio/placeholder.mp3",
    description:
      "Pairing Wyld Marionberry with Detroit late-night food spots — DankNDevour crossover episode.",
  },
  {
    id: "a4",
    title: "Scoreboard Shake-Up: May Rankings",
    slug: "scoreboard-may-rankings",
    date: "2026-05-01",
    duration: "15:18",
    topic: "Michigan Smoke Scoreboard",
    audioUrl: "/audio/placeholder.mp3",
    description:
      "Monthly scoreboard rundown — who moved up, who got taxed, and what to grab this week.",
  },
  {
    id: "a5",
    title: "Splifft Community Preview",
    slug: "splifft-community-preview",
    date: "2026-04-10",
    duration: "9:55",
    topic: "Community ratings & badges",
    audioUrl: "/audio/placeholder.mp3",
    description:
      "Early look at Splifft integration — community scores, tracking, and future social features.",
  },
  {
    id: "a6",
    title: "Gary Payton Flower Session",
    slug: "gary-payton-flower-session",
    date: "2026-04-28",
    duration: "14:20",
    topic: "RISE Gary Payton",
    relatedReviewId: "2",
    audioUrl: "/audio/placeholder.mp3",
    description:
      "Live session notes on GP flower — jar appeal, grind, and where it lands on the board.",
  },
];
