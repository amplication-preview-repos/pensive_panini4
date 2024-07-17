import { Module } from "@nestjs/common";
import { UserroleService } from "./userrole.service";
import { UserroleController } from "./userrole.controller";
import { UserroleResolver } from "./userrole.resolver";

@Module({
  controllers: [UserroleController],
  providers: [UserroleService, UserroleResolver],
  exports: [UserroleService],
})
export class UserroleModule {}
