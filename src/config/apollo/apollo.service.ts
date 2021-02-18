import { Injectable } from '@nestjs/common';
import { asyncScheduler, Observable, ReplaySubject } from 'rxjs';

export interface ApolloConfigCache {
  PORT: string;
  LOG_PATH: string;
  API_HOST: string;
  DATABASE_HOST: string;
  DATABASE_PORT: string;
  DATABASE_USER: string;
  DATABASE_PWD: string;
  DATABASE_LIB: string;
  REDIS_HOST: string;
  REDIS_PORT: string;
  REDIS_PWD: string;
  RABBITMQ_HOST: string;
  RABBITMQ_PORT: string;
  RABBITMQ_USER: string;
  RABBITMQ_PWD: string;
}

@Injectable()
export class ApolloService {
  private source$ = new ReplaySubject<ApolloConfigCache>();

  constructor() {
    asyncScheduler.schedule(() => {
      this.source$.next({
        PORT: '3002',
        LOG_PATH: './logs',
        API_HOST: 'http://localhost:3003',
        DATABASE_HOST: '127.0.0.1',
        DATABASE_PORT: '3306',
        DATABASE_USER: 'root',
        DATABASE_PWD: '123456',
        DATABASE_LIB: 'nest',
        REDIS_HOST: '',
        REDIS_PORT: '',
        REDIS_PWD: '',
        RABBITMQ_HOST: '',
        RABBITMQ_PORT: '',
        RABBITMQ_USER: '',
        RABBITMQ_PWD: '',
      });
    });
  }

  getApolloConfig(): Observable<ApolloConfigCache> {
    return this.source$;
  }
}
