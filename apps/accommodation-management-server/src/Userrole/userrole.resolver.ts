import * as graphql from "@nestjs/graphql";
import { UserroleService } from "./userrole.service";

export class UserroleResolver {
  constructor(protected readonly service: UserroleService) {}
}
