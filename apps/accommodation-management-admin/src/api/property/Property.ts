import { Room } from "../room/Room";
import { Review } from "../review/Review";

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
};
