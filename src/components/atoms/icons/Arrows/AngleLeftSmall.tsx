import { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const AngleLeftSmall_Outline = forwardRef<SVGSVGElement, SVGIconProps>(
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
          d="M14 16.7498C13.808 16.7498 13.616 16.6768 13.47 16.5298L9.46999 12.5298C9.17699 12.2368 9.17699 11.7618 9.46999 11.4688L13.47 7.46877C13.763 7.17577 14.238 7.17577 14.531 7.46877C14.824 7.76177 14.824 8.23681 14.531 8.52981L11.0611 11.9998L14.531 15.4698C14.824 15.7628 14.824 16.2378 14.531 16.5308C14.384 16.6768 14.192 16.7498 14 16.7498Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
AngleLeftSmall_Outline.displayName = "AngleLeftSmall_Outline";
