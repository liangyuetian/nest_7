import { HttpService, Injectable } from '@nestjs/common';
import { of } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { delayWhen, expand, last, map, take } from 'rxjs/operators';

@Injectable()
export class StressTestApiService {
  port = 0;
  take = 10000;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.port = this.configService.get('base.port');
  }

  // 使用装饰api
  getApiPropertyTimeSource$() {
    return this.httpService.post(
      `http://127.0.0.1:${this.port}/swagger/tutorials`,
      {
        id: 2,
        name: '哈哈',
        email: 'pt_liangyue@outlook.com',
      },
    );
  }

  // 不使用装饰api
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

  // 使用装饰api
  getSetApiPropertyTime() {
    return of(Date.now()).pipe(
      expand((time) =>
        of(time).pipe(delayWhen(() => this.getApiPropertyTimeSource$())),
      ),
      take(this.take),
      last(),
      map((time) => [Date.now() - time, this.take]),
    );
  }

  // 不使用装饰api
  getNoApiPropertyTime() {
    return of(Date.now()).pipe(
      expand((time) =>
        of(time).pipe(delayWhen(() => this.getNoApiPropertyTimeSource$())),
      ),
      take(this.take),
      last(),
      map((time) => [Date.now() - time, this.take]),
    );
  }
}
