import type { Meta, StoryObj } from "@/types/storybook";
import Header from ".";

const meta = {
  component: Header,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "Header",
} satisfies Story;
