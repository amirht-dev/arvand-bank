import type { Meta, StoryObj } from "@/types/storybook";
import CardNumberInput from ".";

const meta = {
  component: CardNumberInput,
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "CardNumberInput",
} satisfies Story;
