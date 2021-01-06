import { Controller, Get, HttpStatus, Response } from '@nestjs/common';
import { StressTestApiService } from './stress-test-api.service';

@Controller('stress-test-api')
export class StressTestApiController {
  constructor(private stressTestApiService: StressTestApiService) {}

  @Get('set-api')
  getSetApiProperty(@Response() res) {
    this.stressTestApiService.getSetApiPropertyTime().subscribe((data) => {
      res.status(HttpStatus.OK).send({ msg: `使用装饰api耗时：${data}` });
    });
  }
  @Get('no-api')
  getNoApiProperty(@Response() res) {
    this.stressTestApiService.getNoApiPropertyTime().subscribe((data) => {
      res.status(HttpStatus.OK).send({ msg: `不使用装饰api耗时：${data}` });
    });
  }
}
