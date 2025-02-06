import { tv } from "@/lib/tv";
import { Slot } from "@radix-ui/react-slot";
import React, { forwardRef } from "react";
import { DEFAULT_CHIP_ELEMENT } from "./index.constants";
import { ChipProps } from "./index.types";

const chipVariants = tv({
  base: "py-1.5 px-4 rounded-full text-caption-2 leading-[160%] w-fit",
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
      black: "",
      primary: "",
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
    {
      color: "black",
      variant: "fill",
      className: "bg-neutral-black text-neutral-white",
    },
    {
      color: "black",
      variant: "outline",
      className:
        "border border-neutral-black text-neutral-black bg-transparent",
    },
    {
      color: "black",
      variant: "tune",
      className: "bg-neutral-gray-9 text-neutral-black",
    },
    {
      color: "primary",
      variant: "fill",
      className: "bg-primary-500 text-neutral-white",
    },
    {
      color: "primary",
      variant: "outline",
      className: "border border-primary-500 text-primary-500 bg-transparent",
    },
    {
      color: "primary",
      variant: "tune",
      className: "bg-primary-50 text-primary-600",
    },
  ],
  defaultVariants: {
    variant: "fill",
    color: "primary",
  },
});

const Chip = forwardRef<
  React.ComponentRef<typeof DEFAULT_CHIP_ELEMENT>,
  ChipProps
>(
  (
    { asChild, variant = "fill", color = "primary", className, ...props },
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
