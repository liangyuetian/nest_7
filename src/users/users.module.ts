import {
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    OnApplicationShutdown {
  onModuleInit(): any {
    console.log('初始化主模块后调用');
  }

  onApplicationBootstrap(): any {
    console.log('在应用程序完全启动并引导后调用');
  }

  onModuleDestroy(): any {
    console.log('在Nest销毁主模块(app.close()方法之前进行清理)');
  }

  onApplicationShutdown(signal?: string): any {
    console.log('响应系统信号(当应用程序关闭时，例如SIGTERM)', signal);
  }
}
