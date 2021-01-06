import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class StressTestApiService {
  getSetApiPropertyTime() {
    return of(20);
  }

  getNoApiPropertyTime() {
    return of(20);
  }
}
