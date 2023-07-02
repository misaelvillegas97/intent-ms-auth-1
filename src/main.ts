import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { microservicesOptions } from './config/microservices.config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: microservicesOptions,
  });
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();