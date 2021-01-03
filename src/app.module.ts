import { HttpModule, MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { RedirectUriModule } from './redirect-uri/redirect-uri.module';
import { DatabaseModule } from './database/database.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { baseConfig } from './config/base.config';
import { mysqlConfig } from './config/database.config';

@Module({
  imports: [
    CommonModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [baseConfig, mysqlConfig],
    }),
    DatabaseModule.forRoot(),
    AuthModule,
    UsersModule,
    CatsModule,
    RedirectUriModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
