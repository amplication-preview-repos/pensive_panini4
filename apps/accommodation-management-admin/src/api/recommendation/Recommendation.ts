import { Student } from "../student/Student";

export type Recommendation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  category: string | null;
  location: string | null;
  student?: Student | null;
};
