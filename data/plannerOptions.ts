import type { BudgetTier, Slug } from "./types";

/** Region combinations offered in step 2 of the planner. Images come from the linked destination. */
export interface RegionOption {
  id: string;
  label: string;
  text: string;
  imageFrom?: Slug;
}

export const regionOptions: RegionOption[] = [
  { id: "bali-nusa-penida", label: "Bali & Nusa Penida", text: "Rice terraces, temples and a dramatic island day trip", imageFrom: "bali" },
  { id: "bali-komodo", label: "Bali & Komodo", text: "Villa time, then a phinisi among the dragons", imageFrom: "komodo" },
  { id: "java-bali-overland", label: "Java & Bali overland", text: "Borobudur, Bromo sunrise and on to Bali", imageFrom: "yogyakarta" },
  { id: "raja-ampat", label: "Raja Ampat diving", text: "The richest reefs on the planet, by lodge or boat", imageFrom: "raja-ampat" },
  { id: "lombok-gilis", label: "Lombok & the Gilis", text: "Car-free islands, turtles and quiet beaches", imageFrom: "lombok-gilis" },
  { id: "sumatra-orangutans", label: "Sumatra & orangutans", text: "Jungle treks in Bukit Lawang and Lake Toba", imageFrom: "sumatra" },
  { id: "flores-sumba", label: "Flores & Sumba", text: "Volcanic lakes, ikat villages and wild coastlines", imageFrom: "sumba" },
  { id: "not-sure", label: "Not sure yet", text: "Tell us what you enjoy and we'll suggest a route" },
];

export interface BudgetOption {
  id: BudgetTier | "unsure";
  label: string;
  /** Approximate per person per day, USD. */
  perDayUSD?: number;
  plus?: boolean;
  text: string;
}

export const budgetOptions: BudgetOption[] = [
  {
    id: "value",
    label: "Value luxury",
    perDayUSD: 350,
    text: "Characterful boutique hotels and eco-lodges, private driver-guides, shared boat transfers.",
  },
  {
    id: "premium",
    label: "Premium luxury",
    perDayUSD: 650,
    text: "Our most popular tier. Pool villas, premium phinisi cabins, private guides throughout.",
  },
  {
    id: "ultra",
    label: "Ultra luxury",
    perDayUSD: 1200,
    plus: true,
    text: "The finest villas and private yacht charters, seaplane and helicopter transfers where they help.",
  },
  { id: "unsure", label: "Open, or not sure yet", text: "Your specialist will suggest options at a few price points." },
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
    text: "We'll send details of the comprehensive policies we recommend, including medical evacuation cover for remote islands.",
  },
  {
    id: "intlFlights",
    label: "International flights",
    text: "We can quote flights to Bali or Jakarta from most hubs and align them with your itinerary.",
  },
  {
    id: "domestic",
    label: "Domestic flights & fast boats",
    text: "Inter-island flights, fast boats and private transfers, all timed to connect.",
  },
] as const;

export const countryCodes = [
  { code: "+1", label: "US / Canada (+1)" },
  { code: "+44", label: "United Kingdom (+44)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+65", label: "Singapore (+65)" },
  { code: "+62", label: "Indonesia (+62)" },
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
