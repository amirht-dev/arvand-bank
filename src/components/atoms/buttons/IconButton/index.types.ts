import { SlottableProps } from "@/types/slottable";
import { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import { ArrayValues } from "type-fest";
import { ICON_BUTTON_SIZES } from "./index.constants";

export type IconButtonOwnProps = {
  size?: ArrayValues<typeof ICON_BUTTON_SIZES>;
  badge?: boolean;
};

export type IconButtonProps = SlottableProps<
  ComponentPropsWithoutRefWithProps<"button", IconButtonOwnProps>
>;
