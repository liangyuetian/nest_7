import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { RedirectUriModule } from './redirect-uri/redirect-uri.module';
import { DatabaseModule } from './database/database.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwaggerModule } from './swagger/swagger.module';
import { StressTestApiModule } from './stress-test-api/stress-test-api.module';
import { CoreModule } from './core/core.module';
import { ActivityModule } from './activity/activity.module';
import { TestOneApiModule } from './test-one-api/test-one-api.module';
import { BinaryModule } from './binary/binary.module';

@Module({
  imports: [
    CommonModule,
    ConfigModule.forRoot(),
    // DatabaseModule,
    AuthModule,
    UsersModule,
    RedirectUriModule,
    SwaggerModule,
    StressTestApiModule,
    CoreModule,
    // CatsModule,
    // ActivityModule,
    TestOneApiModule,
    BinaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
