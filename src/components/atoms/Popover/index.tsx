"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";

import { cn } from "@/utils/utils";
import { Merge } from "type-fest";
import { Times_Outline } from "../icons/general/Times";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverClose = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close>
>(({ children, ...props }) => (
  <PopoverPrimitive.Close {...props}>
    {children ?? <Times_Outline className="size-[inherit]" />}
  </PopoverPrimitive.Close>
));
PopoverClose.displayName = PopoverPrimitive.Close.displayName;

const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  Merge<
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
    Pick<
      React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Portal>,
      "container"
    >
  >
>(
  (
    { className, align = "center", sideOffset = 4, container, ...props },
    ref,
  ) => (
    <PopoverPrimitive.Portal
      container={
        (container ?? typeof window !== "undefined")
          ? (document.getElementById("popover-root") ?? document.body)
          : undefined
      }
    >
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 rounded-2xl border border-neutral-gray-9 bg-neutral-white p-4 shadow outline-none",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  ),
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger };
