import { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const AngleRight_Outline = forwardRef<SVGSVGElement, SVGIconProps>(
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
          d="M9.00004 20.0003C8.74404 20.0003 8.48801 19.9023 8.29301 19.7073C7.90201 19.3163 7.90201 18.6842 8.29301 18.2933L14.586 12.0003L8.29301 5.70731C7.90201 5.31631 7.90201 4.68425 8.29301 4.29325C8.68401 3.90225 9.31607 3.90225 9.70707 4.29325L16.7071 11.2933C17.0981 11.6842 17.0981 12.3163 16.7071 12.7073L9.70707 19.7073C9.51207 19.9023 9.25604 20.0003 9.00004 20.0003Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
AngleRight_Outline.displayName = "AngleRight_Outline";
