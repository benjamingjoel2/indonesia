import type { MonthRating, SeasonRating } from "@/data/types";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const full = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const style: Record<SeasonRating, { label: string; cls: string }> = {
  best: { label: "Best", cls: "bg-jungle-900 text-sand-50" },
  good: { label: "Good", cls: "bg-lagoon-500 text-white" },
  mixed: { label: "Mixed", cls: "bg-sand-300 text-ink" },
  avoid: { label: "Avoid", cls: "bg-paper text-ink-soft border border-dashed border-sand-400" },
};

export function MonthGrid({ ratings }: { ratings: MonthRating[] }) {
  const sorted = [...ratings].sort((a, b) => a.month - b.month);
  return (
    <div>
      <ol className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12">
        {sorted.map((r) => (
          <li
            key={r.month}
            className={`flex flex-col justify-between rounded-sm p-3 ${style[r.rating].cls}`}
            title={r.note}
          >
            <span className="text-sm font-medium">
              <abbr title={full[r.month - 1]} className="no-underline">
                {months[r.month - 1]}
              </abbr>
            </span>
            <span className="mt-6 text-xs opacity-90">{style[r.rating].label}</span>
          </li>
        ))}
      </ol>
      {sorted.some((r) => r.note) && (
        <ul className="mt-4 space-y-1 text-sm text-ink-soft">
          {sorted
            .filter((r) => r.note)
            .map((r) => (
              <li key={r.month}>
                <span className="font-medium text-ink">{full[r.month - 1]}:</span> {r.note}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
