import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TestBodyDto } from './dto/test-body.dto';
import { TestOneApiService } from './test-one-api.service';

@Controller('test-one-api')
export class TestOneApiController {
  constructor(private testOneApiService: TestOneApiService) {}
  @Post('order') // 测试顺序并发
  order(@Body() data: TestBodyDto) {
    return this.testOneApiService.order(data);
  }
  @Post('concurrent') // 测试并发
  concurrent(@Body() data: TestBodyDto) {
    return this.testOneApiService.concurrent(data);
  }
}
