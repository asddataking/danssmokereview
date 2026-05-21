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
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `CLERK_ADMIN_USER_IDS` | Optional comma-separated Clerk user IDs for the scoreboard editor |

## Clerk + Supabase (scoreboard editor)

1. Create a [Clerk](https://clerk.com) application and add keys to `.env.local`.
2. In Clerk Dashboard → **Integrations → Supabase**, activate the native integration and copy your Clerk domain.
3. In Supabase Dashboard → **Authentication → Sign In / Providers**, add **Clerk** and paste the domain.
4. Run migrations in `supabase/migrations/` (includes `scoreboard_admins` RLS for edits).
5. After you sign in once, copy your Clerk user ID from the dashboard and run in Supabase SQL:

```sql
INSERT INTO scoreboard_admins (clerk_user_id) VALUES ('user_xxxxxxxx');
```

6. Visit [/admin/scoreboard](http://localhost:3000/admin/scoreboard) while signed in to edit scores.

## Edit content

| What | Where |
|------|--------|
| Seed fallback data | [`src/data/seed.ts`](src/data/seed.ts) |
| Live scoreboard (when signed in) | `/admin/scoreboard` |
| Brand colors & theme | [`src/app/globals.css`](src/app/globals.css) |
| Nav & URLs | [`src/lib/constants.ts`](src/lib/constants.ts) |

## Scripts

```bash
npm run build
npm run db:seed      # seed Supabase from seed.ts (service role)
```

## Stack

- Next.js App Router
- Clerk (auth)
- Supabase (database + RLS)
- TypeScript, Tailwind CSS v4
