import { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const AngleLeft_Outline = forwardRef<SVGSVGElement, SVGIconProps>(
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
          d="M15 20.0003C14.744 20.0003 14.488 19.9023 14.293 19.7073L7.29301 12.7073C6.90201 12.3163 6.90201 11.6842 7.29301 11.2933L14.293 4.29325C14.684 3.90225 15.3161 3.90225 15.7071 4.29325C16.0981 4.68425 16.0981 5.31631 15.7071 5.70731L9.4141 12.0003L15.7071 18.2933C16.0981 18.6842 16.0981 19.3163 15.7071 19.7073C15.5121 19.9023 15.256 20.0003 15 20.0003Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
AngleLeft_Outline.displayName = "AngleLeft_Outline";
