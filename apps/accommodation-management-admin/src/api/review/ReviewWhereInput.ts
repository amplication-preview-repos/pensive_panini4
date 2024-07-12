import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  comment?: StringNullableFilter;
  rating?: IntNullableFilter;
  student?: StringNullableFilter;
  property?: PropertyWhereUniqueInput;
};
