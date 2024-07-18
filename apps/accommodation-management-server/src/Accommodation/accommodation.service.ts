import { Injectable } from "@nestjs/common";
import { SearchAccommodationInputDto } from "../accommodation/SearchAccommodationInputDto";
import { SearchAccommodationOutputDto } from "../accommodation/SearchAccommodationOutputDto";

@Injectable()
export class AccommodationService {
  constructor() {}
  async SearchAccommodation(args: SearchAccommodationInputDto): Promise<SearchAccommodationOutputDto[]> {
    throw new Error("Not implemented");
  }
}
