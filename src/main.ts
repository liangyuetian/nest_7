import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './core/filter';
// const swStats = require('swagger-stats');
// const apiSpec = require('swagger.json');
import * as swStats from 'swagger-stats';

declare const module: any;

async function bootstrap() {
  const fastifyAdapter = new FastifyAdapter();
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter,
    {
      logger: ['error', 'warn'],
      // 是否在错误时中止该过程。默认情况下，该过程被退出。传递false可以覆盖默认行为。如果传递了false，则Nest不会退出应用程序，而是会重新引发异常。
      abortOnError: false,
    },
  );

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  // app.use(swStats.getFastifyPlugin);
  fastifyAdapter.register(swStats.getFastifyPlugin); // /swagger-stats/metrics

  const options = new DocumentBuilder()
    .setTitle('API列表')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 8942;
  await app.listen(port);
  console.log(`服务地址：http://localhost:${port}`);
  console.log(`api文档地址：http://localhost:${port}/api-doc`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
