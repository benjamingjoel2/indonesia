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

## Placeholders to replace before launch

- Brand details, phone, WhatsApp number, email, credentials, badges: `data/site.ts`
- Exchange rates: `data/currencies.ts`
- Images: Unsplash URLs in `/data` files
- Testimonials are marked `placeholder: true`
