import { cn } from "@/utils/utils";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const Divider = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn("h-px bg-neutral-gray-9", className)}
      />
    );
  },
);
Divider.displayName = "Divider";

export default Divider;
