import { sidebarMenu } from "@/constants";
import type { Meta, StoryObj } from "@/types/storybook";
import Sidebar from ".";

const meta = {
  component: Sidebar,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Dashboard = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: sidebarMenu.dashboard.href,
      },
    },
  },
} satisfies Story;

export const AccountManagement = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: sidebarMenu.accountManagement.href,
      },
    },
  },
} satisfies Story;

export const PaymentTransfer = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: sidebarMenu.payment.items.transfer.href,
      },
    },
  },
} satisfies Story;

export const PaymentBillingServices = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: sidebarMenu.payment.items.billingServices.href,
      },
    },
  },
} satisfies Story;
