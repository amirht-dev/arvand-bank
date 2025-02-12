import { cn } from "@/utils/utils";
import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const PageTitle = forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<"h4">
>(({ className, ...props }, ref) => {
  return (
    <h4
      ref={ref}
      {...props}
      className={cn(
        "flex items-center gap-2 text-heading-4 text-primary-700",
        className,
      )}
    />
  );
});
PageTitle.displayName = "PageTitle";

const PageTitleIcon = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => {
  return <Slot ref={ref} className={cn("size-8", className)} {...props} />;
});
PageTitleIcon.displayName = "PageTitleIcon";

export { PageTitle, PageTitleIcon };
