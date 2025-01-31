import type { Meta, StoryObj } from "@/types/storybook";
import IconButton from ".";
import { Bank_Outline } from "../../icons/Buildings/Bank";
import { ICON_BUTTON_SIZES } from "./index.constants";
import { IconButtonProps } from "./index.types";

const meta = {
  component: IconButton,
  args: {
    size: "md",
    children: <Bank_Outline />,
    disabled: false,
    badge: false,
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ICON_BUTTON_SIZES,
      table: {
        type: {
          summary: ICON_BUTTON_SIZES.map((i) => `"${i}"`).join(" | "),
        },
      },
    },
    badge: {
      control: "boolean",
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<IconButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

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

export const Badge = {
  args: {
    badge: true,
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;

// export const Default = {
//   render() {
//     return (
//       <button className="icon-btn icon-btn--size-lg">
//         <svg className="icon-btn__badge">
//           <circle
//             cx="5px"
//             cy="5px"
//             r="5px"
//             // fill="hsl(var(--color-neutral-white-hsl))"
//           />
//           <circle
//             cx="50%"
//             cy="50%"
//             r="25%"
//             // fill="hsl(var(--color-state-error-1-hsl))"
//           />
//         </svg>
//         <Bank_Outline className="icon-btn__icon" />
//       </button>
//     );
//   },
// } satisfies Story;

// export const Small = {
//   args: {
//     size: "sm",
//   },
// } satisfies Story;

// export const Medium = {
//   args: {
//     size: "md",
//   },
// } satisfies Story;

// export const Large = {
//   args: {
//     size: "lg",
//   },
// } satisfies Story;

// export const Disabled = {
//   args: {
//     disabled: true,
//   },
// } satisfies Story;
