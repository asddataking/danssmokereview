# Dan's Smoke Reviews

Michigan's Smoke Scoreboard — a mobile-first cannabis review and culture site. Nickelodeon energy meets Complex card layouts.

## Run locally

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase anon/publishable key |
| `SUPABASE_ADMIN_USER_IDS` | Optional comma-separated auth user UUIDs for the scoreboard editor |

## Supabase auth (scoreboard editor)

1. In [Supabase Dashboard](https://supabase.com/dashboard) → **Authentication → Providers**, enable **Email** (password sign-in).
2. Set **Site URL** to your app URL (e.g. `http://localhost:3000` or your Vercel URL).
3. Add redirect URL: `http://localhost:3000/auth/callback` (and production URL + `/auth/callback`).
4. Run migrations in `supabase/migrations/`.
5. Sign up at `/sign-up`, then in Supabase SQL add your user as an admin:

```sql
INSERT INTO scoreboard_admins (user_id)
VALUES ('your-auth-user-uuid-from-dashboard');
```

Find your UUID under **Authentication → Users**.

6. Visit [/admin/scoreboard](http://localhost:3000/admin/scoreboard) while signed in to edit scores.

## Edit content

| What | Where |
|------|--------|
| Seed fallback data | [`src/data/seed.ts`](src/data/seed.ts) |
| Live scoreboard (signed in) | `/admin/scoreboard` |
| Brand colors & theme | [`src/app/globals.css`](src/app/globals.css) |
| Nav & URLs | [`src/lib/constants.ts`](src/lib/constants.ts) |

## Scripts

```bash
npm run build
npm run db:seed
```

## Stack

- Next.js App Router
- Supabase (database + auth + RLS)
- TypeScript, Tailwind CSS v4
