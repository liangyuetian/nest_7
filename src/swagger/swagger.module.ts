import { Module } from '@nestjs/common';
import { SwaggerController } from './swagger.controller';
import { TutorialsController } from './tutorials/tutorials.controller';
import { NoPropertyController } from './no-property/no-property.controller';

@Module({
  controllers: [SwaggerController, TutorialsController, NoPropertyController],
})
export class SwaggerModule {}
