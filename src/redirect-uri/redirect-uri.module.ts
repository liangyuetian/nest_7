import { Module } from '@nestjs/common';
import { RedirectUriController } from './redirect-uri.controller';

@Module({
  controllers: [RedirectUriController],
})
export class RedirectUriModule {}
