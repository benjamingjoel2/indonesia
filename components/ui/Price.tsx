"use client";

import { useCurrency } from "@/lib/currency";

/** Renders a USD base price in the visitor's selected currency. */
export function Price({ usd, className }: { usd: number; className?: string }) {
  const { format } = useCurrency();
  return (
    <span className={`tabular-nums ${className ?? ""}`} suppressHydrationWarning>
      {format(usd)}
    </span>
  );
}
