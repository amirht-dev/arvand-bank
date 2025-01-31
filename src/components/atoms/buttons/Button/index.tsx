import { tv } from "@/lib/tv";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { ButtonProps } from "./index.types";

export const buttonVariants = tv({
  slots: {
    root: "btn",
    icon: "btn__icon",
  },
  variants: {
    size: {
      sm: {
        root: "btn--size-sm",
      },
      md: {
        root: "btn--size-md",
      },
      lg: {
        root: "btn--size-lg",
      },
    },
    color: {
      primary: {
        root: "btn--color-primary",
      },
      neutral: {
        root: "btn--color-neutral",
      },
    },
    variant: {
      fill: {
        root: "btn--variant-fill",
      },
      outline: {
        root: "btn--variant-outline",
      },
      text: {
        root: "btn--variant-text",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    variant: "fill",
  },
});

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      prefixIcon,
      suffixIcon,
      size = "md",
      color = "primary",
      variant = "fill",
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const { root, icon } = buttonVariants({ variant, color, size });

    const Comp = asChild ? Slot : "button";

    return (
      <Comp {...props} ref={ref} className={root({ className })}>
        <Slot className={icon()}>{prefixIcon}</Slot>
        <Slottable>{children}</Slottable>
        <Slot className={icon()}>{suffixIcon}</Slot>
      </Comp>
    );
  },
);
Button.displayName = "Button";
export default Button;
