import { Module } from '@nestjs/common';
import { StressTestApiController } from './stress-test-api.controller';
import { StressTestApiService } from './stress-test-api.service';

@Module({
  controllers: [StressTestApiController],
  providers: [StressTestApiService],
})
export class StressTestApiModule {}
