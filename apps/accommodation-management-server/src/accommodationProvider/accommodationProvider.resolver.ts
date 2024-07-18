import * as graphql from "@nestjs/graphql";
import { AccommodationProviderResolverBase } from "./base/accommodationProvider.resolver.base";
import { AccommodationProvider } from "./base/AccommodationProvider";
import { AccommodationProviderService } from "./accommodationProvider.service";

@graphql.Resolver(() => AccommodationProvider)
export class AccommodationProviderResolver extends AccommodationProviderResolverBase {
  constructor(protected readonly service: AccommodationProviderService) {
    super(service);
  }
}
