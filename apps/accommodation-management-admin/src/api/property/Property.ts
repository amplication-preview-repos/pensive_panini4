import { Room } from "../room/Room";
import { Review } from "../review/Review";
import { JsonValue } from "type-fest";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  description: string | null;
  name: string | null;
  provider: string | null;
  rooms?: Array<Room>;
  reviews?: Array<Review>;
  propertyPictures: JsonValue;
  roomPictures: JsonValue;
  accommodationStatus?: "Option1" | null;
  roomType?: "Option1" | null;
  accommodationProvider: string | null;
  location: string | null;
  waterIncluded: boolean | null;
  electricityIncluded: boolean | null;
  wifiAmount: number | null;
  wifiIncluded: boolean | null;
};
