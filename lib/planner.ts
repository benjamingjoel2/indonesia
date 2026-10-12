import { z } from "zod";

/** Shared planner model: used by the client form and validated again in /api/plan. */
export const plannerSchema = z.object({
  when: z.object({
    arrival: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    nights: z.number().int().min(1).max(50),
    dateType: z.enum(["exact", "approximate"]),
    travellerType: z.enum(["first", "experienced"]),
  }),
  where: z.object({
    regions: z.array(z.string()).min(1),
    specifics: z.string().max(2000),
  }),
  budget: z.enum(["value", "premium", "ultra", "unsure"]),
  who: z.object({
    adults: z.number().int().min(1).max(10),
    children: z.number().int().min(0).max(10),
    childAges: z.array(z.number().int().min(0).max(17)),
    addOns: z.array(z.enum(["insurance", "intlFlights", "domestic"])),
  }),
  contact: z.object({
    name: z.string().min(2).max(120),
    email: z.string().email(),
    phoneCountry: z.string().max(6),
    phone: z.string().max(20),
    methods: z.array(z.enum(["email", "whatsapp", "phone"])).min(1),
    notes: z.string().max(4000),
  }),
});

export type PlannerData = z.infer<typeof plannerSchema>;

/** Form state allows "not chosen yet" values the schema rejects. */
export interface PlannerDraft {
  when: { arrival: string; nights: number; dateType: "exact" | "approximate"; travellerType: "" | "first" | "experienced" };
  where: { regions: string[]; specifics: string };
  budget: "" | PlannerData["budget"];
  who: { adults: number; children: number; childAges: (number | null)[]; addOns: PlannerData["who"]["addOns"] };
  contact: PlannerData["contact"];
}

export const emptyDraft: PlannerDraft = {
  when: { arrival: "", nights: 10, dateType: "approximate", travellerType: "" },
  where: { regions: [], specifics: "" },
  budget: "",
  who: { adults: 2, children: 0, childAges: [], addOns: [] },
  contact: { name: "", email: "", phoneCountry: "+44", phone: "", methods: ["email"], notes: "" },
};

export const plannerSteps = ["When", "Where", "Budget", "Who", "Contact"] as const;

export type Errors = Record<string, string>;

const todayISO = () => new Date().toISOString().slice(0, 10);

/** Validate one step (0-based). Returns field-keyed messages. */
export function validateStep(step: number, d: PlannerDraft): Errors {
  const e: Errors = {};
  if (step === 0) {
    if (!d.when.arrival) e.arrival = "Choose a preferred arrival date.";
    else if (d.when.arrival < todayISO()) e.arrival = "Arrival date must be in the future.";
    else if (d.when.arrival > "2028-12-31") e.arrival = "We're currently planning trips up to the end of 2028.";
    if (!(d.when.nights >= 1 && d.when.nights <= 50)) e.nights = "Choose between 1 and 50 nights.";
    if (!d.when.travellerType) e.travellerType = "Let us know if this is your first visit.";
  }
  if (step === 1) {
    if (d.where.regions.length === 0) e.regions = "Pick at least one option, or choose “Not sure yet”.";
  }
  if (step === 2) {
    if (!d.budget) e.budget = "Choose a budget level, or “not sure yet”.";
  }
  if (step === 3) {
    if (d.who.adults < 1) e.adults = "At least one adult is required.";
    d.who.childAges.forEach((age, i) => {
      if (age === null) e[`childAge${i}`] = `Add the age of child ${i + 1}.`;
    });
  }
  if (step === 4) {
    if (d.contact.name.trim().length < 2) e.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.contact.email)) e.email = "Enter a valid email address.";
    const digits = d.contact.phone.replace(/\D/g, "");
    const needsPhone = d.contact.methods.some((m) => m === "whatsapp" || m === "phone");
    if (needsPhone && (digits.length < 6 || digits.length > 15))
      e.phone = "Add a phone number so we can reach you on WhatsApp or by phone.";
    else if (digits && (digits.length < 6 || digits.length > 15)) e.phone = "Check the phone number.";
    if (d.contact.methods.length === 0) e.methods = "Choose at least one way to reach you.";
  }
  return e;
}

export function toPayload(d: PlannerDraft): PlannerData {
  return plannerSchema.parse({
    ...d,
    when: { ...d.when },
    who: { ...d.who, childAges: d.who.childAges.map((a) => a ?? 0) },
  });
}
