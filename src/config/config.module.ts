import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule as OConfigModule, ConfigService } from '@nestjs/config';
import { databaseConfig } from './database.config';
import { ApolloService } from './apollo/apollo.service';
import { validate } from './env.validate';

@Global()
@Module({
  imports: [OConfigModule],
  providers: [ConfigService, ApolloService],
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
          load: [databaseConfig],
          validate,
        }),
      ],
      exports: [OConfigModule],
    };
  }
}
