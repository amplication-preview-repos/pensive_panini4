import { Admin as TAdmin } from "../api/admin/Admin";

export const ADMIN_TITLE_FIELD = "password";

export const AdminTitle = (record: TAdmin): string => {
  return record.password?.toString() || String(record.id);
};
