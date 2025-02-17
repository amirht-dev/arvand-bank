import { Bank_Outline } from "@/components/atoms/icons/Buildings/Bank";
import type { Meta, StoryObj } from "@/types/storybook";
import { T } from "@/utils/storybook";
import Button from ".";
import {
  BUTTON_COLORS,
  BUTTON_KINDS,
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
    kind: "normal",
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
          summary: T.union(...BUTTON_COLORS),
        },
      },
    },
    size: {
      control: "inline-radio",
      options: BUTTON_SIZES,
      table: {
        type: {
          summary: T.union(...BUTTON_SIZES),
        },
      },
    },
    variant: {
      control: "inline-radio",
      options: BUTTON_VARIANTS,
      table: {
        type: {
          summary: T.union(...BUTTON_VARIANTS),
        },
      },
    },
    kind: {
      control: "inline-radio",
      options: BUTTON_KINDS,
      table: {
        type: {
          summary: T.union(...BUTTON_KINDS),
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

export const Normal = {
  args: {
    ...Fill.args,
    kind: "normal",
  },
} satisfies Story;

export const Twotone = {
  args: {
    ...Fill.args,
    kind: "twotone",
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
