import { tv } from "@/lib/tv";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { forwardRef } from "react";
import { IconButtonProps } from "./index.types";

export const iconButtonVariants = tv({
  slots: {
    root: "icon-btn",
    icon: "icon-btn__icon",
    badge: "icon-btn__badge",
  },
  variants: {
    size: {
      md: {
        root: "icon-btn--size-md",
      },
      lg: {
        root: "icon-btn--size-lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { asChild, size = "md", children, className, badge = false, ...props },
    ref,
  ) => {
    const cns = iconButtonVariants({ size });

    const Comp = asChild ? Slot : "button";

    return (
      <Comp {...props} ref={ref} className={cns.root({ className })}>
        {badge && (
          <svg className={cns.badge()}>
            <circle cx="5px" cy="5px" r="5px" />
            <circle cx="50%" cy="50%" r="25%" />
          </svg>
        )}
        <Slot className={cns.icon()}>
          <Slottable>{children}</Slottable>
        </Slot>
      </Comp>
    );
  },
);
IconButton.displayName = "IconButton";
export default IconButton;
