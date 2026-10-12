"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { currencies, currencyByCode, defaultCurrency } from "@/data/currencies";
import type { CurrencyCode } from "@/data/types";
import { readStorage, writeStorage } from "./storage";

const STORAGE_KEY = "tie-currency";

interface CurrencyContextValue {
  code: CurrencyCode;
  setCode: (code: CurrencyCode) => void;
  format: (usd: number) => string;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function formatPrice(usd: number, code: CurrencyCode): string {
  const c = currencyByCode[code];
  const amount = Math.round((usd * c.rate) / c.roundTo) * c.roundTo;
  const number = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(amount);
  return code === "IDR" ? `${c.symbol} ${number}` : `${c.symbol}${number}`;
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
    () => ({ code, setCode, format: (usd: number) => formatPrice(usd, code) }),
    [code, setCode],
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used inside <CurrencyProvider>");
  return ctx;
}
