import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
  provider?: SortOrder;
};