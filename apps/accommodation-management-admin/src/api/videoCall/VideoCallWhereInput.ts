import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type VideoCallWhereInput = {
  id?: StringFilter;
  callEnd?: DateTimeNullableFilter;
  callStart?: DateTimeNullableFilter;
};
