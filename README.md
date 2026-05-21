# Dan's Smoke Reviews

Michigan's Smoke Scoreboard — a mobile-first cannabis review and culture site. Nickelodeon energy meets Complex card layouts.

## Run locally

```bash
npm install
cp .env.local.example .env.local   # add Supabase keys if using auth later
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Edit content next

| What | Where |
|------|--------|
| Product reviews & scores | [`src/data/seed.ts`](src/data/seed.ts) |
| Audio episodes | [`src/data/seed.ts`](src/data/seed.ts) (bottom of file) |
| Brand colors & theme | [`src/app/globals.css`](src/app/globals.css) |
| Nav links & external URLs | [`src/lib/constants.ts`](src/lib/constants.ts) |
| Kick / DankNDevour / Splifft URLs | [`src/lib/constants.ts`](src/lib/constants.ts) |

## Supabase connection (later)

**Env** (`.env.local`):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

**Clients:**

- Browser: [`src/utils/supabase/client.ts`](src/utils/supabase/client.ts)
- Server: [`src/utils/supabase/server.ts`](src/utils/supabase/server.ts)
- Session refresh: [`src/utils/supabase/middleware.ts`](src/utils/supabase/middleware.ts) + [`src/middleware.ts`](src/middleware.ts)

**Swap seed data for DB queries in:**

- [`src/lib/data/reviews.ts`](src/lib/data/reviews.ts)
- [`src/lib/data/audio.ts`](src/lib/data/audio.ts)

Example server query:

```ts
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const supabase = createClient(await cookies());
const { data } = await supabase.from("reviews").select("*");
```

### Suggested tables

**`reviews`** — columns mirror `ProductReview` in [`src/lib/types.ts`](src/lib/types.ts)

**`audio_sessions`** — columns mirror `AudioSession`

**`review_movements`** — `review_id`, `direction` (`up` | `down` | `neutral`), `recorded_at` (for live scoreboard deltas)

## MVP scope

- No login
- Community scores are placeholders
- Audio/video are UI placeholders
- Affiliate and voting hook up via Supabase + Splifft later

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Supabase (`@supabase/supabase-js`, `@supabase/ssr`)
