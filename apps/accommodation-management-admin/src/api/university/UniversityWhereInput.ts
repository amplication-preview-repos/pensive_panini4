import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";

export type UniversityWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  location?: StringNullableFilter;
  students?: StudentListRelationFilter;
};
