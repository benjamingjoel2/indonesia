"use client";

import { useCurrency } from "@/lib/currency";

/** Renders a base-currency (AUD) price in the visitor's selected currency. */
export function Price({ amount, className }: { amount: number; className?: string }) {
  const { format } = useCurrency();
  return (
    <span className={`tabular-nums ${className ?? ""}`} suppressHydrationWarning>
      {format(amount)}
    </span>
  );
}
