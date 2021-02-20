import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '../config/config.module';
import { DatabaseService } from './database.service';
import { AppConfigCache } from '../config/interface';
import * as Entity from './entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: (config: ConfigService<AppConfigCache>) => ({
        name: 'default',
        type: 'mysql',
        host: config.get('DATABASE_HOST'),
        port: +config.get<number>('DATABASE_PORT'),
        username: config.get('DATABASE_USER'),
        password: config.get('DATABASE_PWD'),
        database: config.get('DATABASE_LIB'),
        entities: Object.values(Entity),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
