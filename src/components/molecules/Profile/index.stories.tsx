import type { Meta, StoryObj } from "@/types/storybook";
import Profile from ".";

const meta = {
  component: Profile,
  tags: ["!autodocs"],
  decorators: [(Story) => <div className="ms-auto w-fit">{Story()}</div>],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  name: "Profile",
} satisfies Story;
