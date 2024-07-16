import { Student as TStudent } from "../api/student/Student";

export const STUDENT_TITLE_FIELD = "password";

export const StudentTitle = (record: TStudent): string => {
  return record.password?.toString() || String(record.id);
};
