"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useT } from "./I18nProvider";

/** next/link that keeps the visitor in their language: internal hrefs get the locale prefix. */
export default function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const { lhref } = useT();
  return <NextLink href={typeof href === "string" ? lhref(href) : href} {...props} />;
}
