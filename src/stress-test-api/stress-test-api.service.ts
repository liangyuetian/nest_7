import { HttpService, Injectable } from '@nestjs/common';
import { of, forkJoin } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { concatMap, delay, delayWhen, map } from 'rxjs/operators';

@Injectable()
export class StressTestApiService {
  port = 0;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.port = this.configService.get('base.port');
    // const source = of(2000, 1000);
    // // 将内部 observable 映射成 source，当前一个完成时发出结果并订阅下一个
    // const example = source.pipe(
    //   concatMap((val) => of(`Delayed by: ${val}ms`).pipe(delay(val))),
    // );
    // // 输出: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
    // const subscribe = example.subscribe((val) =>
    //   console.log(`With concatMap: ${val}`),
    // );
  }

  getApiPropertyTimeSource$() {
    return forkJoin(
      Array.from(Array(10), () =>
        this.httpService.post(
          `http://127.0.0.1:${this.port}/swagger/tutorials`,
          {
            id: 2,
            name: '哈哈',
            email: 'pt_liangyue@outlook.com',
          },
        ),
      ),
    );
  }

  getNoApiPropertyTimeSource$() {
    return this.httpService.post(
      `http://127.0.0.1:${this.port}/swagger/no-property`,
      {
        id: 2,
        name: '哈哈',
        email: 'pt_liangyue@outlook.com',
      },
    );
  }

  getSetApiPropertyTime() {
    return of(Date.now()).pipe(
      delayWhen(() => this.getApiPropertyTimeSource$()),
      map((data) => {
        return Date.now() - data;
      }),
    );
  }

  getNoApiPropertyTime() {
    return of(Date.now()).pipe(
      delayWhen(() => this.getNoApiPropertyTimeSource$()),
      map((data) => {
        return Date.now() - data;
      }),
    );
  }
}
