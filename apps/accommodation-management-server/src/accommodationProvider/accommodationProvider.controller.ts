import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccommodationProviderService } from "./accommodationProvider.service";
import { AccommodationProviderControllerBase } from "./base/accommodationProvider.controller.base";

@swagger.ApiTags("accommodationProviders")
@common.Controller("accommodationProviders")
export class AccommodationProviderController extends AccommodationProviderControllerBase {
  constructor(protected readonly service: AccommodationProviderService) {
    super(service);
  }
}
