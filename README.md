# Turançiftçi Law Firm Website (Local Prototype)

Astro + Tailwind + Drizzle + SQLite (libsql file driver) tabanli cok dilli hukuk burosu web sitesi.

## Stack
- Astro (SSR, View Transitions)
- Tailwind CSS
- Drizzle ORM + SQLite (`@libsql/client`)
- Zod validation
- Vitest + Playwright

## Pages
- `/tr`, `/en`, `/es`
- `/{lang}/practice-areas/tax-law`
- `/{lang}/practice-areas/corporate-law`
- `/{lang}/practice-areas/immigration-law`
- `/{lang}/about`
- `/{lang}/contact`
- `/{lang}/kvkk`, `/{lang}/privacy`, `/{lang}/cookies`
- `/admin/login`, `/admin/messages`

## API Endpoints
- `POST /api/contact/submit`
- `POST /api/admin/login`
- `POST /api/admin/logout`
- `POST /api/admin/messages/:id/status`

## Local Setup
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Copy env:
   ```bash
   cp .env.example .env
   ```
3. Run migrations:
   ```bash
   pnpm db:migrate
   ```
4. Seed admin user:
   ```bash
   pnpm db:seed
   ```
5. Start dev server:
   ```bash
   pnpm dev
   ```

## Test Commands
- Unit + integration: `pnpm test`
- Type check: `pnpm check`
- E2E: `pnpm test:e2e`

## Notes
- This is a local-first prototype. Production deployment and infrastructure are intentionally deferred.
- Office/contact constants are placeholders in `src/content/site.ts`.
