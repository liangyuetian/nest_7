import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule as OConfigModule, ConfigService } from '@nestjs/config';
import { baseConfig } from './base.config';
import { mysqlConfig } from './database.config';

@Global()
@Module({
  imports: [OConfigModule],
  providers: [ConfigService],
  exports: [OConfigModule, ConfigService],
})
export class ConfigModule {
  static forRoot(): DynamicModule {
    return {
      module: ConfigModule,
      imports: [
        OConfigModule.forRoot({
          isGlobal: true,
          load: [baseConfig, mysqlConfig],
        }),
      ],
      exports: [OConfigModule],
    };
  }
}
