import { Fragment, type ElementType, type ReactNode } from "react";

type Size = "2xl" | "xl" | "lg" | "md" | "sm";

const sizeClass: Record<Size, string> = {
  "2xl": "text-display-2xl",
  xl: "text-display-xl",
  lg: "text-display-lg",
  md: "text-display-md",
  sm: "text-display-sm",
};

/**
 * Renders "*word*" segments as italic emphasis, so copy in /data controls which
 * word is italicised: emphasize("Where to *go*.") → Where to <em>go</em>.
 */
export function emphasize(text: string): ReactNode {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={i} className="font-display italic font-light">
        {part.slice(1, -1)}
      </em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

/** Plain text version (for <title>, alt text, aria labels). */
export const stripEmphasis = (text: string) => text.replace(/\*/g, "");

export function Heading({
  as: Tag = "h2",
  size = "lg",
  children,
  className = "",
  id,
}: {
  as?: ElementType;
  size?: Size;
  children: string;
  className?: string;
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={`font-display font-normal tracking-[-0.015em] ${sizeClass[size]} ${className}`}
    >
      {emphasize(children)}
    </Tag>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow text-lagoon-500 ${className}`}>{children}</p>;
}
