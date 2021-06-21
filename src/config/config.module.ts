import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule as OConfigModule, ConfigService } from '@nestjs/config';
import { databaseConfig } from './database.config';
import { ApolloService } from './apollo/apollo.service';
import { validate } from './env.validate';
import { resolve } from 'path';
import { Env } from './env';

@Global()
@Module({
  imports: [OConfigModule],
  providers: [ConfigService, ApolloService],
  exports: [OConfigModule, ConfigService],
})
export class ConfigModule {
  static forRoot(): DynamicModule {
    const env = process.env.NODE_ENV || 'production';
    // console.log(env);
    // console.log(eval(`${env}Env`));
    // console.log(1);
    Object.assign(process.env, Env[env]);
    return {
      module: ConfigModule,
      imports: [
        OConfigModule.forRoot({
          isGlobal: true,
          // envFilePath: [resolve(__dirname, `config/${env}.env`)],
          load: [databaseConfig],
          validate,
        }),
      ],
      exports: [OConfigModule],
    };
  }
}
