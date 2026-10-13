import type { ReactNode } from "react";
import { ArrowLink } from "./Button";
import { Eyebrow, Heading } from "./Heading";

export function Section({
  id,
  tone = "paper",
  className = "",
  children,
  labelledBy,
}: {
  id?: string;
  tone?: "paper" | "sand" | "dark";
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  const toneClass = {
    paper: "bg-paper",
    sand: "bg-sand-100",
    dark: "bg-jungle-900 text-sand-50",
  }[tone];
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${toneClass} py-20 md:py-28 ${className}`}>
      <div className="container-edit">{children}</div>
    </section>
  );
}

/** Heading block with optional intro and a trailing "All … →" link. */
export function SectionHeader({
  id,
  eyebrow,
  heading,
  intro,
  link,
  as = "h2",
}: {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  link?: { href: string; label: string };
  as?: "h1" | "h2";
}) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        <Heading as={as} id={id} size="xl">
          {heading}
        </Heading>
        {intro && <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>}
      </div>
      {link && (
        <ArrowLink href={link.href} className="shrink-0 text-[0.8125rem]">
          {link.label}
        </ArrowLink>
      )}
    </div>
  );
}
