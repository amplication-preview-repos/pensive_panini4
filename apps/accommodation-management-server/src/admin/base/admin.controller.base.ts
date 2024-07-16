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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AdminService } from "../admin.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AdminCreateInput } from "./AdminCreateInput";
import { Admin } from "./Admin";
import { Post } from "../../post/base/Post";
import { AdminFindManyArgs } from "./AdminFindManyArgs";
import { AdminWhereUniqueInput } from "./AdminWhereUniqueInput";
import { AdminUpdateInput } from "./AdminUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AdminControllerBase {
  constructor(
    protected readonly service: AdminService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Admin })
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAdmin(@common.Body() data: AdminCreateInput): Promise<Admin> {
    return await this.service.createAdmin({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        password: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Admin] })
  @ApiNestedQuery(AdminFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async admins(@common.Req() request: Request): Promise<Admin[]> {
    const args = plainToClass(AdminFindManyArgs, request.query);
    return this.service.admins({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        password: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Admin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async admin(
    @common.Param() params: AdminWhereUniqueInput
  ): Promise<Admin | null> {
    const result = await this.service.admin({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        password: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Admin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAdmin(
    @common.Param() params: AdminWhereUniqueInput,
    @common.Body() data: AdminUpdateInput
  ): Promise<Admin | null> {
    try {
      return await this.service.updateAdmin({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          email: true,
          password: true,
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
  @swagger.ApiOkResponse({ type: Admin })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Admin",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAdmin(
    @common.Param() params: AdminWhereUniqueInput
  ): Promise<Admin | null> {
    try {
      return await this.service.deleteAdmin({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          email: true,
          password: true,
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
}
