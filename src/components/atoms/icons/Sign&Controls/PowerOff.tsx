import { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const PowerOff_Outline = forwardRef<SVGSVGElement, SVGIconProps>(
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
          d="M12 10.75C11.586 10.75 11.25 10.414 11.25 10V3C11.25 2.586 11.586 2.25 12 2.25C12.414 2.25 12.75 2.586 12.75 3V10C12.75 10.414 12.414 10.75 12 10.75ZM20.75 13C20.75 9.895 19.074 6.9909 16.377 5.4209C16.021 5.2139 15.5611 5.33489 15.3521 5.69189C15.1441 6.04989 15.265 6.50904 15.623 6.71704C17.86 8.01804 19.25 10.425 19.25 12.999C19.25 16.997 15.998 20.249 12 20.249C8.002 20.249 4.75 16.997 4.75 12.999C4.75 10.426 6.13995 8.01904 8.37695 6.71704C8.73495 6.50904 8.85595 6.04989 8.64795 5.69189C8.43995 5.33389 7.98105 5.2129 7.62305 5.4209C4.92605 6.9899 3.25 9.894 3.25 13C3.25 17.825 7.175 21.75 12 21.75C16.825 21.75 20.75 17.825 20.75 13Z"
          fill={fillPath}
        />
      </svg>
    );
  },
);
PowerOff_Outline.displayName = "PowerOff_Outline";
