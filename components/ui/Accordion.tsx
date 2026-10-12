import type { Faq } from "@/data/types";
import { Icon } from "./Icon";

/** FAQ accordion built on <details> — works without JavaScript. */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-sand-300 border-y border-sand-300">
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-xl [&::-webkit-details-marker]:hidden">
            <span>{f.q}</span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sand-400 transition-transform group-open:rotate-45">
              <Icon name="plus" size={16} />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
