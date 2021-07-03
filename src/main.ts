import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformerInterceptor } from './interceptor/transformer.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformerInterceptor())
  await app.listen(3000);
}
bootstrap();
