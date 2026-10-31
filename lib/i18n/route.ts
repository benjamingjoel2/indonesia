import type { Metadata, ResolvingMetadata } from "next";
import type { Locale } from "./config";
import { setLocale } from "./server";

/* eslint-disable @typescript-eslint/no-explicit-any */
type PageModule = {
  default: (props: any) => any;
  generateMetadata?: (props: any, parent: ResolvingMetadata) => Metadata | Promise<Metadata>;
  metadata?: Metadata;
  generateStaticParams?: () => any;
};

/**
 * The French, German and Spanish routes re-use the English page modules: each route file
 * sets its locale, then renders the English page, whose strings go through t()/tx().
 */
export function localized(locale: Locale, mod: PageModule) {
  const Page = mod.default;
  return {
    Page: async function LocalizedPage(props: any) {
      setLocale(locale);
      return Page(props);
    },
    generateMetadata: async (props: any, parent: ResolvingMetadata): Promise<Metadata> => {
      setLocale(locale);
      if (mod.generateMetadata) return mod.generateMetadata(props, parent);
      return mod.metadata ?? {};
    },
  };
}
