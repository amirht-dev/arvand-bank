import type { Meta, StoryObj } from "@/types/storybook";
import { T } from "@/utils/storybook";
import Chip from ".";
import { CHIP_COLORS, CHIP_VARIANTS } from "./index.constants";
import type { ChipProps } from "./index.types";

const meta = {
  component: Chip,
  args: {
    variant: "fill",
    color: "primary",
    children: "عنوان",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: CHIP_VARIANTS,
      table: {
        type: {
          summary: T.union(...CHIP_VARIANTS),
        },
      },
    },
    color: {
      control: "inline-radio",
      options: CHIP_COLORS,
      table: {
        type: {
          summary: T.union(...CHIP_COLORS),
        },
      },
    },
  },
} satisfies Meta<ChipProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Fill = {
  args: {
    variant: "fill",
  },
} satisfies Story;

export const Outline = {
  args: {
    variant: "outline",
  },
} satisfies Story;

export const Tune = {
  args: {
    variant: "tune",
  },
} satisfies Story;

export const Error = {
  args: {
    color: "error",
  },
} satisfies Story;

export const Success = {
  args: {
    color: "success",
  },
} satisfies Story;

export const Warning = {
  args: {
    color: "warning",
  },
} satisfies Story;

export const Info = {
  args: {
    color: "info",
  },
} satisfies Story;

export const Black = {
  args: {
    color: "black",
  },
} satisfies Story;

export const Primary = {
  args: {
    color: "primary",
  },
} satisfies Story;
