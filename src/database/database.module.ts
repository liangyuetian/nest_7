import { DynamicModule, Global, Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../config/database.config';

@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    const config = databaseConfig();
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: config.host,
          port: config.port,
          username: config.username,
          password: config.password,
          database: config.database,
          // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          entities: config.entities,
          synchronize: config.synchronize,
        }),
      ],
      exports: [TypeOrmModule],
    };
  }
}
