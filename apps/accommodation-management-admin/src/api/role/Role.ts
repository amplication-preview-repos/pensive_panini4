export type Role = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  studentRole?: "Option1" | null;
  typeField: string | null;
};
