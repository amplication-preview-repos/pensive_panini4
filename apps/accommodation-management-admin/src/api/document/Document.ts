import { JsonValue } from "type-fest";

export type Document = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  file: JsonValue;
  student: string | null;
};
