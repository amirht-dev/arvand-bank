import { SVGIconProps } from "@/types/utils";
import { forwardRef } from "react";

export const MenuHorizontalCircle_Outline = forwardRef<
  SVGSVGElement,
  SVGIconProps
>(({ fillPath = "currentColor", ...props }, ref) => {
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
        d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12C1.25 6.072 6.072 1.25 12 1.25C17.928 1.25 22.75 6.072 22.75 12C22.75 17.928 17.928 22.75 12 22.75ZM12 2.75C6.899 2.75 2.75 6.899 2.75 12C2.75 17.101 6.899 21.25 12 21.25C17.101 21.25 21.25 17.101 21.25 12C21.25 6.899 17.101 2.75 12 2.75ZM9.27002 12C9.27002 11.31 8.71002 10.75 8.02002 10.75H8.01001C7.32001 10.75 6.76501 11.31 6.76501 12C6.76501 12.69 7.32902 13.25 8.02002 13.25C8.71102 13.25 9.27002 12.69 9.27002 12ZM13.27 12C13.27 11.31 12.71 10.75 12.02 10.75H12.01C11.32 10.75 10.765 11.31 10.765 12C10.765 12.69 11.329 13.25 12.02 13.25C12.711 13.25 13.27 12.69 13.27 12ZM17.27 12C17.27 11.31 16.71 10.75 16.02 10.75H16.01C15.32 10.75 14.765 11.31 14.765 12C14.765 12.69 15.329 13.25 16.02 13.25C16.711 13.25 17.27 12.69 17.27 12Z"
        fill={fillPath}
      />
    </svg>
  );
});
MenuHorizontalCircle_Outline.displayName = "MenuHorizontalCircle_Outline";
