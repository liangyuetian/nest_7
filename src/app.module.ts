import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { HttpMiddleware } from './common/middleware/http.middleware';
import { CatsController } from './cats/cats.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './common/interceptor/logging.interceptor';
import { ExcludeNullInterceptor } from './common/interceptor/exclude.null.interceptor';

@Module({
  imports: [
    CatsModule,
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      // https://typeorm.io/#/connection-options
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'l',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      // 添加拦截器
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      // 添加拦截器
      provide: APP_INTERCEPTOR,
      useClass: ExcludeNullInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('*');
    // consumer.apply(LoggerMiddleware).forRoutes({
    //   path: '*',
    //   method: RequestMethod.ALL,
    // });
    // 多个中间件
    // consumer.apply(HttpMiddleware, LoggerMiddleware).forRoutes(CatsController);
  }
}
