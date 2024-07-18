import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  username?: string | null;
  bio?: string | null;
  profilePicture?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
  surname?: string | null;
  age?: number | null;
  requestedRoomType?: "Option1" | null;
  name?: string | null;
  institution?: string | null;
};
