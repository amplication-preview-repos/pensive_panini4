import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type AppointmentUpdateInput = {
  date?: Date | null;
  student?: string | null;
  room?: RoomWhereUniqueInput | null;
};
