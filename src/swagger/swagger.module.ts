import { Module } from '@nestjs/common';
import { SwaggerController } from './swagger.controller';
import { TutorialsController } from './tutorials/tutorials.controller';

@Module({
  controllers: [SwaggerController, TutorialsController],
})
export class SwaggerModule {}
