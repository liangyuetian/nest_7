import { Module } from '@nestjs/common';
import { ImgController } from './img/img.controller';

@Module({
  controllers: [ImgController]
})
export class BinaryModule {}
