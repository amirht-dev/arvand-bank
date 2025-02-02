"use client";

import { forwardRef } from "react";
import { CheckboxProps } from "./index.types";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, ...props }, ref) => {
    return (
      <label className="group flex size-4 overflow-hidden rounded-sm border border-neutral-gray-5 transition-colors has-[input:checked]:border-primary-500 has-[input:checked]:bg-primary-500">
        <input
          {...props}
          checked={checked}
          ref={ref}
          type="checkbox"
          className="peer hidden appearance-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="size-full"
        >
          <path
            ref={(e) => {
              e?.style.setProperty(
                "--path-length",
                e.getTotalLength().toString(),
              );
            }}
            className="group-has-[input:checked]:animate-path-draw-reverse stroke-neutral-white"
            style={{
              strokeDasharray: "var(--path-length)",
            }}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 6 9 17l-5-5"
          />
        </svg>
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";

export default Checkbox;
