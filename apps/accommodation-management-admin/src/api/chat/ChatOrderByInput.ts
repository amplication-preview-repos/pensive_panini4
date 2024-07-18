import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  messages?: SortOrder;
  chatCreatedAt?: SortOrder;
  chatCreatedAtTimestamp?: SortOrder;
  chatMessages?: SortOrder;
};
