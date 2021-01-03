import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { baseConfig } from './config/base.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
    // 是否在错误时中止该过程。默认情况下，该过程被退出。传递false可以覆盖默认行为。如果传递了false，则Nest不会退出应用程序，而是会重新引发异常。
    abortOnError: false,
  });

  const options = new DocumentBuilder()
    .setTitle('API列表')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  const { port } = baseConfig();
  await app.listen(port);
  console.log(`服务地址：http://localhost:${port}`);
  console.log(`api文档地址：http://localhost:${port}/api-doc`);
}
bootstrap();
