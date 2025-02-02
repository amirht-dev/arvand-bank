"use client";

import { motion } from "motion/react";
import { forwardRef, useState } from "react";
import { CheckboxProps } from "./index.types";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, ...props }, ref) => {
    const [pathLength, setPathLength] = useState<number | undefined>(undefined);

    return (
      <label className="flex size-4 overflow-hidden rounded-sm border border-neutral-gray-5 has-[input:checked]:border-primary-500 has-[input:checked]:bg-primary-500">
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
            ref={(el) => {
              setPathLength(el?.getTotalLength());
            }}
            className="stroke-transparent"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 6 9 17l-5-5"
          />
          {pathLength != undefined && checked && (
            <motion.path
              className="stroke-neutral-white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={pathLength}
              initial={{
                strokeDashoffset: -pathLength,
              }}
              animate={{
                strokeDashoffset: 0,
              }}
              d="M20 6 9 17l-5-5"
            />
          )}
        </svg>
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";

export default Checkbox;
