import { Property } from "../property/Property";
import { Appointment } from "../appointment/Appointment";

export type Room = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  typeField?: "Option1" | null;
  price: number | null;
  property?: Property | null;
  appointments?: Array<Appointment>;
};
