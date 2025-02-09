import { cn } from "@/utils/utils";
import { forwardRef } from "react";
import { SegmentProps } from "./index.types";

const Segment = forwardRef<HTMLDivElement, SegmentProps>(
  ({ title, actions, className, children, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          "space-y-6 rounded-2xl border border-neutral-gray-9 p-6",
          className,
        )}
      >
        <div className="flex items-center justify-between">
          <h5 className="text-heading-5 text-neutral-gray-1">{title}</h5>

          {actions && <div className="flex gap-2">{actions}</div>}
        </div>

        {children}
      </div>
    );
  },
);
Segment.displayName = "Segment";

export default Segment;
