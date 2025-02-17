import { cn } from "@/utils/utils";
import { forwardRef } from "react";
import { DividerProps } from "./index.types";

const Divider = forwardRef<SVGSVGElement, DividerProps>(
  ({ className, dashed = false, dashLength = 8, ...props }, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        className={cn("h-0.5 w-full stroke-neutral-gray-6 stroke-1", className)}
      >
        <line
          x1="0"
          x2="100%"
          y1="0"
          y2="0"
          strokeWidth="1px"
          {...(dashed && {
            strokeDasharray: dashLength,
          })}
        />
      </svg>
    );
  },
);
Divider.displayName = "Divider";

export default Divider;
