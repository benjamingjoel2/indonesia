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

## Placeholders to replace before launch

- Brand details, phone, WhatsApp number, email, credentials, badges: `data/site.ts`
- Exchange rates: `data/currencies.ts`
- Images: Unsplash URLs in `/data` files
- Testimonials are marked `placeholder: true`
