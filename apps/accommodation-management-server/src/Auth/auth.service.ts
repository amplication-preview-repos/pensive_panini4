import { Injectable } from "@nestjs/common";
import { LoginInput } from "../auth/LoginInput";
import { RegisterInput } from "../auth/RegisterInput";

@Injectable()
export class AuthService {
  constructor() {}
  async Login(args: LoginInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async Register(args: RegisterInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
