import { RoomUpdateManyWithoutPropertiesInput } from "./RoomUpdateManyWithoutPropertiesInput";
import { ReviewUpdateManyWithoutPropertiesInput } from "./ReviewUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  description?: string | null;
  name?: string | null;
  provider?: string | null;
  rooms?: RoomUpdateManyWithoutPropertiesInput;
  reviews?: ReviewUpdateManyWithoutPropertiesInput;
};
