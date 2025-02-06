import { SlottableProps } from "@/types/slottable";
import { ComponentPropsWithoutRefWithProps } from "@/types/utils";
import { ArrayValues } from "type-fest";
import {
  CHIP_COLORS,
  CHIP_VARIANTS,
  DEFAULT_CHIP_ELEMENT,
} from "./index.constants";

export type ChipProps = SlottableProps<
  ComponentPropsWithoutRefWithProps<
    typeof DEFAULT_CHIP_ELEMENT,
    {
      variant?: ArrayValues<typeof CHIP_VARIANTS>;
      color?: ArrayValues<typeof CHIP_COLORS>;
    }
  >
>;
