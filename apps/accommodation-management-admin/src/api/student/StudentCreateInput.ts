import { UniversityWhereUniqueInput } from "../university/UniversityWhereUniqueInput";
import { RecommendationCreateNestedManyWithoutStudentsInput } from "./RecommendationCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  email?: string | null;
  password?: string | null;
  university?: UniversityWhereUniqueInput | null;
  location?: string | null;
  recommendations?: RecommendationCreateNestedManyWithoutStudentsInput;
};
