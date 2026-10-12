import type { Currency, CurrencyCode } from "./types";

/**
 * Static indicative rates (units per 1 USD).
 * TODO: replace with a live FX feed (e.g. a daily cron that writes these values).
 */
export const currencies: Currency[] = [
  { code: "USD", label: "US dollar", symbol: "$", rate: 1, roundTo: 1 },
  { code: "EUR", label: "Euro", symbol: "€", rate: 0.92, roundTo: 1 },
  { code: "GBP", label: "British pound", symbol: "£", rate: 0.78, roundTo: 1 },
  { code: "AUD", label: "Australian dollar", symbol: "A$", rate: 1.52, roundTo: 1 },
  { code: "SGD", label: "Singapore dollar", symbol: "S$", rate: 1.34, roundTo: 1 },
  { code: "IDR", label: "Indonesian rupiah", symbol: "Rp", rate: 16200, roundTo: 1000 },
];

export const defaultCurrency: CurrencyCode = "USD";

export const currencyByCode = Object.fromEntries(
  currencies.map((c) => [c.code, c]),
) as Record<CurrencyCode, Currency>;
