import type { Meta, StoryObj } from "@/types/storybook";
import Card from ".";
import { CardProps } from "./index.types";

const meta = {
  component: Card,
  args: {
    disabled: false,
  },
} satisfies Meta<CardProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Enabled = {} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;
