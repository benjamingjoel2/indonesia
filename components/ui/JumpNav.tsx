"use client";

import { useEffect, useState } from "react";
import { PlanButton } from "./PlanButton";

/** Sticky in-page section navigation with scroll-spy. */
export function JumpNav({ items, cta = "Start planning" }: { items: { id: string; label: string }[]; cta?: string }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => Boolean(e));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -60% 0px" },
    );
    els.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, [items]);

  return (
    <div className="sticky top-16 z-30 border-b border-sand-300 bg-paper/95 backdrop-blur lg:top-[4.5rem]">
      <div className="container-edit flex items-center justify-between gap-4">
        <nav aria-label="On this page" className="-mx-1 overflow-x-auto">
          <ul className="flex whitespace-nowrap">
            {items.map((i) => (
              <li key={i.id}>
                <a
                  href={`#${i.id}`}
                  aria-current={active === i.id ? "true" : undefined}
                  className="inline-block border-b-2 border-transparent px-3 py-4 text-sm text-ink-soft hover:text-ink aria-[current=true]:border-jungle-900 aria-[current=true]:text-ink"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden shrink-0 md:block">
          <PlanButton className="!min-h-9 !py-2 text-sm">{cta}</PlanButton>
        </div>
      </div>
    </div>
  );
}
