import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { ExcludeNullInterceptor } from './interceptor/exclude.null.interceptor';
import { HttpMiddleware } from './middleware/http.middleware';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  providers: [
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
export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(HttpMiddleware, LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
