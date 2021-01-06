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
        .get(`http://127.0.0.1:${this.port}/swagger/tutorials`)
        .subscribe(() => {
          subscriber.next(Date.now() - time);
        });
    });
  }

  getNoApiPropertyTime() {
    return of(20);
  }
}
