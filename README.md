# The Island Edit

Marketing site for **The Island Edit**, a tailor-made Indonesia travel company.

- Next.js (App Router) · TypeScript · Tailwind CSS v4
- All content lives in typed files under `/data` (see `data/types.ts`), ready to move to a CMS.
- Prices are stored in USD and converted client-side by the currency switcher (`data/currencies.ts`).

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## SEO

- Live at https://theislandedit.tourground.com (DNS for tourground.com is managed in Vercel).
- `NEXT_PUBLIC_SITE_URL` sets the public address used in canonical links, the sitemap, robots.txt
  and social cards. It is set on the Vercel project.
- Images load directly from Unsplash's CDN via `lib/image-loader.ts` (no Vercel image optimizer).
- Per-page titles, descriptions, canonical URLs and Open Graph/Twitter tags come from `lib/seo.ts`.
- Structured data: TravelAgency + WebSite (home), TouristDestination, TouristTrip, LodgingBusiness,
  Article, FAQPage and BreadcrumbList on the relevant pages.
- `app/opengraph-image.tsx` is the default social sharing card.

## Languages

English lives at the root URLs; French, German and Spanish are pre-rendered under `/fr`, `/de` and `/es`.

- `app/(en)` holds the pages. `app/fr|de|es` are generated wrappers (`node scripts/gen-locale-routes.mjs`) that set the locale and render the English page module.
- Copy goes through `t()` / `tx()` (`lib/i18n/server.ts`) on the server and `useT()` in client components; `lib/data.ts` getters return translated data.
- Translations: `i18n/{fr,de,es}.json` (English string → translation). Blog articles: `content/blog/{fr,de,es}/*.mdx`.
- `node --experimental-strip-types scripts/i18n-extract.mjs` refreshes `i18n/strings.json` and `i18n/client-keys.json`; add `check` to fail on missing translations. `I18N_COLLECT=1 next build` logs any untranslated string to `i18n/missing.txt`.

## Before launch

- Legal pages (`data/pages.ts`) need a lawyer's review.
- Stays in `data/stays.ts` are fictional seed content; replace with real partners (and their permitted photography).
- Exchange rates: `data/currencies.ts`.
- Images: Unsplash URLs in `/data` files, until the owner's photography is supplied.
- Enquiry and planner API routes (`app/api`) log submissions; connect email/CRM delivery.
