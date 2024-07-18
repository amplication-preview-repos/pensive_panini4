import { InputJsonValue } from "../../types";
import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  title?: string | null;
  content?: string | null;
  images?: InputJsonValue;
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutPostsInput;
};
