import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AccommodationService } from "./accommodation.service";
import { SearchAccommodationInputDto } from "../accommodation/SearchAccommodationInputDto";
import { SearchAccommodationOutputDto } from "../accommodation/SearchAccommodationOutputDto";

@swagger.ApiTags("accommodations")
@common.Controller("accommodations")
export class AccommodationController {
  constructor(protected readonly service: AccommodationService) {}

  @common.Get("/search")
  @swagger.ApiOkResponse({
    type: SearchAccommodationOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SearchAccommodation(
    @common.Body()
    body: SearchAccommodationInputDto
  ): Promise<SearchAccommodationOutputDto[]> {
        return this.service.SearchAccommodation(body);
      }
}
