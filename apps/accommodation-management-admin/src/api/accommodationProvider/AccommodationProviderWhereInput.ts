import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AccommodationProviderWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
  roomType?: "Option1";
  location?: StringNullableFilter;
  electricityIncluded?: BooleanNullableFilter;
  waterIncluded?: BooleanNullableFilter;
  price?: IntNullableFilter;
  name?: StringNullableFilter;
  popularity?: IntNullableFilter;
};
