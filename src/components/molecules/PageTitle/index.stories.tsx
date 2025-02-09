import { ChartLineUp_Outline } from "@/components/atoms/icons/Charts&Diagram/ChartLineUp";
import type { Meta, StoryObj } from "@/types/storybook";
import PageTitle from ".";
import type { PageTitleProps } from "./index.types";

const meta = {
  component: PageTitle,
} satisfies Meta<PageTitleProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {
  args: {
    icon: <ChartLineUp_Outline />,
    label: "داشبورد",
  },
} satisfies Story;
