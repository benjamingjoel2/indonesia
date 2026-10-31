import { z } from "zod";

/** Server-side validation for /api/plan. Kept separate so zod stays out of the client bundle. */
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
    methods: z.array(z.enum(["email", "phone"])).min(1),
    notes: z.string().max(4000),
  }),
});

export type PlannerData = z.infer<typeof plannerSchema>;
