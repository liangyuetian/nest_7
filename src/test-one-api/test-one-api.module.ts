import { Module } from '@nestjs/common';
import { TestOneApiService } from './test-one-api.service';
import { TestOneApiController } from './test-one-api.controller';

@Module({
  providers: [TestOneApiService],
  controllers: [TestOneApiController]
})
export class TestOneApiModule {}
