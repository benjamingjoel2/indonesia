"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { localizeHref, makeT, makeTx, type Locale, type Messages } from "@/lib/i18n/config";

type Ctx = {
  locale: Locale;
  t: (s: string, vars?: Record<string, string | number>) => string;
  tx: <T>(v: T) => T;
  lhref: (href: string) => string;
};

const I18nContext = createContext<Ctx>({
  locale: "en",
  t: makeT(),
  tx: (v) => v,
  lhref: (h) => h,
});

/** Gives client components their locale and the few translations they use. */
export function I18nProvider({ locale, messages, children }: { locale: Locale; messages?: Messages; children: ReactNode }) {
  const value = useMemo<Ctx>(() => {
    const t = makeT(messages);
    return { locale, t, tx: makeTx(t, locale !== "en"), lhref: (h) => localizeHref(h, locale) };
  }, [locale, messages]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useT = () => useContext(I18nContext);
