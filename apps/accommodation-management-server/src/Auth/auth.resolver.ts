import * as graphql from "@nestjs/graphql";
import { LoginInput } from "../auth/LoginInput";
import { RegisterInput } from "../auth/RegisterInput";
import { AuthService } from "./auth.service";

export class AuthResolver {
  constructor(protected readonly service: AuthService) {}

  @graphql.Mutation(() => String)
  async Login(
    @graphql.Args()
    args: LoginInput
  ): Promise<string> {
    return this.service.Login(args);
  }

  @graphql.Mutation(() => String)
  async Register(
    @graphql.Args()
    args: RegisterInput
  ): Promise<string> {
    return this.service.Register(args);
  }
}
