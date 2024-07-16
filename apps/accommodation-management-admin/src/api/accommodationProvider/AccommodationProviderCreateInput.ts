export type AccommodationProviderCreateInput = {
  email?: string | null;
  password?: string | null;
  roomType?: "Option1" | null;
  location?: string | null;
  electricityIncluded?: boolean | null;
  waterIncluded?: boolean | null;
  price?: number | null;
  name?: string | null;
  popularity?: number | null;
  roles?: Array<"Option1">;
  permissions?: Array<"Option1">;
};
