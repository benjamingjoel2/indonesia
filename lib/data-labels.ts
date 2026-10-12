import type { Stay } from "@/data/types";

export const stayTypeLabel: Record<Stay["type"], string> = {
  resort: "Resort",
  villa: "Villa",
  phinisi: "Phinisi",
  "eco-lodge": "Eco-lodge",
  boutique: "Boutique hotel",
};
