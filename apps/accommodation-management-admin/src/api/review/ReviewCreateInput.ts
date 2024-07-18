import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  rating?: number | null;
  student?: string | null;
  property?: PropertyWhereUniqueInput | null;
};
