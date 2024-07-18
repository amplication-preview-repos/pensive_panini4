import { Staff as TStaff } from "../api/staff/Staff";

export const STAFF_TITLE_FIELD = "password";

export const StaffTitle = (record: TStaff): string => {
  return record.password?.toString() || String(record.id);
};
