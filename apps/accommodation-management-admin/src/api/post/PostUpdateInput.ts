import { InputJsonValue } from "../../types";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  title?: string | null;
  content?: string | null;
  images?: InputJsonValue;
  author?: string | null;
  comments?: CommentUpdateManyWithoutPostsInput;
};
