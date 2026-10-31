import { destinationName } from "@/lib/data";
import { t } from "@/lib/i18n/server";

/** Stylised route placeholder. TODO: swap for an interactive map (Mapbox / Google Maps). */
export function MapPlaceholder({ stops }: { stops: string[] }) {
  return (
    <div className="relative overflow-hidden rounded-sm border border-sand-300 bg-[radial-gradient(circle_at_30%_40%,var(--color-sand-200),var(--color-sand-100))] p-6">
      <svg viewBox="0 0 400 160" className="h-auto w-full text-lagoon-500" aria-hidden="true">
        <path d="M20 120 C 90 40, 160 150, 230 80 S 340 40, 380 60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 6" />
        {stops.map((_, i) => {
          const x = 20 + (360 / Math.max(stops.length - 1, 1)) * i;
          const y = [120, 80, 95, 70, 60, 80][i % 6];
          return <circle key={i} cx={x} cy={y} r="6" fill="var(--color-jungle-900)" />;
        })}
      </svg>
      <ol className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {stops.map((s, i) => (
          <li key={s}>
            <span className="mr-1 font-medium">{i + 1}.</span>
            {destinationName(s)}
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs text-ink-soft">{t("Route overview, not to scale")}</p>
    </div>
  );
}
