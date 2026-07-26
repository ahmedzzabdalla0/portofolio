import {
  type ComponentPropsWithRef,
  type ElementType,
  forwardRef,
} from "react";
import type { ButtonVariant, ButtonSize, PolymorphicProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-container text-on-primary font-label text-label uppercase tracking-widest hover:bg-primary transition-colors duration-250",
  secondary:
    "border border-subtle text-on-surface font-label text-label uppercase tracking-widest hover:bg-white/[0.03] transition-colors duration-250",
  ghost:
    "text-primary-container font-label text-label uppercase tracking-widest hover:text-primary transition-colors duration-250",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

type ButtonOwnProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFullWidth?: boolean;
};

type ButtonProps<E extends ElementType = "button"> = PolymorphicProps<E, ButtonOwnProps>;

type PolymorphicButton = <E extends ElementType = "button">(
  props: ButtonProps<E> & { ref?: ComponentPropsWithRef<E>["ref"] },
) => React.ReactElement | null;

function ButtonImpl(
  { as, variant = "primary", size = "md", isFullWidth = false, className, children, ...rest }: ButtonProps<ElementType>,
  ref: React.Ref<Element | null>,
) {
  const Component = (as ?? "button") as ElementType;

  return (
    <Component
      ref={ref as never}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-label cursor-pointer transition-all duration-250 disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        isFullWidth && "w-full",
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

const Button = forwardRef(ButtonImpl) as unknown as PolymorphicButton & {
  displayName?: string;
};

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
