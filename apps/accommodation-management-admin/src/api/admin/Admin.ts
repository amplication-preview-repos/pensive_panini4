export type Admin = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  password: string | null;
  roles?: Array<"Option1">;
  permissions?: Array<"Option1">;
};
