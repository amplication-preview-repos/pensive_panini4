import { Module } from "@nestjs/common";
import { PropertyModule } from "./property/property.module";
import { RoomModule } from "./room/room.module";
import { ReviewModule } from "./review/review.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { DocumentModule } from "./document/document.module";
import { UserModule } from "./user/user.module";
import { ProfileModule } from "./profile/profile.module";
import { CommentModule } from "./comment/comment.module";
import { ChatModule } from "./chat/chat.module";
import { PostModule } from "./post/post.module";
import { VideoCallModule } from "./videoCall/videoCall.module";
import { AdminModule } from "./admin/admin.module";
import { StudentModule } from "./student/student.module";
import { AccommodationProviderModule } from "./accommodationProvider/accommodationProvider.module";
import { StaffModule } from "./staff/staff.module";
import { UniversityModule } from "./university/university.module";
import { RecommendationModule } from "./recommendation/recommendation.module";
import { RoleModule } from "./role/role.module";
import { AccommodationModule } from "./Accommodation/accommodation.module";
import { AuthModule } from "./Auth/auth.module";
import { UserroleModule } from "./Userrole/userrole.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    PropertyModule,
    RoomModule,
    ReviewModule,
    AppointmentModule,
    DocumentModule,
    UserModule,
    ProfileModule,
    CommentModule,
    ChatModule,
    PostModule,
    VideoCallModule,
    AdminModule,
    StudentModule,
    AccommodationProviderModule,
    StaffModule,
    UniversityModule,
    RecommendationModule,
    RoleModule,
    AccommodationModule,
    AuthModule,
    UserroleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
