import type { Meta, StoryObj } from "@/types/storybook";
import { T } from "@/utils/storybook";
import type { ComponentType } from "react";
import { ProgressLine, ProgressLineIndicator } from ".";
import type { OwnProgressLineIndicatorProps } from "./index.types";

const dirOptions = ["rtl", "ltr"];

const meta = {
  component: ProgressLine as ComponentType,
  subcomponents: { ProgressLineIndicator },
  args: {
    value: 0.5,
    initialVisible: true,
    dir: "ltr",
  },
  argTypes: {
    value: {
      control: {
        type: "number",
        min: 0,
        max: 1,
        step: 0.1,
      },
      table: {
        defaultValue: {
          summary: "0",
        },
      },
    },
    initialVisible: {
      control: "boolean",
      table: {
        defaultValue: {
          summary: "true",
        },
      },
    },
    dir: {
      control: "inline-radio",
      options: dirOptions,
      table: {
        type: {
          summary: T.union(...dirOptions),
        },
        defaultValue: {
          summary: '"ltr"',
        },
      },
    },
  },
  render(args) {
    return (
      <ProgressLine>
        <ProgressLineIndicator {...args} />
      </ProgressLine>
    );
  },
} satisfies Meta<OwnProgressLineIndicatorProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {} satisfies Story;

export const LTR = {
  args: {
    dir: "ltr",
  },
} satisfies Story;

export const RTL = {
  args: {
    dir: "rtl",
  },
} satisfies Story;

export const InitialVisible = {
  args: {
    initialVisible: true,
  },
} satisfies Story;

export const InitialInvisible = {
  args: {
    initialVisible: false,
  },
} satisfies Story;
