import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { AppointmentCreateNestedManyWithoutRoomsInput } from "./AppointmentCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  name?: string | null;
  typeField?: "Option1" | null;
  price?: number | null;
  property?: PropertyWhereUniqueInput | null;
  appointments?: AppointmentCreateNestedManyWithoutRoomsInput;
};
