import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProfileWhereInput = {
  id?: StringFilter;
  username?: StringNullableFilter;
  bio?: StringNullableFilter;
  profilePicture?: JsonFilter;
  user?: UserWhereUniqueInput;
  surname?: StringNullableFilter;
  age?: IntNullableFilter;
  requestedRoomType?: "Option1";
  name?: StringNullableFilter;
  institution?: StringNullableFilter;
};
