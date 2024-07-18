import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccommodationProviderServiceBase } from "./base/accommodationProvider.service.base";

@Injectable()
export class AccommodationProviderService extends AccommodationProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
