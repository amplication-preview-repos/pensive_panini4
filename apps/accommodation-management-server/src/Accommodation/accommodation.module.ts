import { Module } from "@nestjs/common";
import { AccommodationService } from "./accommodation.service";
import { AccommodationController } from "./accommodation.controller";
import { AccommodationResolver } from "./accommodation.resolver";

@Module({
  controllers: [AccommodationController],
  providers: [AccommodationService, AccommodationResolver],
  exports: [AccommodationService],
})
export class AccommodationModule {}
