import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "light" | "outline-light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-[0.9375rem] font-medium leading-none transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 min-h-11";

const variants: Record<Variant, string> = {
  primary: "bg-jungle-900 text-sand-50 hover:bg-jungle-700",
  secondary: "border border-jungle-900 text-jungle-900 hover:bg-jungle-900 hover:text-sand-50",
  ghost: "text-jungle-900 hover:bg-sand-200",
  light: "bg-sand-50 text-jungle-900 hover:bg-sand-200",
  "outline-light": "border border-sand-50/70 text-sand-50 hover:bg-sand-50 hover:text-jungle-900",
};

export const buttonClass = (variant: Variant = "primary", extra = "") =>
  `${base} ${variants[variant]} ${extra}`;

function Inner({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {arrow && <Icon name="arrow" size={16} />}
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

/** Text link with trailing arrow: "All destinations →" */
export function ArrowLink({
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link className={`link-arrow ${className}`} {...props}>
      {children}
      <Icon name="arrow" size={16} />
    </Link>
  );
}
