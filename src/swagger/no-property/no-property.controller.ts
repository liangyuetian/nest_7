import {
  Body,
  Controller,
  Post,
  HttpStatus,
  Response,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateNoPropertyDto } from './dto/update-no-property.dto';

@Controller('swagger/no-property')
export class NoPropertyController {
  @Post()
  @UsePipes(new ValidationPipe())
  getNoProperty(@Body() data: UpdateNoPropertyDto, @Response() res) {
    res.status(HttpStatus.OK).json({
      message: HttpStatus.OK,
    });
  }
}
