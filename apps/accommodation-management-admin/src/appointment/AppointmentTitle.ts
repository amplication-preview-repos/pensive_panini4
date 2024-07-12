import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "student";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.student?.toString() || String(record.id);
};
