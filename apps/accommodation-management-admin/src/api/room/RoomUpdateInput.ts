import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { AppointmentUpdateManyWithoutRoomsInput } from "./AppointmentUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  name?: string | null;
  typeField?: "Option1" | null;
  price?: number | null;
  property?: PropertyWhereUniqueInput | null;
  appointments?: AppointmentUpdateManyWithoutRoomsInput;
};
