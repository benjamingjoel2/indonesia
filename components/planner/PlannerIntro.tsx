import { site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

/** Side panel shown next to the planner form (modal and page). */
export function PlannerIntro() {
  return (
    <div className="flex h-full flex-col bg-jungle-900 p-8 text-sand-50 md:p-10">
      <p className="eyebrow text-sand-300">Plan your trip</p>
      <p className="mt-4 font-display text-display-md">
        Begin your <em className="font-light italic">journey</em> with us.
      </p>
      <p className="mt-4 text-sand-200">
        Five short steps. A dedicated specialist replies {site.replyPromise.toLowerCase().replace("replies ", "")}{" "}
        during Bali office hours, with ideas rather than a sales pitch.
      </p>
      <ul className="mt-8 space-y-4 text-sm text-sand-100">
        {[
          "No cost or commitment to receive a proposal",
          "Rates that match booking direct",
          "24/7 WhatsApp support once you travel",
        ].map((t) => (
          <li key={t} className="flex gap-3">
            <Icon name="check" size={18} className="mt-0.5 shrink-0 text-lagoon-300" />
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-8 rounded-sm bg-sand-50/10 p-4 text-sm text-sand-100">
        <span className="eyebrow mb-1 block text-[0.6875rem] text-sand-300">Included</span>
        {site.promo}
      </div>
      <p className="mt-auto pt-8 text-sm text-sand-200">
        Prefer email?{" "}
        <a href={`mailto:${site.email}`} className="text-sand-50 underline underline-offset-4">
          {site.email}
        </a>
      </p>
    </div>
  );
}
