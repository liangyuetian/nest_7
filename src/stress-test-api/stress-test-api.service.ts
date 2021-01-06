import { HttpService, Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class StressTestApiService {
  constructor(private httpService: HttpService) {}

  getSetApiPropertyTime() {
    return of(20);
  }

  getNoApiPropertyTime() {
    return of(20);
  }
}
