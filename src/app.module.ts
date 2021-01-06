import { Module } from '@nestjs/common';
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
import { SwaggerModule } from './swagger/swagger.module';
import { StressTestApiModule } from './stress-test-api/stress-test-api.module';

@Module({
  imports: [
    CommonModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [baseConfig, mysqlConfig],
    }),
    DatabaseModule.forRoot(),
    AuthModule,
    UsersModule,
    CatsModule,
    RedirectUriModule,
    SwaggerModule,
    StressTestApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
