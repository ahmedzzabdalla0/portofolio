import type { ElementType } from "react";
import type { TypographyVariant, PolymorphicProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const variantConfig: Record<TypographyVariant, { defaultTag: ElementType; className: string }> = {
  h1: {
    defaultTag: "h1",
    className: "font-display text-h1 text-on-surface",
  },
  h2: {
    defaultTag: "h2",
    className: "font-display text-h2 text-on-surface",
  },
  h3: {
    defaultTag: "h3",
    className: "font-display text-h3 text-on-surface",
  },
  "body-lg": {
    defaultTag: "p",
    className: "font-body text-body-lg text-secondary",
  },
  "body-md": {
    defaultTag: "p",
    className: "font-body text-body-md text-on-surface-variant",
  },
  label: {
    defaultTag: "span",
    className: "font-label text-label text-secondary uppercase tracking-widest",
  },
};

type TypographyOwnProps = {
  variant?: TypographyVariant;
};

type TypographyProps<E extends ElementType = "p"> = PolymorphicProps<E, TypographyOwnProps>;

function Typography<E extends ElementType = "p">({
  as,
  variant = "body-md",
  className,
  children,
  ...rest
}: TypographyProps<E>) {
  const config = variantConfig[variant];
  const Component = as ?? config.defaultTag;

  return (
    <Component className={cn(config.className, className)} {...rest}>
      {children}
    </Component>
  );
}

export { Typography };
export type { TypographyProps };
