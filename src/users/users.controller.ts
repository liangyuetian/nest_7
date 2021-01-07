import { Controller, Get, HttpStatus, Response } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

@ApiTags('users')
@ApiHeader({
  name: 'Authorization',
  description: '用户 token',
})
@Controller('users')
export class UsersController {
  constructor(private configService: ConfigService) {
    // console.log(this.configService.get('base.port'));
    // console.log(this.configService.get('mysql.password'));
  }
  @Get()
  getUser(@Response() res) {
    res.status(HttpStatus.OK).json({});
  }
}
