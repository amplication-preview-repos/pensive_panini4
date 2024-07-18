import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  provider?: StringNullableFilter;
  rooms?: RoomListRelationFilter;
  reviews?: ReviewListRelationFilter;
  propertyPictures?: JsonFilter;
  roomPictures?: JsonFilter;
  accommodationStatus?: "Option1";
  roomType?: "Option1";
  accommodationProvider?: StringNullableFilter;
  location?: StringNullableFilter;
  waterIncluded?: BooleanNullableFilter;
  electricityIncluded?: BooleanNullableFilter;
  wifiAmount?: FloatNullableFilter;
  wifiIncluded?: BooleanNullableFilter;
};
