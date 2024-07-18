import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type RecommendationCreateInput = {
  title?: string | null;
  description?: string | null;
  category?: string | null;
  location?: string | null;
  student?: StudentWhereUniqueInput | null;
};
