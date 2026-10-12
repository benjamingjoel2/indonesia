import type { BudgetTier, Slug } from "./types";

/** Region combinations offered in step 2 of the planner. Images come from the linked destination. */
export interface RegionOption {
  id: string;
  label: string;
  text: string;
  imageFrom?: Slug;
}

export const regionOptions: RegionOption[] = [
  { id: "red-centre-reef", label: "Red Centre & the Reef", text: "Uluru at dawn, then the outer Reef by private boat", imageFrom: "uluru" },
  { id: "sydney-reef", label: "Sydney & the Reef", text: "Harbour city style with island time in the Whitsundays", imageFrom: "great-barrier-reef" },
  { id: "south-australia", label: "Kangaroo Island & wine country", text: "Wildlife, coastline and the Barossa's cellar doors", imageFrom: "kangaroo-island" },
  { id: "kimberley-top-end", label: "Kimberley & Top End", text: "Gorges, ancient rock art and remote coast by air", imageFrom: "kimberley" },
  { id: "tasmania", label: "Tasmania", text: "Wilderness walks, Freycinet and serious food", imageFrom: "tasmania" },
  { id: "western-australia", label: "Western Australia", text: "Ningaloo, Margaret River and the Indian Ocean coast", imageFrom: "western-australia" },
  { id: "new-zealand-fiji", label: "New Zealand or Fiji", text: "Add alpine lodges or a private island to your journey", imageFrom: "new-zealand" },
  { id: "not-sure", label: "Not sure yet", text: "Tell us what you enjoy and we'll suggest a route" },
];

export interface BudgetOption {
  id: BudgetTier | "unsure";
  label: string;
  /** Approximate per person per day, AUD. */
  perDay?: number;
  plus?: boolean;
  text: string;
}

export const budgetOptions: BudgetOption[] = [
  {
    id: "value",
    label: "Luxury",
    perDay: 1500,
    text: "Exceptional lodges and boutique hotels, private guiding and seamless transfers. Where most journeys begin.",
  },
  {
    id: "premium",
    label: "Premium luxury",
    perDay: 2500,
    text: "Australia's signature lodges, private touring throughout and scenic flights between regions.",
  },
  {
    id: "ultra",
    label: "Ultra luxury",
    perDay: 4000,
    plus: true,
    text: "Private air charters, exclusive-use lodges and after-hours access to the country's most remarkable places.",
  },
  { id: "unsure", label: "Open, or not sure yet", text: "Your Travel Designer will suggest options at a few levels." },
];

export const contactMethods = [
  { id: "email", label: "Email" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "phone", label: "Telephone" },
] as const;

export const addOnOptions = [
  {
    id: "insurance",
    label: "Travel insurance",
    text: "We'll share details of comprehensive policies suited to remote travel and private flights.",
  },
  {
    id: "intlFlights",
    label: "International flights",
    text: "We can arrange flights to Australia in premium cabins, timed around your journey.",
  },
  {
    id: "domestic",
    label: "Private air charters & domestic flights",
    text: "Scenic and charter flights between regions, so more of your time is spent on the ground.",
  },
] as const;

export const countryCodes = [
  { code: "+1", label: "US / Canada (+1)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+44", label: "United Kingdom (+44)" },
  { code: "+65", label: "Singapore (+65)" },
  { code: "+49", label: "Germany (+49)" },
  { code: "+33", label: "France (+33)" },
  { code: "+31", label: "Netherlands (+31)" },
  { code: "+41", label: "Switzerland (+41)" },
  { code: "+64", label: "New Zealand (+64)" },
  { code: "+852", label: "Hong Kong (+852)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+91", label: "India (+91)" },
  { code: "+81", label: "Japan (+81)" },
];
