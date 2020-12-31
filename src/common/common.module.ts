import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { ExcludeNullInterceptor } from './interceptor/exclude.null.interceptor';

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
export class CommonModule {}
