import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule as OConfigModule, ConfigService } from '@nestjs/config';
import { mysqlConfig } from './database.config';

@Global()
@Module({
  imports: [OConfigModule],
  providers: [ConfigService],
  exports: [OConfigModule, ConfigService],
})
export class ConfigModule {
  static forRoot(): DynamicModule {
    const env = process.env.NODE_ENV || 'production';

    return {
      module: ConfigModule,
      imports: [
        OConfigModule.forRoot({
          isGlobal: true,
          envFilePath: [`${__dirname}/${env}.env`],
          load: [mysqlConfig],
        }),
      ],
      exports: [OConfigModule],
    };
  }
}
