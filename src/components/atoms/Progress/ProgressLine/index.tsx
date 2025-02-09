"use client";

import { cn } from "@/utils/utils";
import clamp from "lodash/clamp";
import { motion } from "motion/react";
import { forwardRef } from "react";
import type {
  ProgressLineIndicatorProps,
  ProgressLineProps,
} from "./index.types";

const ProgressLine = forwardRef<SVGSVGElement, ProgressLineProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        className={cn("bg-grey-100 h-2.5 w-full rounded-full", className)}
      />
    );
  },
);
ProgressLine.displayName = "ProgressLine";

const ProgressLineIndicator = forwardRef<
  SVGLineElement,
  ProgressLineIndicatorProps
>(
  (
    {
      initialVisible = true,
      value = 0,
      dir = "ltr",
      viewport = { once: true },
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.line
        {...props}
        x1={dir === "ltr" ? "0" : "100%"}
        y1="50%"
        x2={dir === "ltr" ? "100%" : "0"}
        y2="50%"
        ref={ref}
        className={cn(
          className,
          "fill-transparent stroke-primary-500 stroke-[length:10]",
        )}
        strokeWidth="10"
        initial={{
          strokeLinecap: initialVisible ? "round" : "butt",
          ...(typeof props.initial === "object" && props.initial),
          pathLength: 0,
          opacity: 0,
        }}
        whileInView={{
          strokeLinecap: "round",
          ...(typeof props.whileInView === "object" && props.whileInView),
          pathLength: clamp(value, 0, 1),
          opacity: 1,
        }}
        viewport={viewport}
        transition={{
          opacity: {
            duration: 0.1,
          },
          strokeLinecap: { delay: 0.3 },
          pathLength: {
            duration: 1,
            ease: "easeInOut",
            delay: 0.3,
          },
        }}
      />
    );
  },
);
ProgressLineIndicator.displayName = "ProgressLineIndicator";

export { ProgressLine, ProgressLineIndicator };
