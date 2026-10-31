"use client";

import { useT } from "@/components/i18n/I18nProvider";
import { currencies } from "@/data/currencies";
import type { CurrencyCode } from "@/data/types";
import { useCurrency } from "@/lib/currency";
import { Icon } from "@/components/ui/Icon";

export function CurrencySwitcher({ id, className = "" }: { id: string; className?: string }) {
  const { t } = useT();
  const { code, setCode } = useCurrency();
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <label htmlFor={id} className="sr-only">
        {t("Display prices in")}
      </label>
      <select
        id={id}
        value={code}
        onChange={(e) => setCode(e.target.value as CurrencyCode)}
        className="h-10 cursor-pointer appearance-none rounded-sm border border-transparent bg-transparent pl-2 pr-7 text-sm font-medium hover:border-sand-300 focus-visible:border-sand-300"
      >
        {currencies.map((c) => (
          <option key={c.code} value={c.code}>
            {c.code} · {c.symbol}
          </option>
        ))}
      </select>
      <Icon name="chevronDown" size={14} className="pointer-events-none absolute right-2" />
    </div>
  );
}
