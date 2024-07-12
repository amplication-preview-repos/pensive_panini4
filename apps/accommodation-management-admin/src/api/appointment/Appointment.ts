import { Room } from "../room/Room";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  student: string | null;
  room?: Room | null;
};
