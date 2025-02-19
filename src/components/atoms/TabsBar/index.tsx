import { cn } from "@/utils/utils";
import * as React from "react";
import { forwardRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Tabs";

const TabsBarList = forwardRef<
  React.ComponentRef<typeof TabsList>,
  React.ComponentPropsWithoutRef<typeof TabsList>
>(({ className, ...props }, ref) => (
  <TabsList
    {...props}
    ref={ref}
    className={cn("flex items-center gap-4 border-b-0", className)}
  />
));
TabsBarList.displayName = TabsList.displayName;

const TabsBarButton = forwardRef<
  React.ComponentRef<typeof TabsTrigger>,
  React.ComponentPropsWithoutRef<typeof TabsTrigger>
>(({ className, ...props }, ref) => (
  <TabsTrigger
    {...props}
    ref={ref}
    unstyle
    className={cn(
      "flex items-center gap-2 rounded-lg bg-primary-50 p-3 text-body-5 text-primary-700 hover:text-primary-600 [&>svg]:size-5",
      "data-[state=active]:bg-primary-600 data-[state=active]:text-neutral-white",
      "disabled:bg-neutral-gray-9 disabled:text-neutral-gray-4",
      className,
    )}
  />
));
TabsBarButton.displayName = TabsTrigger.displayName;

export {
  Tabs as TabsBar,
  TabsBarButton,
  TabsContent as TabsBarContent,
  TabsBarList,
};
