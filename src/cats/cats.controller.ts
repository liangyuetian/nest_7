import {
  Controller,
  Get,
  Header,
  HttpCode,
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
    // console.log(request, response);
    setTimeout(() => {
      next(1);
    }, 1000);
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