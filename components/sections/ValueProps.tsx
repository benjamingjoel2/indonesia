import { home } from "@/data/home";
import { Icon, type IconName } from "@/components/ui/Icon";
import { t, tx } from "@/lib/i18n/server";

/** One line icon per value proposition, in the order of data/home.ts. */
const icons: IconName[] = ["user", "clock", "home", "tag", "phone", "compass"];

export function ValueProps() {
  return (
    <section aria-label={t("Why book with us")} className="bg-paper">
      <ul className="container-edit grid grid-cols-1 gap-x-8 gap-y-7 py-14 sm:grid-cols-2 lg:grid-cols-3 md:py-20">
        {tx(home.valueProps).map((v, i) => (
          <li key={v.title} className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sand-300 bg-sand-50 text-ink">
              <Icon name={icons[i] ?? "check"} size={22} strokeWidth={1.4} />
            </span>
            <div>
              <p className="text-lg font-semibold leading-snug text-ink">{v.title}</p>
              <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-soft">{v.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
