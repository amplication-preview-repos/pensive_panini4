import { SortOrder } from "../../util/SortOrder";

export type RecommendationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  category?: SortOrder;
  location?: SortOrder;
  studentId?: SortOrder;
};
