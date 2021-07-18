import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TransformerInterceptor } from './interceptor/transformer.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformerInterceptor())

  const config = new DocumentBuilder()
    .setTitle('Awesome blog server')
    .setDescription('Awesome blog server')
    .setVersion('0.01')
    .addTag('app')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidoc', app, document);

  await app.listen(3000);
}
bootstrap();
