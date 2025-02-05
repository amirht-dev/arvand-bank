import type { Meta, StoryObj } from "@/types/storybook";
import { T } from "@/utils/storybook";
import Notifications from ".";
import { Message, NotificationsProps } from "./index.types";

const meta = {
  component: Notifications,
  args: {
    newMessages: [],
    readMessages: [],
  },
  argTypes: {
    newMessages: {
      table: {
        type: {
          summary: T.arrayOf("Message"),
          detail: `Message: ${T.object<Message>({
            id: T.primitive.string,
            title: T.primitive.string,
            content: T.primitive.string,
            date: T.instanceOf(Date),
          })}`,
        },
      },
    },
    readMessages: {
      table: {
        type: {
          summary: T.arrayOf("Message"),
          detail: `Message: ${T.object<Message>({
            id: T.primitive.string,
            title: T.primitive.string,
            content: T.primitive.string,
            date: T.instanceOf(Date),
          })}`,
        },
      },
    },
  },
  decorators: [(Story) => <div className="mx-auto w-fit">{Story()}</div>],
} satisfies Meta<NotificationsProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty = {
  args: {
    newMessages: [],
  },
} satisfies Story;

export const WithMessages = {
  args: {
    newMessages: Array.from({ length: 3 }, (_, idx) => ({
      id: idx.toString(),
      title: "متن آزمایشی برای چت",
      content: "متن آزمایشی برای چت",
      date: new Date(),
    })),
    readMessages: Array.from({ length: 2 }, (_, idx) => ({
      id: idx.toString(),
      title: "متن آزمایشی برای چت",
      content: "متن آزمایشی برای چت",
      date: new Date(),
    })),
  },
} satisfies Story;
