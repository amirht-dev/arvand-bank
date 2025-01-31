import { SlottableProps } from "@/types/slottable";
import { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import { ReactNode } from "react";
import { ArrayValues } from "type-fest";
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "./index.constants";

export type ButtonOwnProps = {
  variant?: ArrayValues<typeof BUTTON_VARIANTS>;
  color?: ArrayValues<typeof BUTTON_COLORS>;
  size?: ArrayValues<typeof BUTTON_SIZES>;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
};

export type ButtonProps = SlottableProps<
  ComponentPropsWithoutRefWithProps<"button", ButtonOwnProps>
>;
