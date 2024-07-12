import { SortOrder } from "../../util/SortOrder";

export type VideoCallOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  callEnd?: SortOrder;
  callStart?: SortOrder;
};
