import { Controller, Get, HttpStatus, Response } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUser(@Response() res) {
    res.status(HttpStatus.OK).json({});
  }
}
