import { HttpService, Injectable } from '@nestjs/common';
import { of } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { delayWhen, map } from 'rxjs/operators';

@Injectable()
export class StressTestApiService {
  port = 0;

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.port = this.configService.get('base.port');
  }

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
