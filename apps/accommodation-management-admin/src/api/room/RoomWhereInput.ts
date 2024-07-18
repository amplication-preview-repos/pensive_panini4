import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type RoomWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
  price?: FloatNullableFilter;
  property?: PropertyWhereUniqueInput;
  appointments?: AppointmentListRelationFilter;
};
