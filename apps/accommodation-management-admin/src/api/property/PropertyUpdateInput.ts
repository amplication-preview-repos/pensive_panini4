import { RoomUpdateManyWithoutPropertiesInput } from "./RoomUpdateManyWithoutPropertiesInput";
import { ReviewUpdateManyWithoutPropertiesInput } from "./ReviewUpdateManyWithoutPropertiesInput";
import { InputJsonValue } from "../../types";

export type PropertyUpdateInput = {
  address?: string | null;
  description?: string | null;
  name?: string | null;
  provider?: string | null;
  rooms?: RoomUpdateManyWithoutPropertiesInput;
  reviews?: ReviewUpdateManyWithoutPropertiesInput;
  propertyPictures?: InputJsonValue;
  roomPictures?: InputJsonValue;
  accommodationStatus?: "Option1" | null;
  roomType?: "Option1" | null;
  accommodationProvider?: string | null;
  location?: string | null;
  waterIncluded?: boolean | null;
  electricityIncluded?: boolean | null;
  wifiAmount?: number | null;
  wifiIncluded?: boolean | null;
};
