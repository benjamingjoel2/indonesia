import { site } from "@/data/site";

/** Side "fact" cards next to editorial copy, as on the reference destination pages. */
export function CalloutCards() {
  const items = [
    { label: "Included", text: "Private airport arrival, local SIM and 24/7 WhatsApp support." },
    { label: "Reply time", text: `${site.replyPromise}, seven days a week.` },
    { label: "Pricing", text: "Same rates as booking direct. Planning costs you nothing." },
    { label: "Coverage", text: "Every stay and boat we suggest has been inspected by our team." },
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
