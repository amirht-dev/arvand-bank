import { Slot } from "@radix-ui/react-slot";
import { MoreHorizontal } from "lucide-react";
import * as React from "react";

import { SlottableProps } from "@/types/slottable";
import { cn } from "@/utils/utils";
import { AngleLeftSmall_Outline } from "../icons/Arrows/AngleLeftSmall";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-2 break-words text-caption-2 text-neutral-gray-1",
      className,
    )}
    {...props}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, children, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("group inline-flex items-center gap-2", className)}
    {...props}
  >
    {children}
  </li>
));
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2 text-neutral-gray-1 transition-colors group-hover:text-primary-500",
        className,
      )}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbIcon = React.forwardRef<
  HTMLSpanElement,
  SlottableProps<React.ComponentPropsWithoutRef<"span">>
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      ref={ref}
      className={cn(
        "size-6 text-neutral-gray-3 transition-colors group-hover:text-primary-500",
        className,
      )}
      {...props}
    />
  );
});
BreadcrumbIcon.displayName = "BreadcrumbIcon";

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("inline-flex gap-2 font-normal text-primary-500", className)}
    {...props}
  />
));
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
  children,
  ...props
}: React.ComponentProps<"li">) => (
  <li role="presentation" aria-hidden="true" {...props}>
    {children ?? (
      <AngleLeftSmall_Outline className="size-6 text-neutral-gray-6" />
    )}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex size-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
