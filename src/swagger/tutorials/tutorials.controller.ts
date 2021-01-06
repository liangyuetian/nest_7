import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Response,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateTutorialsDto } from './dto/update-tutorials.dto';
import {
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiBody,
  ApiParam,
  ApiExtension,
  ApiBasicAuth,
} from '@nestjs/swagger';

@ApiTags('swagger')
@ApiExtension('x-foo', { hello: 'world' })
@Controller('swagger/tutorials')
export class TutorialsController {
  @Get()
  @ApiOperation({
    tags: ['获取是否注册 swagger222'],
    description: '获取是否注册 swagger',
    deprecated: true, // 不推荐使用，外观表现是下划线删除
  })
  @ApiQuery({ name: 'any', description: '任何值都可以', required: false })
  tutorials(@Response() res) {
    res.status(HttpStatus.OK).json({
      path: 'swagger/tutorials',
      registered: true,
    });
  }

  @Get(':id')
  @ApiOperation({
    description: '获取单个 swagger',
  })
  @ApiParam({ name: 'id', description: 'swagger id' })
  @ApiResponse({ description: '成功请求 200', status: 200 })
  @ApiResponse({ description: '成功请求 201', status: 201 })
  @ApiInternalServerErrorResponse({ description: '服务端异常', status: 500 })
  getTutorialsOne(
    @Param('id', new ParseIntPipe()) id: number,
    @Response() res,
  ) {
    res.status(HttpStatus.OK).json({
      message: HttpStatus.OK,
      id,
    });
  }

  @Post()
  @ApiOperation({ summary: '概要' })
  @UsePipes(new ValidationPipe())
  updateTutorials(@Body() data: UpdateTutorialsDto, @Response() res) {
    res.status(HttpStatus.OK).json({
      message: HttpStatus.OK,
    });
  }
}
