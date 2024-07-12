import { InputJsonValue } from "../../types";

export type DocumentCreateInput = {
  name?: string | null;
  description?: string | null;
  file?: InputJsonValue;
  student?: string | null;
};
