/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  AccommodationProvider as PrismaAccommodationProvider,
} from "@prisma/client";

export class AccommodationProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AccommodationProviderCountArgs, "select">
  ): Promise<number> {
    return this.prisma.accommodationProvider.count(args);
  }

  async accommodationProviders(
    args: Prisma.AccommodationProviderFindManyArgs
  ): Promise<PrismaAccommodationProvider[]> {
    return this.prisma.accommodationProvider.findMany(args);
  }
  async accommodationProvider(
    args: Prisma.AccommodationProviderFindUniqueArgs
  ): Promise<PrismaAccommodationProvider | null> {
    return this.prisma.accommodationProvider.findUnique(args);
  }
  async createAccommodationProvider(
    args: Prisma.AccommodationProviderCreateArgs
  ): Promise<PrismaAccommodationProvider> {
    return this.prisma.accommodationProvider.create(args);
  }
  async updateAccommodationProvider(
    args: Prisma.AccommodationProviderUpdateArgs
  ): Promise<PrismaAccommodationProvider> {
    return this.prisma.accommodationProvider.update(args);
  }
  async deleteAccommodationProvider(
    args: Prisma.AccommodationProviderDeleteArgs
  ): Promise<PrismaAccommodationProvider> {
    return this.prisma.accommodationProvider.delete(args);
  }
}
