import { RoomCreateNestedManyWithoutPropertiesInput } from "./RoomCreateNestedManyWithoutPropertiesInput";
import { ReviewCreateNestedManyWithoutPropertiesInput } from "./ReviewCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  description?: string | null;
  name?: string | null;
  provider?: string | null;
  rooms?: RoomCreateNestedManyWithoutPropertiesInput;
  reviews?: ReviewCreateNestedManyWithoutPropertiesInput;
};
