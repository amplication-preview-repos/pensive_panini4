import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserroleService } from "./userrole.service";

@swagger.ApiTags("userroles")
@common.Controller("userroles")
export class UserroleController {
  constructor(protected readonly service: UserroleService) {}
}
