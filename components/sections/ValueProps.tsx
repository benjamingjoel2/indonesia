import { home } from "@/data/home";
import { t, tx } from "@/lib/i18n/server";

export function ValueProps() {
  return (
    <section aria-label={t("Why book with us")} className="border-b border-sand-300 bg-paper">
      <ul className="container-edit grid grid-cols-1 divide-sand-300 py-4 sm:grid-cols-2 lg:grid-cols-6 lg:divide-x">
        {tx(home.valueProps).map((v, i) => (
          <li key={v.title} className={`py-6 sm:pr-6 lg:px-6 ${i === 0 ? "lg:pl-0" : ""}`}>
            <p className="font-display text-xl leading-snug">{v.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
