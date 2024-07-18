import { StudentCreateNestedManyWithoutUniversitiesInput } from "./StudentCreateNestedManyWithoutUniversitiesInput";

export type UniversityCreateInput = {
  name?: string | null;
  location?: string | null;
  students?: StudentCreateNestedManyWithoutUniversitiesInput;
};
