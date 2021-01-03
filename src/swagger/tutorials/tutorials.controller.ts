import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Response,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateTutorialsDto } from './dto/update-tutorials.dto';

@Controller('swagger/tutorials')
export class TutorialsController {
  @Get()
  tutorials(@Response() res) {
    res.status(HttpStatus.OK).json({
      path: 'swagger/tutorials',
    });
  }

  @Post()
  @UsePipes(new ValidationPipe())
  updateTutorials(@Body() data: UpdateTutorialsDto, @Response() res) {
    res.status(HttpStatus.OK).json({
      message: HttpStatus.OK,
    });
  }
}
