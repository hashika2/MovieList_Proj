import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3000);

  // CORS
  app.enableCors();

  // Validations
  app.useGlobalPipes(
    new ValidationPipe({
      validationError: {
        target: false,
        value: false,
      },
    }),
  );
}
bootstrap();
