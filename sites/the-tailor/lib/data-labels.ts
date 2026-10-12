import type { Stay } from "@/data/types";

export const stayTypeLabel: Record<Stay["type"], string> = {
  lodge: "Luxury lodge",
  "island-resort": "Island resort",
  "safari-camp": "Safari camp",
  boutique: "Boutique hotel",
  retreat: "Wellness retreat",
};
