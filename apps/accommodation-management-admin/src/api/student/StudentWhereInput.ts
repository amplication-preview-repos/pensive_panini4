import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";

export type StudentWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
  university?: UniversityWhereUniqueInput;
  location?: StringNullableFilter;
  recommendations?: RecommendationListRelationFilter;
};
