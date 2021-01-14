import { Module, HttpAdapterHost, Global } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpSuccessInterceptor } from './interceptor';
import { AllExceptionsFilter, HttpExceptionFilter } from './filter';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpSuccessInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class CoreModule {}
