import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CommentWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  author?: StringNullableFilter;
  post?: PostWhereUniqueInput;
  isActive?: BooleanNullableFilter;
  accommodation?: StringNullableFilter;
  student?: StringNullableFilter;
  stayDurationMonths?: IntNullableFilter;
};
