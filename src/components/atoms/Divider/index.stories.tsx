import type { Meta, StoryObj } from "@/types/storybook";
import Divider from ".";

const meta = {
  component: Divider,
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "Divider",
} satisfies Story;
