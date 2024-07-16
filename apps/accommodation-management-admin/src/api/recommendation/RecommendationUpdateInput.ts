import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type RecommendationUpdateInput = {
  title?: string | null;
  description?: string | null;
  category?: string | null;
  location?: string | null;
  student?: StudentWhereUniqueInput | null;
};
