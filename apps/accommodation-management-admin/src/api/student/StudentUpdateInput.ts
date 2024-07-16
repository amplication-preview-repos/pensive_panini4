import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";
import { RecommendationUpdateManyWithoutStudentsInput } from "./RecommendationUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  email?: string | null;
  password?: string | null;
  university?: UniversityWhereUniqueInput | null;
  location?: string | null;
  recommendations?: RecommendationUpdateManyWithoutStudentsInput;
};
