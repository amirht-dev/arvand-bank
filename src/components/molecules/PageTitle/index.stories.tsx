import { ChartLineUp_Outline } from "@/components/atoms/icons/Charts&Diagram/ChartLineUp";
import type { Meta, StoryObj } from "@/types/storybook";
import { T } from "@/utils/storybook";
import { ReactNode } from "react";
import { PageTitle, PageTitleIcon } from ".";

type Props = {
  title: string;
  icon?: ReactNode;
};

const meta = {
  component: PageTitle,
  subcomponents: { PageTitleIcon },
  args: {
    title: "داشبورد",
    icon: false,
  },
  argTypes: {
    title: {
      control: "text",
    },
    icon: {
      control: "boolean",
      mapping: {
        true: <ChartLineUp_Outline />,
      },
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
  },
  render(args) {
    return (
      <PageTitle>
        {!!args.icon && <PageTitleIcon>{args.icon}</PageTitleIcon>}

        <span>{args.title}</span>
      </PageTitle>
    );
  },
} satisfies Meta<Props>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithoutIcon = {} satisfies Story;

export const WithIcon = {
  args: {
    icon: true,
  },
} satisfies Story;
