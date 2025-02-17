import { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export type TabsTriggerProps = ComponentPropsWithoutRefWithProps<
  typeof TabsPrimitive.Trigger,
  {
    unstyle?: boolean;
  }
>;
