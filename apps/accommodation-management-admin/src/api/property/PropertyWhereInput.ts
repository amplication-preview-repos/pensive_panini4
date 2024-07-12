import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type PropertyWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  provider?: StringNullableFilter;
  rooms?: RoomListRelationFilter;
  reviews?: ReviewListRelationFilter;
};
