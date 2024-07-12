import { RoomCreateNestedManyWithoutPropertiesInput } from "./RoomCreateNestedManyWithoutPropertiesInput";
import { ReviewCreateNestedManyWithoutPropertiesInput } from "./ReviewCreateNestedManyWithoutPropertiesInput";
import { InputJsonValue } from "../../types";

export type PropertyCreateInput = {
  address?: string | null;
  description?: string | null;
  name?: string | null;
  provider?: string | null;
  rooms?: RoomCreateNestedManyWithoutPropertiesInput;
  reviews?: ReviewCreateNestedManyWithoutPropertiesInput;
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
