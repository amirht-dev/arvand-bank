"use client";

import { createCTX } from "@/utils/clientHelpers";
import { Slot } from "@radix-ui/react-slot";
import { ComponentRef, forwardRef, useState } from "react";
import { DEFAULT_TOGGLER_TRIGGER_ELEMENT } from "./index.constants";
import {
  TogglerContextType,
  TogglerInvisibleProps,
  TogglerProps,
  TogglerTriggerProps,
  TogglerVisibleProps,
} from "./index.types";

const { context: TogglerContext, hook: useTogglerContext } =
  createCTX<TogglerContextType>("Toggler");

const Toggler = ({ children, defaultVisible = true }: TogglerProps) => {
  const [visible, setVisible] = useState(defaultVisible);
  return (
    <TogglerContext.Provider value={{ visible, setVisible }}>
      {children}
    </TogglerContext.Provider>
  );
};

const TogglerTrigger = forwardRef<
  ComponentRef<typeof DEFAULT_TOGGLER_TRIGGER_ELEMENT>,
  TogglerTriggerProps
>(({ asChild, onClick, ...props }, ref) => {
  const { visible, setVisible } = useTogglerContext();

  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      {...props}
      ref={ref}
      data-state={visible ? "visible" : "invisible"}
      onClick={(e) => {
        onClick?.(e);
        setVisible((p) => !p);
      }}
    />
  );
});
TogglerTrigger.displayName = "TogglerTrigger";

const TogglerVisible = ({ children }: TogglerVisibleProps) => {
  const { visible } = useTogglerContext();

  if (!visible) return;

  return children;
};

const TogglerInvisible = ({ children }: TogglerInvisibleProps) => {
  const { visible } = useTogglerContext();

  if (visible) return;

  return children;
};

export { Toggler, TogglerInvisible, TogglerTrigger, TogglerVisible };
