import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthTesterMiddleware } from './auth-tester/auth-tester.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(AuthTesterMiddleware);
  await app.listen(3000);
}
bootstrap();
