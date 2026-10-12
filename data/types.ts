/**
 * Content model for The Island Edit.
 * Every page is generated from these types, so the /data files can later be
 * swapped for a CMS without touching components.
 * All prices are base USD; the currency switcher converts at render time.
 */

export type Slug = string;
export type USD = number;
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Img {
  src: string;
  alt: string;
  credit?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Seo {
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

/* ---------- Destinations ---------- */

export type RegionGroup = "western" | "eastern";

export type SeasonRating = "best" | "good" | "mixed" | "avoid";

export interface MonthRating {
  month: Month;
  rating: SeasonRating;
  note?: string;
}

export interface Destination {
  slug: Slug;
  name: string;
  /** Short label shown above the name on cards, e.g. "Lesser Sunda Islands". */
  region: string;
  group: RegionGroup;
  topDestination: boolean;
  /** One line used on cards. */
  hook: string;
  /** Longer line used under the H1 on the detail page. */
  tagline: string;
  heroImage: Img;
  gallery: Img[];
  overview: { heading: string; paragraphs: string[] };
  highlights: { title: string; text: string }[];
  bestTime: MonthRating[];
  bestTimeSummary: string;
  gettingThere: string;
  faqs: Faq[];
  seo: Seo;
}

/* ---------- Experiences ---------- */

export interface Experience {
  slug: Slug;
  name: string;
  intro: string;
  heroImage: Img;
  destinations: Slug[];
  highlights: string[];
  faqs: Faq[];
  seo: Seo;
}

/* ---------- Stays ---------- */

export type BudgetTier = "value" | "premium" | "ultra";
export type StayType = "resort" | "villa" | "phinisi" | "eco-lodge" | "boutique";

export interface Stay {
  slug: Slug;
  name: string;
  type: StayType;
  destination: Slug;
  area: string;
  tier: BudgetTier;
  summary: string;
  description: string[];
  heroImage: Img;
  gallery: Img[];
  amenities: string[];
  /** Per person, per night. */
  priceFromUSD: USD;
  featured: boolean;
  seo: Seo;
}

/* ---------- Itineraries ---------- */

export type Meal = "B" | "L" | "D";

export interface ItineraryDay {
  /** Single day or an inclusive range, e.g. [3, 5]. */
  day: number | [number, number];
  title: string;
  body: string;
  makeItYours?: string;
  stay?: Slug;
  meals?: Meal[];
  image?: Img;
}

export interface SeasonalRate {
  label: string;
  from: string; // ISO date
  to: string; // ISO date
  /** Per person, sharing. */
  priceUSD: USD;
}

export interface Itinerary {
  slug: Slug;
  title: string;
  durationDays: number;
  nights: number;
  destinations: Slug[];
  experiences: Slug[];
  budgetTier: BudgetTier;
  heroImage: Img;
  gallery: Img[];
  summary: string;
  /** e.g. "All breakfasts · 6 guided activities · private transfers" */
  inclusionLine: string;
  highlights: string[];
  days: ItineraryDay[];
  included: { stay: string[]; travel: string[]; experiences: string[] };
  excluded: string[];
  /** Per person, sharing. */
  priceFromUSD: USD;
  rates: SeasonalRate[];
  badge?: "Most requested" | "Special offer" | "New";
  featured: boolean;
  seo: Seo;
}

/* ---------- People & proof ---------- */

export interface Testimonial {
  id: string;
  name: string;
  from: string;
  date: string; // ISO
  trip?: Slug;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  source: { label: string; url: string };
  /** Seed reviews are placeholders until real ones are imported. */
  placeholder: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: Img;
  languages: string[];
}

export interface FaqGroup {
  title: string;
  items: Faq[];
}

/* ---------- Currency ---------- */

export type CurrencyCode = "USD" | "EUR" | "GBP" | "AUD" | "SGD" | "IDR";

export interface Currency {
  code: CurrencyCode;
  label: string;
  symbol: string;
  /** Units of this currency per 1 USD. */
  rate: number;
  /** Round displayed amounts to this step (e.g. IDR to the nearest 1,000). */
  roundTo: number;
}

/* ---------- Blog ---------- */

export interface BlogPostMeta {
  slug: Slug;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  heroImage: Img;
  readingMinutes: number;
}
