import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  author?: SortOrder;
  postId?: SortOrder;
  isActive?: SortOrder;
  accommodation?: SortOrder;
  student?: SortOrder;
  stayDurationMonths?: SortOrder;
};
