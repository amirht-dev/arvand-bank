import { tv } from "@/lib/tv";
import { Slot } from "@radix-ui/react-slot";
import React, { forwardRef } from "react";
import { DEFAULT_CHIP_ELEMENT } from "./index.constants";
import { ChipProps } from "./index.types";

const chipVariants = tv({
  base: "py-1.5 px-4 rounded-full text-caption-2 leading-[160%]",
  variants: {
    variant: {
      fill: "",
      outline: "",
      tune: "",
    },
    color: {
      error: "",
      success: "",
      warning: "",
      info: "",
    },
  },
  compoundVariants: [
    {
      color: "error",
      variant: "fill",
      className: "bg-state-error-1 text-neutral-white",
    },
    {
      color: "error",
      variant: "outline",
      className:
        "border border-state-error-1 text-state-error-1 bg-transparent",
    },
    {
      color: "error",
      variant: "tune",
      className: "bg-state-error-2 text-state-error-1",
    },
    {
      color: "success",
      variant: "fill",
      className: "bg-state-success-1 text-neutral-white",
    },
    {
      color: "success",
      variant: "outline",
      className:
        "border border-state-success-1 text-state-success-1 bg-transparent",
    },
    {
      color: "success",
      variant: "tune",
      className: "bg-state-success-2 text-state-success-1",
    },
    {
      color: "warning",
      variant: "fill",
      className: "bg-state-warning-1 text-neutral-white",
    },
    {
      color: "warning",
      variant: "outline",
      className:
        "border border-state-warning-1 text-state-warning-1 bg-transparent",
    },
    {
      color: "warning",
      variant: "tune",
      className: "bg-state-warning-2 text-state-warning-1",
    },
    {
      color: "info",
      variant: "fill",
      className: "bg-state-info-1 text-neutral-white",
    },
    {
      color: "info",
      variant: "outline",
      className: "border border-state-info-1 text-state-info-1 bg-transparent",
    },
    {
      color: "info",
      variant: "tune",
      className: "bg-state-info-2 text-state-info-1",
    },
  ],
  defaultVariants: {
    variant: "fill",
    color: "error",
  },
});

const Chip = forwardRef<
  React.ComponentRef<typeof DEFAULT_CHIP_ELEMENT>,
  ChipProps
>(
  (
    { asChild, variant = "fill", color = "error", className, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : DEFAULT_CHIP_ELEMENT;

    return (
      <Comp
        {...props}
        ref={ref}
        className={chipVariants({ variant, color, className })}
      />
    );
  },
);
Chip.displayName = "Chip";

export default Chip;
