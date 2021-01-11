import { Controller, Get, HttpStatus, Inject, Response } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { ConfigService, ConfigType } from '@nestjs/config';
import { databaseConfig } from '../config/database.config';

@ApiTags('users')
@ApiHeader({
  name: 'Authorization',
  description: '用户 token',
})
@Controller('users')
export class UsersController {
  constructor(
    private configService: ConfigService,
    @Inject(databaseConfig.KEY)
    private dbConfig: ConfigType<typeof databaseConfig>,
  ) {}
  @Get()
  getUser(@Response() res) {
    res.status(HttpStatus.OK).json({});
  }
}
