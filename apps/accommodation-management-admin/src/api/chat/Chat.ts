export type Chat = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  messages: string | null;
  chatCreatedAt: Date | null;
  chatCreatedAtTimestamp: Date | null;
  chatMessages: string | null;
};
