import type { Meta, StoryObj } from "@/types/storybook";
import { type ComponentType } from "react";
import {
  CircularProgress,
  CircularProgressIndicator,
  CircularProgressValue,
} from ".";
import type { CircularProgressIndicatorPropsOwnProps } from "./index.types";

const meta = {
  component: CircularProgress as ComponentType,
  subcomponents: { CircularProgressIndicator },
  args: {
    value: 0.5,
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
  },
  render(args) {
    return (
      <CircularProgress>
        <CircularProgressIndicator {...args} />
      </CircularProgress>
    );
  },
} satisfies Meta<CircularProgressIndicatorPropsOwnProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story = {} satisfies Story;

export const WithValue = {
  render({ value }) {
    return (
      <CircularProgress>
        <CircularProgressIndicator value={value} />
        <CircularProgressValue value={value} />
      </CircularProgress>
    );
  },
} satisfies Story;
