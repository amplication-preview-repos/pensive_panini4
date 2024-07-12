/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PropertyService } from "../property.service";
import { PropertyCreateInput } from "./PropertyCreateInput";
import { Property } from "./Property";
import { Post } from "../../post/base/Post";
import { PropertyFindManyArgs } from "./PropertyFindManyArgs";
import { PropertyWhereUniqueInput } from "./PropertyWhereUniqueInput";
import { PropertyUpdateInput } from "./PropertyUpdateInput";
import { RoomFindManyArgs } from "../../room/base/RoomFindManyArgs";
import { Room } from "../../room/base/Room";
import { RoomWhereUniqueInput } from "../../room/base/RoomWhereUniqueInput";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";

export class PropertyControllerBase {
  constructor(protected readonly service: PropertyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Property })
  async createProperty(
    @common.Body() data: PropertyCreateInput
  ): Promise<Property> {
    return await this.service.createProperty({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        address: true,
        description: true,
        name: true,
        provider: true,
        propertyPictures: true,
        roomPictures: true,
        accommodationStatus: true,
        roomType: true,
        accommodationProvider: true,
        location: true,
        waterIncluded: true,
        electricityIncluded: true,
        wifiAmount: true,
        wifiIncluded: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Property] })
  @ApiNestedQuery(PropertyFindManyArgs)
  async properties(@common.Req() request: Request): Promise<Property[]> {
    const args = plainToClass(PropertyFindManyArgs, request.query);
    return this.service.properties({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        address: true,
        description: true,
        name: true,
        provider: true,
        propertyPictures: true,
        roomPictures: true,
        accommodationStatus: true,
        roomType: true,
        accommodationProvider: true,
        location: true,
        waterIncluded: true,
        electricityIncluded: true,
        wifiAmount: true,
        wifiIncluded: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Property })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async property(
    @common.Param() params: PropertyWhereUniqueInput
  ): Promise<Property | null> {
    const result = await this.service.property({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        address: true,
        description: true,
        name: true,
        provider: true,
        propertyPictures: true,
        roomPictures: true,
        accommodationStatus: true,
        roomType: true,
        accommodationProvider: true,
        location: true,
        waterIncluded: true,
        electricityIncluded: true,
        wifiAmount: true,
        wifiIncluded: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Property })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProperty(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() data: PropertyUpdateInput
  ): Promise<Property | null> {
    try {
      return await this.service.updateProperty({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          address: true,
          description: true,
          name: true,
          provider: true,
          propertyPictures: true,
          roomPictures: true,
          accommodationStatus: true,
          roomType: true,
          accommodationProvider: true,
          location: true,
          waterIncluded: true,
          electricityIncluded: true,
          wifiAmount: true,
          wifiIncluded: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Property })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProperty(
    @common.Param() params: PropertyWhereUniqueInput
  ): Promise<Property | null> {
    try {
      return await this.service.deleteProperty({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          address: true,
          description: true,
          name: true,
          provider: true,
          propertyPictures: true,
          roomPictures: true,
          accommodationStatus: true,
          roomType: true,
          accommodationProvider: true,
          location: true,
          waterIncluded: true,
          electricityIncluded: true,
          wifiAmount: true,
          wifiIncluded: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/rooms")
  @ApiNestedQuery(RoomFindManyArgs)
  async findRooms(
    @common.Req() request: Request,
    @common.Param() params: PropertyWhereUniqueInput
  ): Promise<Room[]> {
    const query = plainToClass(RoomFindManyArgs, request.query);
    const results = await this.service.findRooms(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        typeField: true,
        price: true,

        property: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/rooms")
  async connectRooms(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() body: RoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rooms: {
        connect: body,
      },
    };
    await this.service.updateProperty({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/rooms")
  async updateRooms(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() body: RoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rooms: {
        set: body,
      },
    };
    await this.service.updateProperty({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/rooms")
  async disconnectRooms(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() body: RoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rooms: {
        disconnect: body,
      },
    };
    await this.service.updateProperty({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/reviews")
  @ApiNestedQuery(ReviewFindManyArgs)
  async findReviews(
    @common.Req() request: Request,
    @common.Param() params: PropertyWhereUniqueInput
  ): Promise<Review[]> {
    const query = plainToClass(ReviewFindManyArgs, request.query);
    const results = await this.service.findReviews(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        comment: true,
        rating: true,
        student: true,

        property: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reviews")
  async connectReviews(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        connect: body,
      },
    };
    await this.service.updateProperty({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reviews")
  async updateReviews(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        set: body,
      },
    };
    await this.service.updateProperty({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reviews")
  async disconnectReviews(
    @common.Param() params: PropertyWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        disconnect: body,
      },
    };
    await this.service.updateProperty({
      where: params,
      data,
      select: { id: true },
    });
  }
}
