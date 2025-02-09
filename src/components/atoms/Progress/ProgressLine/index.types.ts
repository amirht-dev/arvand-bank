import type { SVGMotionProps } from "motion/react";
import type { ComponentPropsWithoutRef } from "react";
import type { Merge } from "type-fest";

export type ProgressLineProps = ComponentPropsWithoutRef<"svg">;

export type OwnProgressLineIndicatorProps = {
  initialVisible?: boolean;
  dir?: "ltr" | "rtl";
  value?: number;
};

export type ProgressLineIndicatorProps = Merge<
  SVGMotionProps<SVGLineElement>,
  OwnProgressLineIndicatorProps
>;
