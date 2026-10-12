import type { NavGroup, NavLink } from "./types";

/**
 * Brand, contact details and navigation for The Tailor.
 * Anything in [square brackets] is a placeholder to confirm before launch.
 */
export const site = {
  name: "The Tailor",
  shortName: "The Tailor",
  url: "https://thetailor.com",
  tagline: "Australia beyond expectation",
  description:
    "Private, tailor-made luxury journeys across Australia, New Zealand and Fiji, designed end to end by one dedicated Travel Designer.",
  blurb:
    "The Tailor designs private luxury journeys across Australia, New Zealand and Fiji. One Travel Designer plans every detail, before and during your trip.",
  phone: "+61 8 8354 4405",
  phoneHref: "tel:+61883544405",
  /** Digits only for wa.me links. Leave empty to hide WhatsApp buttons. */
  whatsapp: "",
  email: "info@thetailor.com",
  address: ["Level 1A, 262 Marion Road", "Netley SA 5037", "Australia"],
  hours: "Monday to Friday, 8:30am–5:00pm (ACST)",
  credential: "[Award / credential placeholder] · Australian luxury travel specialists",
  replyPromise: "A Travel Designer replies within one business day",
  ctaLabel: "Enquire",
  minimumSpend: "Journeys typically start from A$1,500 per person per day",
  rating: { score: 5.0, count: 0, source: "[Review platform]" },
  founded: 0, // [year founded]
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ] satisfies NavLink[],
  memberships: ["[Industry membership]", "[Accreditation]", "[Award]"],
  affiliates: ["Australia In Style", "The Tailor Touring Co.", "Ultimate Fishing Australia"],
  press: ["Forbes", "Condé Nast Traveler", "Australian Financial Review", "Travel + Leisure"],
  promo:
    "Every journey includes a dedicated Travel Designer, private airport meet-and-greet and support throughout your trip. We take on a limited number of journeys each year.",
} as const;

export const whatsappHref = (text?: string) =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}` : "";

/* ---------- Navigation ---------- */

export const destinationsMenu: NavGroup[] = [
  {
    title: "Iconic Australia",
    links: [
      { label: "Great Barrier Reef", href: "/great-barrier-reef" },
      { label: "Uluru & the Red Centre", href: "/uluru" },
      { label: "Sydney", href: "/sydney" },
      { label: "Kangaroo Island", href: "/kangaroo-island" },
      { label: "The Kimberley", href: "/kimberley" },
      { label: "Tasmania", href: "/tasmania" },
    ],
  },
  {
    title: "States & territories",
    links: [
      { label: "Queensland", href: "/queensland" },
      { label: "New South Wales", href: "/new-south-wales" },
      { label: "Victoria", href: "/victoria" },
      { label: "South Australia", href: "/south-australia" },
      { label: "Western Australia", href: "/western-australia" },
      { label: "Northern Territory", href: "/northern-territory" },
    ],
  },
  {
    title: "Beyond Australia",
    links: [
      { label: "New Zealand", href: "/new-zealand" },
      { label: "Fiji", href: "/fiji" },
    ],
  },
];

export const experiencesMenu: NavLink[] = [
  { label: "Best of Australia", href: "/experiences/best-of-australia" },
  { label: "Enriching Encounters", href: "/experiences/enriching-encounters" },
  { label: "Five-Star Luxury", href: "/experiences/five-star-luxury" },
  { label: "Wildlife & safaris", href: "/experiences/wildlife-safaris" },
  { label: "Reef & islands", href: "/experiences/reef-and-islands" },
  { label: "Outback by air", href: "/experiences/outback-by-air" },
  { label: "Food & wine", href: "/experiences/food-and-wine" },
  { label: "Family journeys", href: "/experiences/family-journeys" },
  { label: "Honeymoons & romance", href: "/experiences/honeymoons" },
  { label: "Fishing expeditions", href: "/experiences/fishing-expeditions" },
];

export const aboutMenu: NavGroup[] = [
  {
    title: "The company",
    links: [
      { label: "Why travel with us", href: "/why-travel-with-us" },
      { label: "Our story", href: "/about" },
      { label: "Meet the team", href: "/about#team" },
      { label: "Sustainability", href: "/sustainability" },
    ],
  },
  {
    title: "From our guests",
    links: [
      { label: "Testimonials", href: "/testimonials" },
      { label: "Stories", href: "/stories" },
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
  { label: "Journeys", href: "/journeys", kind: "link" },
  { label: "Destinations", href: "/destinations", kind: "destinations" },
  { label: "Experiences", href: "/experiences", kind: "experiences" },
  { label: "Accommodation", href: "/accommodation", kind: "link" },
  { label: "About", href: "/about", kind: "about" },
  { label: "Stories", href: "/stories", kind: "link" },
];

/* ---------- Footer ---------- */

export const footerColumns: NavGroup[] = [
  {
    title: "Featured journeys",
    links: [
      { label: "Red Centre to Reef", href: "/journeys/red-centre-to-reef" },
      { label: "Around Australia in 14 Days", href: "/journeys/around-australia-in-14-days" },
      { label: "Southern Safari in Style", href: "/journeys/southern-safari-in-style" },
      { label: "Sydney, Safari, Reef & Shiraz", href: "/journeys/sydney-safari-reef-shiraz" },
      { label: "All journeys", href: "/journeys" },
    ],
  },
  {
    title: "Stories",
    links: [
      { label: "When to visit Australia", href: "/stories/when-to-visit-australia" },
      { label: "The Red Centre, first time", href: "/stories/red-centre-first-timers" },
      { label: "Choosing a Reef island", href: "/stories/choosing-a-great-barrier-reef-island" },
      { label: "Kangaroo Island, beyond the wildlife", href: "/stories/kangaroo-island-beyond-the-wildlife" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Why travel with us", href: "/why-travel-with-us" },
      { label: "Our story", href: "/about" },
      { label: "Meet the team", href: "/about#team" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Enquire", href: "/plan-your-trip" },
      { label: "FAQ", href: "/faq" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Stories", href: "/stories" },
      { label: "Private & bespoke travel", href: "/private-travel" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Terms of use", href: "/legal/terms" },
  { label: "Privacy policy", href: "/legal/privacy" },
  { label: "Cookie policy", href: "/legal/cookies" },
];
