import { JsonValue } from "type-fest";
import { Comment } from "../comment/Comment";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  images: JsonValue;
  author: string | null;
  comments?: Array<Comment>;
};
