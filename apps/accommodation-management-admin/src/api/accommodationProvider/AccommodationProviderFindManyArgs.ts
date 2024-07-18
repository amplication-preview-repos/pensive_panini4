import { AccommodationProviderWhereInput } from "./AccommodationProviderWhereInput";
import { AccommodationProviderOrderByInput } from "./AccommodationProviderOrderByInput";

export type AccommodationProviderFindManyArgs = {
  where?: AccommodationProviderWhereInput;
  orderBy?: Array<AccommodationProviderOrderByInput>;
  skip?: number;
  take?: number;
};
