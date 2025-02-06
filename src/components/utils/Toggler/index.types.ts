import { SlottableProps } from "@/types/slottable";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { DEFAULT_TOGGLER_TRIGGER_ELEMENT } from "./index.constants";

export type TogglerContextType = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TogglerProps = PropsWithChildren<{
  defaultVisible?: boolean;
}>;

export type TogglerTriggerProps = SlottableProps<
  ComponentPropsWithoutRef<typeof DEFAULT_TOGGLER_TRIGGER_ELEMENT>
>;

export type TogglerVisibleProps = PropsWithChildren;

export type TogglerInvisibleProps = PropsWithChildren;
