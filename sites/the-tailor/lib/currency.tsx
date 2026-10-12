"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { currencies, currencyByCode, defaultCurrency } from "@/data/currencies";
import type { CurrencyCode } from "@/data/types";
import { readStorage, writeStorage } from "./storage";

const STORAGE_KEY = "tailor-currency";

interface CurrencyContextValue {
  code: CurrencyCode;
  setCode: (code: CurrencyCode) => void;
  format: (amount: number) => string;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

/** Convert a base-currency (AUD) amount and format it in `code`. */
export function formatPrice(base: number, code: CurrencyCode): string {
  const c = currencyByCode[code];
  const amount = Math.round((base * c.rate) / c.roundTo) * c.roundTo;
  const number = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(amount);
  return `${c.symbol}${number}`;
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [code, setCodeState] = useState<CurrencyCode>(defaultCurrency);

  useEffect(() => {
    const saved = readStorage<CurrencyCode>(STORAGE_KEY);
    if (saved && currencies.some((c) => c.code === saved)) setCodeState(saved);
  }, []);

  const setCode = useCallback((next: CurrencyCode) => {
    setCodeState(next);
    writeStorage(STORAGE_KEY, next);
  }, []);

  const value = useMemo(
    () => ({ code, setCode, format: (amount: number) => formatPrice(amount, code) }),
    [code, setCode],
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside <CurrencyProvider>");
  return ctx;
}
