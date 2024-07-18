import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
  provider?: SortOrder;
  propertyPictures?: SortOrder;
  roomPictures?: SortOrder;
  accommodationStatus?: SortOrder;
  roomType?: SortOrder;
  accommodationProvider?: SortOrder;
  location?: SortOrder;
  waterIncluded?: SortOrder;
  electricityIncluded?: SortOrder;
  wifiAmount?: SortOrder;
  wifiIncluded?: SortOrder;
};
