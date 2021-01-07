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
  SetMetadata,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { Connection } from 'typeorm';
import { CreateCatDto } from './create-cat.dto';
import { RolesGuard } from '../common/guard/roles.guard';
import { Roles } from './roles.decorator';
import { LoggingInterceptor } from '../common/interceptor/logging.interceptor';
import { T } from './entity/t.entity';
// import { ValidationPipe } from '../common/pipe/validate.pipe';
// import { ParseIntPipe } from '../common/pipe/parse-int.pipe';
import { APP_INTERCEPTOR } from '@nestjs/core';
import {
  ApiHeader,
  ApiTags,
  ApiAcceptedResponse,
  ApiOAuth2,
} from '@nestjs/swagger';

@ApiTags('cats')
@ApiHeader({
  name: 'Authorization',
  description: 'Auth token',
})
@Controller('cats')
// @UseGuards(new RolesGuard())
// @UseInterceptors(LoggingInterceptor) // 添加拦截器
export class CatsController {
  constructor(private readonly connection: Connection) {}
  @Get()
  async getHello(@Req() request: Request, @Response() response, @Next() next) {
    response.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
    });
  }

  @Get(':id')
  async getId(@Param('id', new ParseIntPipe()) id, @Response() response) {
    const data = await this.connection.query('select * from T limit 1');

    response.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      data: {
        id: id,
        type: typeof id,
        list: data,
      },
    });
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

  @Put()
  @Roles('admin')
  @UsePipes(ValidationPipe) // @UsePipes(new ValidationPipe())
  async create(@Body() createCatDto: CreateCatDto, @Response() res) {
    // this.catsService.create(createCatDto);
    res.status(HttpStatus.OK).json({
      message: 'put success',
    });
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

  @Post('add')
  async addTColumn(@Body() body: { s: string; k: string }) {
    // const data = await this.connection.manager.find(T);
    const t = new T();
    // t.ID = 802;
    t.k = 'k1';
    t.s = 's1';
    const data = await this.connection.manager.save(t);

    // console.log(data);
    return true;
    // const data = await this.connection.query('select * from T limit 1');
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
