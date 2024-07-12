import { Property } from "../property/Property";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  comment: string | null;
  rating: number | null;
  student: string | null;
  property?: Property | null;
};
