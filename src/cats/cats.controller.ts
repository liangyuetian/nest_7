import {
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpException,
  HttpStatus,
  Next,
  Param,
  Post,
  Redirect,
  Req,
  Response,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
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
  getId(@Param() params) {
    return `参数：${params.id}`;
  }

  @Get(':id')
  getId2(@Param('id') id) {
    return `id：${id}`;
  }

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
    throw new HttpException('不允许删除', HttpStatus.FORBIDDEN);
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
