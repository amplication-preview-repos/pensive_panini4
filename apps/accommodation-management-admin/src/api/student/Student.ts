import { University } from "../university/University";
import { Recommendation } from "../recommendation/Recommendation";

export type Student = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  password: string | null;
  university?: University | null;
  location: string | null;
  recommendations?: Array<Recommendation>;
};
