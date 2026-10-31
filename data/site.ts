import type { NavGroup, NavLink } from "./types";

/**
 * The site's public address. Set NEXT_PUBLIC_SITE_URL to the live domain
 * (https://theislandedit.tourground.com). On Vercel it falls back to
 * the project's production domain, so canonical links always point at the live site.
 */
function siteUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
    "http://localhost:3000";
  return url.replace(/\/$/, "");
}

/**
 * Brand, contact details and navigation.
 * Brand details, address and navigation.
 */
export const site = {
  name: "The Island Edit",
  shortName: "Island Edit",
  /** Public address used for canonical links, the sitemap and social cards (see siteUrl below). */
  url: siteUrl(),
  description:
    "Tailor-made Indonesia journeys, planned end to end by one dedicated travel specialist. Bali, Komodo, Raja Ampat, Java and beyond.",
  blurb:
    "The Island Edit plans private, tailor-made journeys across the Indonesian archipelago. One specialist, from first message to last transfer.",
  email: "theislandedit@tourground.com",
  /** Business address: The Executive Centre, Pacific Century Place, Jakarta. No phone number is published. */
  address: {
    name: "The Executive Centre, Pacific Century Place",
    street: "SCBD Lot 10, Jl. Jend. Sudirman Kav. 52–53",
    locality: "Jakarta",
    postalCode: "12190",
    country: "Indonesia",
    countryCode: "ID",
  },
  tagline: "Private, tailor-made Indonesia, planned by one specialist",
  replyPromise: "Replies in as little as 15 minutes",
  founded: 2011,
  promo:
    "Included on every trip confirmed before 31 March 2027: private airport arrival, a local SIM and 24/7 support from your specialist.",
} as const;

/** The business address as display lines. */
export const addressLines = [site.address.name, site.address.street, `${site.address.locality} ${site.address.postalCode}`, site.address.country];

/* ---------- Navigation ---------- */

export const destinationsMenu: NavGroup[] = [
  {
    title: "Top destinations",
    links: [
      { label: "Bali", href: "/bali" },
      { label: "Komodo & Labuan Bajo", href: "/komodo" },
      { label: "Raja Ampat", href: "/raja-ampat" },
      { label: "Yogyakarta", href: "/yogyakarta" },
      { label: "Lombok & the Gilis", href: "/lombok-gilis" },
      { label: "Mount Bromo", href: "/mount-bromo" },
    ],
  },
  {
    title: "Western Indonesia",
    links: [
      { label: "Java", href: "/java" },
      { label: "Sumatra", href: "/sumatra" },
      { label: "Kalimantan (Borneo)", href: "/kalimantan" },
      { label: "Jakarta", href: "/jakarta" },
      { label: "Lake Toba", href: "/lake-toba" },
    ],
  },
  {
    title: "Eastern Indonesia",
    links: [
      { label: "Flores", href: "/flores" },
      { label: "Sumba", href: "/sumba" },
      { label: "Sulawesi (Toraja)", href: "/sulawesi" },
      { label: "Maluku", href: "/maluku" },
      { label: "Papua", href: "/papua" },
      { label: "Nusa Penida", href: "/nusa-penida" },
    ],
  },
];

export const experiencesMenu: NavLink[] = [
  { label: "Diving & snorkeling", href: "/experiences/diving-snorkeling" },
  { label: "Phinisi liveaboard cruises", href: "/experiences/phinisi-cruises" },
  { label: "Honeymoons", href: "/experiences/honeymoons" },
  { label: "Family trips", href: "/experiences/family-trips" },
  { label: "Volcano treks", href: "/experiences/volcano-treks" },
  { label: "Orangutan trekking", href: "/experiences/orangutan-trekking" },
  { label: "Temples & culture", href: "/experiences/temples-culture" },
  { label: "Surf trips", href: "/experiences/surf-trips" },
  { label: "Wellness & yoga retreats", href: "/experiences/wellness-retreats" },
  { label: "Island hopping", href: "/experiences/island-hopping" },
  { label: "Luxury villas", href: "/experiences/luxury-villas" },
];

export const aboutMenu: NavGroup[] = [
  {
    title: "The company",
    links: [
      { label: "Why travel with us", href: "/why-travel-with-us" },
      { label: "Our story", href: "/about" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Practical",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export type MainNavItem =
  | { label: string; href: string; kind: "link" }
  | { label: string; href: string; kind: "destinations" }
  | { label: string; href: string; kind: "experiences" }
  | { label: string; href: string; kind: "about" };

export const mainNav: MainNavItem[] = [
  { label: "Destinations", href: "/destinations", kind: "destinations" },
  { label: "Trips", href: "/trips", kind: "link" },
  { label: "Experiences", href: "/experiences", kind: "experiences" },
  { label: "Stays", href: "/stays", kind: "link" },
  { label: "About", href: "/about", kind: "about" },
];

/* ---------- Footer ---------- */

export const footerColumns: NavGroup[] = [
  {
    title: "Featured trips",
    links: [
      { label: "Bali, slow and soulful", href: "/trips/bali-slow-and-soulful" },
      { label: "Komodo by phinisi", href: "/trips/komodo-by-phinisi" },
      { label: "Raja Ampat dive escape", href: "/trips/raja-ampat-dive-escape" },
      { label: "Java & Bali overland", href: "/trips/java-bali-overland" },
      { label: "All trips", href: "/trips" },
    ],
  },
  {
    title: "Popular reads",
    links: [
      { label: "When to visit Indonesia", href: "/blog/when-to-visit-indonesia" },
      { label: "Komodo: boat or land?", href: "/blog/komodo-boat-or-land" },
      { label: "Bali beyond the crowds", href: "/blog/bali-beyond-the-crowds" },
      { label: "Raja Ampat, a first-timer's guide", href: "/blog/raja-ampat-first-timers-guide" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Why travel with us", href: "/why-travel-with-us" },
      { label: "Our story", href: "/about" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Plan your trip", href: "/plan-your-trip" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
      { label: "Private & bespoke travel", href: "/private-travel" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Booking terms", href: "/legal/booking-terms" },
  { label: "Privacy policy", href: "/legal/privacy" },
  { label: "Cookie policy", href: "/legal/cookies" },
];
