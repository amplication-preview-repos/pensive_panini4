import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  universityId?: SortOrder;
  location?: SortOrder;
};
