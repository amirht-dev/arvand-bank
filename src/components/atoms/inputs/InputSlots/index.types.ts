import { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import { ComponentPropsWithoutRef, RefObject } from "react";

export type InputSlotsContextType = {
  getSlotValue: (idx: number) => string;
  setSlotLength: (idx: number, length: number) => void;
  refs: RefObject<HTMLInputElement[]>;
  handleSlotChange: (idx: number, value: string) => void;
  getActiveSlotIdx: () => number;
};

export type InputSlotsProps = ComponentPropsWithoutRefWithProps<
  "div",
  {
    value: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
  }
>;

export type InputSlotsItemProps = ComponentPropsWithoutRefWithProps<
  "input",
  {
    length?: number;
    idx: number;
    groupItem?: boolean;
  }
>;

export type InputSlotsSeparatorProps = ComponentPropsWithoutRef<"span">;

export type InputSlotsGroupProps = ComponentPropsWithoutRef<"div">;
