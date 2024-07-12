import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  id?: StringFilter;
  username?: StringNullableFilter;
  bio?: StringNullableFilter;
  profilePicture?: JsonFilter;
  user?: UserWhereUniqueInput;
};
