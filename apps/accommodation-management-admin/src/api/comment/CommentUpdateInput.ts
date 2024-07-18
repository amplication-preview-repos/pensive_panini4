import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  author?: string | null;
  post?: PostWhereUniqueInput | null;
  isActive?: boolean | null;
  accommodation?: string | null;
  student?: string | null;
  stayDurationMonths?: number | null;
};
