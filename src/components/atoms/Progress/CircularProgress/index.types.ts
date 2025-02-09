import type { SVGMotionProps } from "motion/react";
import type { Merge } from "type-fest";

export type CircularProgressIndicatorPropsOwnProps = {
  value?: number;
};

export type CircularProgressIndicatorPropsProps = Merge<
  SVGMotionProps<SVGCircleElement>,
  CircularProgressIndicatorPropsOwnProps
>;

export type CircularProgressValuePropsOwnProps = {
  value?: number;
};

export type CircularProgressValuePropsProps = Merge<
  SVGMotionProps<SVGTextElement>,
  CircularProgressValuePropsOwnProps
>;
