import { Post } from "../post/Post";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  author: string | null;
  post?: Post | null;
  isActive: boolean | null;
  accommodation: string | null;
  student: string | null;
  stayDurationMonths: number | null;
};
