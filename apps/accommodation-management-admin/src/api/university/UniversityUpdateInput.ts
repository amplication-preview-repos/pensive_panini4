import { StudentUpdateManyWithoutUniversitiesInput } from "./StudentUpdateManyWithoutUniversitiesInput";

export type UniversityUpdateInput = {
  name?: string | null;
  location?: string | null;
  students?: StudentUpdateManyWithoutUniversitiesInput;
};
