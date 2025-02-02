import { cn } from "@/utils/utils";
import { forwardRef } from "react";
import { LabelProps } from "./index.types";

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ element, children, className, ...props }, ref) => {
    return (
      <label
        {...props}
        ref={ref}
        className={cn("flex items-center gap-2 text-body-5", className)}
      >
        {element}
        {children}
      </label>
    );
  },
);
Label.displayName = "Label";

export default Label;
