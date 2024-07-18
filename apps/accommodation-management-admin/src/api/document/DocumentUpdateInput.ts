import { InputJsonValue } from "../../types";

export type DocumentUpdateInput = {
  name?: string | null;
  description?: string | null;
  file?: InputJsonValue;
  student?: string | null;
};
