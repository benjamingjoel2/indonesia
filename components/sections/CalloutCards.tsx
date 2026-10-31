import { site } from "@/data/site";
import { t } from "@/lib/i18n/server";

/** Side "fact" cards next to editorial copy, as on the reference destination pages. */
export function CalloutCards() {
  const items = [
    { label: t("Included"), text: t("Private airport arrival, local SIM and 24/7 support from your specialist.") },
    { label: t("Reply time"), text: t("{reply}, seven days a week.", { reply: t(site.replyPromise) }) },
    { label: t("Pricing"), text: t("Same rates as booking direct. Planning costs you nothing.") },
    { label: t("Coverage"), text: t("Every stay and boat we suggest has been inspected by our team.") },
  ];
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
      {items.map((i) => (
        <li key={i.label} className="rounded-sm border border-sand-300 bg-sand-50 p-5">
          <p className="eyebrow text-lagoon-500">{i.label}</p>
          <p className="mt-2 text-[0.8125rem] leading-relaxed">{i.text}</p>
        </li>
      ))}
    </ul>
  );
}
