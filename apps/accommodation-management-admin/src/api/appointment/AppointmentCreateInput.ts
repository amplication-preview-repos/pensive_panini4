import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type AppointmentCreateInput = {
  date?: Date | null;
  student?: string | null;
  room?: RoomWhereUniqueInput | null;
};
