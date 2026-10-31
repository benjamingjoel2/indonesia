import { buildMetadata } from "@/lib/seo";
import { getRegionImages } from "@/lib/planner-images";
import { PlannerForm } from "@/components/planner/PlannerForm";
import { PlannerIntro } from "@/components/planner/PlannerIntro";
import { t } from "@/lib/i18n/server";

export const generateMetadata = () => buildMetadata({
  title: "Plan your trip to Indonesia",
  description:
    "Tell us when, where and how you like to travel. A dedicated Indonesia specialist will design a tailor-made itinerary for you, free of charge.",
  path: "/plan-your-trip",
});

export default function PlanYourTripPage() {
  return (
    <div className="bg-sand-100 py-10 md:py-16">
      <div className="container-edit">
        <h1 className="sr-only">{t("Plan your trip")}</h1>
        <div className="grid overflow-hidden rounded-sm bg-paper shadow-[0_30px_60px_-40px_rgba(15,46,42,0.4)] md:grid-cols-[minmax(0,22rem)_1fr]">
          <PlannerIntro />
          <div className="p-6 sm:p-10 lg:p-14">
            <PlannerForm regionImages={getRegionImages()} titleId="planner-page-title" />
          </div>
        </div>
      </div>
    </div>
  );
}
