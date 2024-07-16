import { SortOrder } from "../../util/SortOrder";

export type AccommodationProviderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  roomType?: SortOrder;
  location?: SortOrder;
  electricityIncluded?: SortOrder;
  waterIncluded?: SortOrder;
  price?: SortOrder;
  name?: SortOrder;
  popularity?: SortOrder;
};
