import {
  Controller,
  Get,
  Response,
  Param,
  HttpStatus,
  ParseIntPipe,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateNameDto } from './dto/update-name.dto';

@Controller('users/name')
export class NameController {
  @Get('')
  getName() {
    return {};
  }

  @Get(':id')
  getNameOne(@Param('id', ParseIntPipe) id: number, @Response() res) {
    res.status(HttpStatus.OK).json({
      id: id,
    });
  }

  @Post()
  @UsePipes(
    new ValidationPipe({
      // skipMissingProperties: true, // 跳过不存在的属性
    }),
  )
  updateName(@Body() data: UpdateNameDto, @Response() res) {
    res.status(HttpStatus.OK).json({
      ...data,
    });
  }
}
