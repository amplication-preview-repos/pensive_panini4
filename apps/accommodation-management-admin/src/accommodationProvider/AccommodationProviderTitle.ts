import { AccommodationProvider as TAccommodationProvider } from "../api/accommodationProvider/AccommodationProvider";

export const ACCOMMODATIONPROVIDER_TITLE_FIELD = "name";

export const AccommodationProviderTitle = (
  record: TAccommodationProvider
): string => {
  return record.name?.toString() || String(record.id);
};
