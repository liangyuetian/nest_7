import { Module, HttpAdapterHost, Global } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpSuccessInterceptor } from './interceptor';
import { AllExceptionsFilter, HttpExceptionFilter } from './filter';
import { EmailService } from './email/email.service';

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
    EmailService,
  ],
  exports: [EmailService],
})
export class CoreModule {}
