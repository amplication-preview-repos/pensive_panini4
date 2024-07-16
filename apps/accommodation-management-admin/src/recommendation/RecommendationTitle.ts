import { Recommendation as TRecommendation } from "../api/recommendation/Recommendation";

export const RECOMMENDATION_TITLE_FIELD = "title";

export const RecommendationTitle = (record: TRecommendation): string => {
  return record.title?.toString() || String(record.id);
};
