# The Tailor

Marketing site for **The Tailor** (thetailor.com): private, tailor-made luxury journeys across Australia, New Zealand and Fiji.

Built from the same codebase as The Island Edit (repo root) and kept as an independent Next.js app in this folder.

- Next.js (App Router) · TypeScript · Tailwind CSS v4
- All content lives in typed files under `data/` (see `data/types.ts`), ready to move to a CMS.
- Prices are stored in **AUD** and converted client-side by the currency switcher (`data/currencies.ts`).

## Develop

```bash
cd sites/the-tailor
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Before launch

- Search engines are blocked by default. Set `NEXT_PUBLIC_ALLOW_INDEXING=1` on the production deployment to allow indexing.
- Confirm brand details, credentials, memberships and ABN in `data/site.ts`; add the official logo in `components/layout/Logo.tsx`.
- Lodge prices in `data/stays.ts` are indicative and should be confirmed with each property.
- Testimonials are placeholders (`placeholder: true`), and team members other than the founder are placeholders.
- Images are Unsplash placeholders; replace with The Tailor's own photography.
- Exchange rates in `data/currencies.ts` are static.
