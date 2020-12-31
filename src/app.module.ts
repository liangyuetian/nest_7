import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { RedirectUriModule } from './redirect-uri/redirect-uri.module';

@Module({
  imports: [
    CommonModule,
    AuthModule,
    UsersModule,
    CatsModule,
    TypeOrmModule.forRoot({
      // https://typeorm.io/#/connection-options
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'l',
      entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    RedirectUriModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('*');
    // consumer.apply(LoggerMiddleware).forRoutes({
    //   path: '*',
    //   method: RequestMethod.ALL,
    // });
    // 多个中间件
    // consumer.apply(HttpMiddleware, LoggerMiddleware).forRoutes(CatsController);
  }
}
