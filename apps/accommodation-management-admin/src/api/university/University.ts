import { Student } from "../student/Student";

export type University = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  location: string | null;
  students?: Array<Student>;
};
