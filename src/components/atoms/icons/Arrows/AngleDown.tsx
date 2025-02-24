import { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const AngleDown_Outline = forwardRef<SVGSVGElement, SVGIconProps>(
  ({ fillPath = "currentColor", ...props }, ref) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
      >
        <path
          d="M12 16.7498C11.808 16.7498 11.616 16.6768 11.47 16.5298L4.46999 9.52981C4.17699 9.23681 4.17699 8.76177 4.46999 8.46877C4.76299 8.17577 5.23803 8.17577 5.53103 8.46877L12.001 14.9387L18.471 8.46877C18.764 8.17577 19.239 8.17577 19.532 8.46877C19.825 8.76177 19.825 9.23681 19.532 9.52981L12.532 16.5298C12.384 16.6768 12.192 16.7498 12 16.7498Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
AngleDown_Outline.displayName = "AngleDown_Outline";
