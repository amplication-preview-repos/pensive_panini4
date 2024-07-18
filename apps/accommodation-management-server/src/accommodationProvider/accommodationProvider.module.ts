import { Module } from "@nestjs/common";
import { AccommodationProviderModuleBase } from "./base/accommodationProvider.module.base";
import { AccommodationProviderService } from "./accommodationProvider.service";
import { AccommodationProviderController } from "./accommodationProvider.controller";
import { AccommodationProviderResolver } from "./accommodationProvider.resolver";

@Module({
  imports: [AccommodationProviderModuleBase],
  controllers: [AccommodationProviderController],
  providers: [AccommodationProviderService, AccommodationProviderResolver],
  exports: [AccommodationProviderService],
})
export class AccommodationProviderModule {}
