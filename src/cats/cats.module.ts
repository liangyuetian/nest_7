import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { HealthController } from './health/health.controller';

@Module({
  controllers: [CatsController, HealthController],
  providers: [CatsService],
})
export class CatsModule {}
