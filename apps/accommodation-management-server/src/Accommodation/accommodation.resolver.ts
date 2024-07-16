import * as graphql from "@nestjs/graphql";
import { SearchAccommodationInputDto } from "../accommodation/SearchAccommodationInputDto";
import { SearchAccommodationOutputDto } from "../accommodation/SearchAccommodationOutputDto";
import { AccommodationService } from "./accommodation.service";

export class AccommodationResolver {
  constructor(protected readonly service: AccommodationService) {}

  @graphql.Query(() => [SearchAccommodationOutputDto])
  async SearchAccommodation(
    @graphql.Args()
    args: SearchAccommodationInputDto
  ): Promise<SearchAccommodationOutputDto[]> {
    return this.service.SearchAccommodation(args);
  }
}
