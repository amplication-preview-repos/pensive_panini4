import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  student?: StringNullableFilter;
  room?: RoomWhereUniqueInput;
};
