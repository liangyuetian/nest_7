import { HttpService, Injectable } from '@nestjs/common';
import { of } from 'rxjs';
import { TestBodyDto } from './dto/test-body.dto';
import { delayWhen, expand, last, map, take } from 'rxjs/operators';

@Injectable()
export class TestOneApiService {
  constructor(private httpService: HttpService) {}
  getHttp$(data: TestBodyDto) {
    if (data.method) {
      return this.httpService.get(data.url, { params: data.params || {} });
    } else {
      return this.httpService.post(data.url, data.body || {});
    }
  }

  order(data: TestBodyDto) {
    return of(Date.now()).pipe(
      expand((time) => of(time).pipe(delayWhen(() => this.getHttp$(data)))),
      take(data.number || 1),
      last(),
      map((time) => {
        const allTime = Date.now() - time;
        return {
          count: `循环次数：${data.number}`,
          totalTime: `总耗时：${allTime / 1000}s`,
          averageTime: `平均耗时：${Math.ceil(allTime / data.number)}ms`,
        };
      }),
    );
  }
  concurrent(data: TestBodyDto) {
    return of(Date.now()).pipe(
      expand((time) => of(time).pipe(delayWhen(() => this.getHttp$(data)))),
      take(data.number),
      last(),
      map((time) => {
        const allTime = Date.now() - time;
        return {
          count: `循环次数：${data.number}`,
          totalTime: `总耗时：${allTime / 1000}s`,
          averageTime: `平均耗时：${Math.ceil(allTime / data.number)}ms`,
        };
      }),
    );
  }
}
