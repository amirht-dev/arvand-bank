/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@/types/storybook";
import { useArgs } from "@storybook/preview-api";
import { fn } from "@storybook/test";
import Checkbox from ".";
import type { CheckboxProps } from "./index.types";

const meta = {
  component: Checkbox,
  args: {
    checked: false,
    onChange: fn(),
  },
  render(args) {
    const [{ checked }, updateArgs] = useArgs<CheckboxProps>();
    return (
      <Checkbox
        {...args}
        checked={checked ?? args.checked}
        onChange={(e) => {
          args.onChange?.(e);
          updateArgs({ checked: e.target.checked });
        }}
      />
    );
  },
} satisfies Meta<CheckboxProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const UnChecked = {
  args: {
    checked: false,
  },
} satisfies Story;

export const Checked = {
  args: {
    checked: true,
  },
} satisfies Story;
