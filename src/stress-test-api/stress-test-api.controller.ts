import { Controller, Get, HttpStatus, Response } from '@nestjs/common';
import { StressTestApiService } from './stress-test-api.service';

@Controller('stress-test-api')
export class StressTestApiController {
  constructor(private stressTestApiService: StressTestApiService) {}

  @Get('set-api')
  getSetApiProperty(@Response() res) {
    this.stressTestApiService.getSetApiPropertyTime().subscribe((data) => {
      res.status(HttpStatus.OK).send({
        title: `使用装饰api`,
        count: `循环次数：${data[1]}`,
        totalTime: `总耗时：${data[0] / 1000}s`,
        averageTime: `平均耗时：${data[0] / data[1]}ms`,
      });
    });
  }
  @Get('no-api')
  getNoApiProperty(@Response() res) {
    this.stressTestApiService.getNoApiPropertyTime().subscribe((data) => {
      res.status(HttpStatus.OK).send({
        title: `不使用装饰api`,
        count: `循环次数：${data[1]}`,
        totalTime: `总耗时：${data[0] / 1000}s`,
        averageTime: `平均耗时：${data[0] / data[1]}ms`,
      });
    });
  }
}
