import {
  Module,
  HttpAdapterHost,
  Global,
  ValidationPipe,
} from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { HttpSuccessInterceptor } from './interceptor';
import { AllExceptionsFilter, HttpExceptionFilter } from './filter';
import { EmailService } from './email/email.service';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
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
