import { destinationName } from "@/lib/data";
import { t } from "@/lib/i18n/server";

/** The trip's stops in travel order, as a plain numbered list. */
export function RouteStops({ stops }: { stops: string[] }) {
  return (
    <div className="border-t border-sand-300 pt-6">
      <h3 className="eyebrow text-clay-500">{t("The route")}</h3>
      <ol className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[0.9375rem]">
        {stops.map((s, i) => (
          <li key={s}>
            <span className="mr-1 font-semibold">{i + 1}.</span>
            {destinationName(s)}
          </li>
        ))}
      </ol>
    </div>
  );
}
