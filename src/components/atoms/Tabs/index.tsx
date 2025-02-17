import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { cn } from "@/utils/utils";
import { TabsTriggerProps } from "./index.types";

const Tabs = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Tabs>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Tabs>
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.Tabs
      dir="rtl"
      {...props}
      ref={ref}
      className={cn("flex flex-col gap-2", className)}
    />
  );
});
Tabs.displayName = TabsPrimitive.Tabs.displayName;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "flex shrink-0 border-b border-neutral-gray-6 bg-neutral-white text-neutral-gray-2",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, unstyle = false, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "whitespace-nowrap transition-colors disabled:pointer-events-none disabled:cursor-not-allowed",
      !unstyle &&
        "inline-flex items-center justify-center px-3 py-2 text-caption-1 disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-primary-500 data-[state=active]:text-primary-500",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    {...props}
    className={cn("flex-1 data-[state=inactive]:hidden", className)}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
