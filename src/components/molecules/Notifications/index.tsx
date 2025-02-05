import IconButton from "@/components/atoms/buttons/IconButton";
import { Newspaper_Outline } from "@/components/atoms/icons/Communication/Newspaper";
import { Bell_Outline } from "@/components/atoms/icons/general/Bell";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/Popover";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/Tabs";
import clsx from "clsx";
import Image from "next/image";
import { forwardRef } from "react";
import { EmptyObject } from "type-fest";
import {
  MessageListProps,
  MessageProps,
  NotificationsProps,
} from "./index.types";

const NEW_MESSAGES_TAB_VALUE = "new-messages";

const READ_MESSAGES_TAB_VALUE = "read-messages";

const Notifications = ({
  newMessages = [],
  readMessages = [],
}: NotificationsProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton badge={!!newMessages.length}>
          <Bell_Outline />
        </IconButton>
      </PopoverTrigger>

      <PopoverContent className="flex w-[340px] flex-col p-6">
        <h6 className="text-heading-6 text-neutral-black">اعلان ها</h6>

        <Tabs
          className="mt-6 flex-1 gap-6"
          defaultValue={NEW_MESSAGES_TAB_VALUE}
        >
          <TabsList className="px-2">
            <TabsTrigger value={NEW_MESSAGES_TAB_VALUE} className="flex-1">
              پیام جدید
            </TabsTrigger>
            <TabsTrigger value={READ_MESSAGES_TAB_VALUE} className="flex-1">
              پیام خوانده شده
            </TabsTrigger>
          </TabsList>

          <TabsContent value={NEW_MESSAGES_TAB_VALUE} className={clsx("gap-6")}>
            {newMessages.length ? (
              <MessageList messages={newMessages} />
            ) : (
              <Empty />
            )}
          </TabsContent>
          <TabsContent value={READ_MESSAGES_TAB_VALUE}>
            {newMessages.length ? (
              <MessageList messages={readMessages} />
            ) : (
              <Empty />
            )}
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;

const Message = forwardRef<HTMLLIElement, MessageProps>(
  ({ title, content, date }, ref) => {
    return (
      <li className="flex items-start gap-2" ref={ref}>
        <Newspaper_Outline className="size-6 text-neutral-gray-3" />
        <div className="grid gap-2">
          <span className="text-body-5 text-neutral-black">{title}</span>
          <span className="text-overline-2 text-neutral-gray-2">{content}</span>
          <span className="text-caption-2 text-neutral-gray-3">
            {date.toLocaleDateString("fa-IR")}
          </span>
        </div>
      </li>
    );
  },
);
Message.displayName = "Message";

const MessageList = forwardRef<HTMLUListElement, MessageListProps>(
  ({ messages }, ref) => {
    return (
      <ul className="space-y-4" ref={ref}>
        {messages.map((msg) => (
          <Message key={msg.id} {...msg} />
        ))}
      </ul>
    );
  },
);
MessageList.displayName = "MessageList";

const Empty = forwardRef<HTMLDivElement, EmptyObject>((props, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className="flex h-[314px] w-full flex-col items-center justify-center gap-6"
    >
      <Image
        width={122}
        height={161}
        src="/images/empty-box.png"
        alt="empty messages"
      />
      <p className="text-caption-2 text-neutral-gray-2">
        شما مورد جدیدی برای مشاهده ندارید
      </p>
    </div>
  );
});
Empty.displayName = "Empty";
