import { Module } from '@nestjs/common';
import { StressTestApiController } from './stress-test-api.controller';

@Module({
  controllers: [StressTestApiController]
})
export class StressTestApiModule {}
