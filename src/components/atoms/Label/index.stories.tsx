/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@/types/storybook";
import { T } from "@/utils/storybook";
import { useState } from "react";
import Label from ".";
import Checkbox from "../Checkbox";
import type { LabelProps } from "./index.types";

const meta = {
  component: Label,
  args: {
    children: "مرا به خاطر بسپار",
    element: undefined,
  },
  argTypes: {
    element: {
      table: {
        type: {
          summary: T.react.ReactNode,
        },
      },
    },
  },
  render(args) {
    const [checked, setChecked] = useState(false);
    return (
      <Label
        {...args}
        element={
          args.element ?? (
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
          )
        }
      />
    );
  },
} satisfies Meta<LabelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Reverse = {
  args: {
    className: "flex-row-reverse",
  },
} satisfies Story;
