import { Bank_Outline } from "@/components/atoms/icons/Buildings/Bank";
import type { Meta, StoryObj } from "@/types/storybook";
import Button from ".";
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "./index.constants";
import { ButtonProps } from "./index.types";

const meta = {
  component: Button,
  args: {
    color: "primary",
    variant: "fill",
    size: "md",
    children: "عنوان دکمه",
    prefixIcon: false,
    suffixIcon: false,
  },
  argTypes: {
    prefixIcon: {
      control: "boolean",
      mapping: {
        true: <Bank_Outline />,
      },
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    suffixIcon: {
      control: "boolean",
      mapping: {
        true: <Bank_Outline />,
      },
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    color: {
      control: "inline-radio",
      options: BUTTON_COLORS,
      table: {
        type: {
          summary: BUTTON_COLORS.map((i) => `"${i}"`).join(" | "),
        },
      },
    },
    size: {
      control: "inline-radio",
      options: BUTTON_SIZES,
      table: {
        type: {
          summary: BUTTON_SIZES.map((i) => `"${i}"`).join(" | "),
        },
      },
    },
    variant: {
      control: "inline-radio",
      options: BUTTON_VARIANTS,
      table: {
        type: {
          summary: BUTTON_VARIANTS.map((i) => `"${i}"`).join(" | "),
        },
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Small = {
  args: {
    size: "sm",
  },
} satisfies Story;

export const Medium = {
  args: {
    size: "md",
  },
} satisfies Story;

export const Large = {
  args: {
    size: "lg",
  },
} satisfies Story;

export const WithIcons = {
  args: {
    ...Medium.args,
    prefixIcon: true,
    suffixIcon: true,
  },
} satisfies Story;

export const Fill = {
  args: {
    ...WithIcons.args,
    variant: "fill",
  },
} satisfies Story;

export const Outline = {
  args: {
    ...WithIcons.args,
    variant: "outline",
  },
} satisfies Story;

export const Text = {
  args: {
    ...WithIcons.args,
    variant: "text",
  },
} satisfies Story;

export const Primary = {
  args: {
    ...Fill.args,
    color: "primary",
  },
} satisfies Story;

export const Neutral = {
  args: {
    ...Fill.args,
    color: "neutral",
  },
} satisfies Story;

export const Disabled = {
  args: {
    ...Fill.args,
    disabled: true,
  },
} satisfies Story;
