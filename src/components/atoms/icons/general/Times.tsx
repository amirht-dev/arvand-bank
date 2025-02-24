import { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const Times_Outline = forwardRef<SVGSVGElement, SVGIconProps>(
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
          d="M18.5297 17.47C18.8227 17.763 18.8227 18.238 18.5297 18.531C18.3837 18.677 18.1917 18.751 17.9997 18.751C17.8077 18.751 17.6158 18.678 17.4698 18.531L11.9997 13.061L6.52975 18.531C6.38375 18.677 6.19175 18.751 5.99975 18.751C5.80775 18.751 5.61575 18.678 5.46975 18.531C5.17675 18.238 5.17675 17.763 5.46975 17.47L10.9398 12L5.46975 6.53005C5.17675 6.23705 5.17675 5.76202 5.46975 5.46902C5.76275 5.17602 6.23775 5.17602 6.53075 5.46902L12.0008 10.939L17.4707 5.46902C17.7637 5.17602 18.2387 5.17602 18.5317 5.46902C18.8247 5.76202 18.8247 6.23705 18.5317 6.53005L13.0617 12L18.5297 17.47Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
Times_Outline.displayName = "Times_Outline";
