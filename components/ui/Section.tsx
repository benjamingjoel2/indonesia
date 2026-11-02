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
    dark: "bg-jungle-950 text-paper",
  }[tone];
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${toneClass} py-20 md:py-28 ${className}`}>
      <div className="container-edit">{children}</div>
    </section>
  );
}

/** Heading block: terracotta eyebrow, serif title, intro to the right, optional "All … ↗" link. */
export function SectionHeader({
  id,
  eyebrow,
  heading,
  intro,
  link,
  as = "h2",
  tone = "light",
}: {
  id?: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  link?: { href: string; label: string };
  as?: "h1" | "h2";
  tone?: "light" | "dark";
}) {
  const soft = tone === "dark" ? "text-sand-200" : "text-ink-soft";
  return (
    <div className="mb-10 grid gap-6 md:mb-14 md:grid-cols-[1.3fr_1fr] md:items-end">
      <div>
        {eyebrow && <Eyebrow className={`mb-3 ${tone === "dark" ? "text-sand-300" : ""}`}>{eyebrow}</Eyebrow>}
        <Heading as={as} id={id} size="xl">
          {heading}
        </Heading>
      </div>
      <div className="flex flex-col gap-4 md:items-start">
        {intro && <p className={`max-w-md text-lg leading-relaxed ${soft}`}>{intro}</p>}
        {link && (
          <ArrowLink href={link.href} className="text-[0.9375rem]">
            {link.label}
          </ArrowLink>
        )}
      </div>
    </div>
  );
}
