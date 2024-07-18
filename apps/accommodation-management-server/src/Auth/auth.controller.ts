import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthService } from "./auth.service";
import { RegisterInput } from "../auth/RegisterInput";

@swagger.ApiTags("auths")
@common.Controller("auths")
export class AuthController {
  constructor(protected readonly service: AuthService) {}

  @common.Post("/auth/login")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Login(
    @common.Body()
    body: RegisterInput
  ): Promise<string> {
        return this.service.Login(body);
      }

  @common.Post("/auth/register")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Register(
    @common.Body()
    body: RegisterInput
  ): Promise<string> {
        return this.service.Register(body);
      }
}
