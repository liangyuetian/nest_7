import { HttpService, Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';

@Injectable()
export class StressTestApiService {
  port = 0;
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.port = this.configService.get('base.port');
  }

  getSetApiPropertyTime() {
    return new Observable((subscriber) => {
      const time = Date.now();
      this.httpService
        .post(`http://127.0.0.1:${this.port}/swagger/tutorials`, {
          id: 2,
          name: '哈哈',
          email: 'pt_liangyue@outlook.com',
        })
        .subscribe(() => {
          subscriber.next(Date.now() - time);
        });
    });
  }

  getNoApiPropertyTime() {
    this.httpService
      .post(`http://127.0.0.1:${this.port}/swagger/no-property`, {
        id: 2,
        name: '哈哈',
        email: 'pt_liangyue@outlook.com',
      })
      .subscribe((res) => {
        // console.log(11);
      });
    return of(20);
  }
}
