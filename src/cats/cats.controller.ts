import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Next,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Redirect,
  Req,
  Response,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';
import { RolesGuard } from '../common/guard/roles.guard';
// import { ValidationPipe } from '../common/pipe/validate.pipe';
// import { ParseIntPipe } from '../common/pipe/parse-int.pipe';

@Controller('cats')
@UseGuards(new RolesGuard())
export class CatsController {
  @Get()
  getHello(@Req() request: Request, @Response() response, @Next() next) {
    response.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      data: {
        name: 'cats.controller',
      },
    });
  }

  @Get(':id')
  getId(@Param('id', new ParseIntPipe()) id) {
    return `参数类型：${typeof id}`;
  }

  // @Get(':id')
  // getId2(@Param('id') id) {
  //   return `id：${id}`;
  // }

  @Post()
  // @HttpCode(204)
  // @Header('Cache-Control', 'none')
  // @Redirect('https://nestjs.com', 302) // 301 永久转移；302 暂时性转移
  postHello() {
    return {
      status: 0,
      data: { name: '王闯' },
    };
  }

  @Delete()
  delCats() {
    throw new HttpException(
      {
        response: '不允许删除',
        // statusCode: HttpStatus.FORBIDDEN,
        // message: '不允许删除',
        // user_message: '不允许删除',
      },
      HttpStatus.FORBIDDEN,
    );
  }

  // @Get()
  // @UsePipes(ValidationPipe) // @UsePipes(new ValidationPipe())
  // async create(@Query() createCatDto: CreateCatDto, @Response() res) {
  //   // this.catsService.create(createCatDto);
  //   console.log(createCatDto);
  //   res.status(HttpStatus.OK).json({
  //     message: '参数校验成功',
  //   });
  // }

  @Put()
  @UsePipes(ValidationPipe) // @UsePipes(new ValidationPipe())
  async create(@Body() createCatDto: CreateCatDto, @Response() res) {
    // this.catsService.create(createCatDto);
    res.status(HttpStatus.OK).json({
      message: '参数校验成功',
    });
  }
}

// @Request()	req
// @Response() @Res()*	res
// @Next()	next
// @Session()	req.session
// @Param(key?: string)	req.params / req.params[key]
// @Body(key?: string)	req.body / req.body[key]
// @Query(key?: string)	req.query / req.query[key]
// @Headers(name?: string)	req.headers / req.headers[name]
// @Ip()

// @Put() 、 @Delete()、 @Patch()、 @Options()、 @Head()、@All()。

// 状态码
// @HttpCode(204)
