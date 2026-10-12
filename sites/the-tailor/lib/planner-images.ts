import { regionOptions } from "@/data/plannerOptions";
import type { RegionImages } from "@/components/planner/PlannerForm";
import { getDestination } from "./data";

/** Resolve planner region cards to destination hero images (server-side). */
export function getRegionImages(): RegionImages {
  return Object.fromEntries(
    regionOptions.map((r) => [r.id, r.imageFrom ? getDestination(r.imageFrom)?.heroImage : undefined]),
  );
}
