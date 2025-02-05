import type { Meta, StoryObj } from "@/types/storybook";
import type { NavLinkProps } from "./index.types";
import NavLink from ".";

const meta = {
  component: NavLink,
  args: {
    href: "/about",
    children: "About",
  },
} satisfies Meta<NavLinkProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Active = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/about",
      },
    },
  },
  args: {
    activeClassNames: {
      active: "text-[blue]",
    },
  },
} satisfies Story;
