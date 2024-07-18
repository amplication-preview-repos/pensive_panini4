import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  studentRole?: "Option1";
  typeField?: StringNullableFilter;
};
