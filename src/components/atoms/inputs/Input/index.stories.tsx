/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from "@/types/storybook";
import { TYPES } from "@/utils/storybook";
import { useArgs } from "@storybook/preview-api";
import { fn } from "@storybook/test";
import Input, {
  InputContainer,
  InputDescription,
  InputElement,
  InputErrorMessage,
  InputIcon,
  Input as InputRoot,
} from ".";
import { Bank_Outline } from "../../icons/Buildings/Bank";
import { INPUT_SiZES } from "./index.constants";
import { InputProps } from "./index.types";

const meta = {
  component: Input,
  subcomponents: {
    InputRoot,
    InputElement,
    InputContainer,
    InputErrorMessage,
    InputDescription,
    InputIcon,
  },
  argTypes: {
    onChange: {
      control: false,
      table: {
        category: "event",
        type: {
          summary: TYPES.undefinable(
            TYPES.react.events.ChangeEventHandler(
              TYPES.react.elements.HTMLInputElement,
            ),
          ),
        },
      },
    },
    icon: {
      control: "boolean",
      mapping: {
        true: <Bank_Outline />,
      },
      table: {
        type: {
          summary: TYPES.react.ReactNode,
        },
      },
    },
    size: {
      control: "inline-radio",
      options: INPUT_SiZES,
      table: {
        type: {
          summary: TYPES.union(...INPUT_SiZES),
        },
      },
    },
    error: {
      control: "boolean",
    },
    description: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    value: "",
    onChange: fn(),
    size: "md",
    error: false,
    disabled: false,
    placeholder: "جستجو",
    icon: false,
  },
  render(args) {
    const [{ value }, updateArgs] = useArgs<InputProps>();
    return (
      <Input
        {...args}
        value={value ?? args.value}
        onChange={(e) => {
          args.onChange?.(e);
          updateArgs({ value: e.target.value });
        }}
      />
    );
  },
} satisfies Meta<InputProps>;

export default meta;

type Story<T = typeof meta> = StoryObj<T>;

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

export const WithIcon = {
  args: {
    icon: true,
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;

export const Error = {
  args: {
    error: true,
  },
} satisfies Story;

export const WithErrorMessage = {
  args: {
    error: "اطلاعات به درستی وارد نشده است",
  },
} satisfies Story;

export const WithDescription = {
  args: {
    description: "لورم ایپسوم متن ساختگی با تولید سادگی",
  },
} satisfies Story;

export const CompositionPattern = {
  args: {
    icon: true,
  },
  render(args) {
    const [{ value }, updateArgs] = useArgs<InputProps>();
    return (
      <InputContainer>
        <InputRoot error={!!args.error} size={args.size}>
          {args.icon && <InputIcon>{args.icon}</InputIcon>}
          <InputElement
            value={value ?? args.value}
            disabled={args.disabled}
            placeholder={args.placeholder}
            onChange={(e) => {
              args.onChange?.(e);
              updateArgs({ value: e.target.value });
            }}
          />
        </InputRoot>
        {args.error && typeof args.error === "string" && (
          <InputErrorMessage>{args.error}</InputErrorMessage>
        )}
        {!args.error && args.description && (
          <InputDescription>{args.description}</InputDescription>
        )}
      </InputContainer>
    );
  },
} satisfies Story;
