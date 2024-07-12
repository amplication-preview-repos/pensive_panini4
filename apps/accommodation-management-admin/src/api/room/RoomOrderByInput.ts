import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  price?: SortOrder;
  propertyId?: SortOrder;
};
