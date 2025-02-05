export type Message = {
  id: string;
  title: string;
  content: string;
  date: Date;
};

export type MessageProps = Omit<Message, "id">;

export type MessageListProps = {
  messages: Message[];
};

export type NotificationsProps = {
  newMessages?: Message[];
  readMessages?: Message[];
};
