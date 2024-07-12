import { Review as TReview } from "../api/review/Review";

export const REVIEW_TITLE_FIELD = "student";

export const ReviewTitle = (record: TReview): string => {
  return record.student?.toString() || String(record.id);
};
