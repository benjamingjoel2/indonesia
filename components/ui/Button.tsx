import Link from "@/components/i18n/Link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "light" | "outline-light";

/** Pill buttons: filled forest green by default, outlined for secondary actions. */
const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.9375rem] font-semibold leading-none transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 min-h-12";

const variants: Record<Variant, string> = {
  primary: "bg-lagoon-500 text-white hover:bg-jungle-900",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink hover:bg-sand-200",
  light: "bg-paper text-ink hover:bg-sand-200",
  "outline-light": "border border-paper/60 text-paper hover:bg-paper hover:text-ink",
};

export const buttonClass = (variant: Variant = "primary", extra = "") =>
  `${base} ${variants[variant]} ${extra}`;

function Inner({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {arrow && <Icon name="arrowUpRight" size={16} strokeWidth={2} />}
    </>
  );
}

export function Button({
  variant = "primary",
  arrow,
  className = "",
  children,
  ...props
}: ComponentProps<"button"> & { variant?: Variant; arrow?: boolean }) {
  return (
    <button className={buttonClass(variant, className)} {...props}>
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  arrow,
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; arrow?: boolean }) {
  return (
    <Link className={buttonClass(variant, className)} {...props}>
      <Inner arrow={arrow}>{children}</Inner>
    </Link>
  );
}

/** Text link with trailing arrow: "All destinations ↗" */
export function ArrowLink({
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link className={`link-arrow font-semibold ${className}`} {...props}>
      {children}
      <Icon name="arrowUpRight" size={16} strokeWidth={2} />
    </Link>
  );
}
