import type { Currency, CurrencyCode } from "./types";

/**
 * Static indicative rates (units per 1 AUD). Prices in /data are AUD.
 * TODO: replace with a live FX feed (e.g. a daily cron that writes these values).
 */
export const currencies: Currency[] = [
  { code: "AUD", label: "Australian dollar", symbol: "A$", rate: 1, roundTo: 1 },
  { code: "USD", label: "US dollar", symbol: "US$", rate: 0.66, roundTo: 1 },
  { code: "GBP", label: "British pound", symbol: "£", rate: 0.51, roundTo: 1 },
  { code: "EUR", label: "Euro", symbol: "€", rate: 0.6, roundTo: 1 },
  { code: "NZD", label: "New Zealand dollar", symbol: "NZ$", rate: 1.1, roundTo: 1 },
  { code: "SGD", label: "Singapore dollar", symbol: "S$", rate: 0.88, roundTo: 1 },
];

export const defaultCurrency: CurrencyCode = "AUD";

export const currencyByCode = Object.fromEntries(
  currencies.map((c) => [c.code, c]),
) as Record<CurrencyCode, Currency>;
