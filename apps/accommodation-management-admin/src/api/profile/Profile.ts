import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Profile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string | null;
  bio: string | null;
  profilePicture: JsonValue;
  user?: User | null;
  surname: string | null;
  age: number | null;
  requestedRoomType?: "Option1" | null;
  name: string | null;
  institution: string | null;
};
