import type { Meta, StoryObj } from "@/types/storybook";
import Divider from ".";
import { DividerProps } from "./index.types";
import { T } from "@/utils/storybook";

const meta = {
  component: Divider,
  argTypes: {
    dashed: {
      control: "boolean",
    },
    dashLength: {
      control: "range",
      if: {
        arg: "dashed",
      },
      table: {
        type: {
          summary: T.primitive.number,
        },
      },
    },
  },
  args: {
    dashed: false,
    dashLength: 8,
  },
} satisfies Meta<DividerProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Solid = {
  args: {
    dashed: false,
  },
} satisfies Story;

export const Dashed = {
  args: {
    dashed: true,
  },
} satisfies Story;
