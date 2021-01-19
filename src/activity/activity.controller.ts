import {
  Controller,
  Get,
  HttpStatus,
  Next,
  Req,
  Res,
  Request,
  Post,
} from '@nestjs/common';
import { Connection } from 'typeorm';
import { ActivityEntity } from './entity/activity.entity';

@Controller('activity')
export class ActivityController {
  constructor(private readonly connection: Connection) {}

  @Get()
  getActivity(@Req() request: Request, @Res() res, @Next() next) {
    res.status(HttpStatus.OK);
    return [];
  }

  @Post()
  async addActivity(@Req() request: Request, @Res() res) {
    const activity = new ActivityEntity();

    activity.activity_main = {
      name: '分享拉新',
      desc: '拯救世界',
    };
    activity.activity_name = '分享拉新活动';
    activity.start_time = new Date().toLocaleDateString();
    activity.end_time = new Date().toLocaleDateString();
    const data = await this.connection.manager.save(activity);
    res.status(HttpStatus.OK).send(data);
  }
}
