import { tv } from "@/lib/tv";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { ButtonProps } from "./index.types";

export const buttonVariants = tv({
  slots: {
    root: "rounded-lg transition-colors disabled:cursor-not-allowed inline-flex items-center gap-2 justify-center",
    icon: "size-5",
  },
  variants: {
    size: {
      sm: {
        root: "px-4 py-2 text-button-1",
      },
      md: {
        root: "px-4 py-3 text-button-1",
      },
      lg: {
        root: "px-4 py-4 text-button-1",
      },
    },
    color: {
      primary: {},
      neutral: {},
    },
    kind: {
      normal: {},
      twotone: {},
    },
    variant: {
      fill: {
        root: "disabled:bg-neutral-gray-9 disabled:text-neutral-gray-4",
      },
      outline: {
        root: "disabled:border-neutral-gray-4 disabled:text-neutral-gray-4",
      },
      text: {
        root: "disabled:text-neutral-gray-4",
      },
    },
  },
  compoundVariants: [
    {
      color: "primary",
      variant: "fill",
      kind: "normal",
      className: {
        root: "bg-primary-500 text-neutral-white [&:focus:not(:disabled)]:bg-primary-700 [&:hover:not(:disabled)]:bg-primary-600",
      },
    },
    {
      color: "primary",
      variant: "fill",
      kind: "twotone",
      className: {
        root: "bg-primary-50 text-primary-500 [&:focus:not(:disabled)]:bg-primary-200 [&:focus:not(:disabled)]:text-primary-700 [&:hover:not(:disabled)]:bg-primary-100 [&:hover:not(:disabled)]:text-primary-600",
      },
    },
    {
      color: "primary",
      variant: "outline",
      className: {
        root: "border border-primary-500 bg-transparent text-primary-500 [&:focus:not(:disabled)]:border-primary-700 [&:focus:not(:disabled)]:text-primary-700 [&:hover:not(:disabled)]:border-primary-600 [&:hover:not(:disabled)]:text-primary-600",
      },
    },
    {
      color: "primary",
      variant: "text",
      className: {
        root: "bg-transparent text-primary-500 [&:focus:not(:disabled)]:text-primary-700 [&:hover:not(:disabled)]:text-primary-600",
      },
    },
    {
      color: "neutral",
      variant: "fill",
      className: {
        root: "bg-neutral-black text-neutral-white [&:focus:not(:disabled)]:bg-neutral-gray-3 [&:hover:not(:disabled)]:bg-neutral-gray-1",
      },
    },
    {
      color: "neutral",
      variant: "outline",
      className: {
        root: "border border-neutral-gray-1 bg-transparent text-neutral-gray-1 [&:focus:not(:disabled)]:border-neutral-gray-3 [&:focus:not(:disabled)]:text-neutral-gray-3 [&:hover:not(:disabled)]:border-neutral-gray-2 [&:hover:not(:disabled)]:text-neutral-gray-2",
      },
    },
    {
      color: "neutral",
      variant: "text",
      className: {
        root: "bg-transparent text-neutral-gray-1 [&:focus:not(:disabled)]:text-neutral-gray-3 [&:hover:not(:disabled)]:text-neutral-gray-2",
      },
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
    variant: "fill",
    kind: "normal",
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
      kind = "normal",
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const { root, icon } = buttonVariants({ variant, color, size, kind });

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
