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
