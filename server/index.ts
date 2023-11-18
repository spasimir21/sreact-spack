import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serveStatic from 'serve-static';
import _static from '@fastify/static';
// @ts-ignore
import config from '../config.yml';
import path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  app.use(serveStatic(path.join(process.cwd(), config.appDist)));
  app.use(serveStatic(path.join(process.cwd(), config.publicRoot)));

  await app.listen(3000);
}

bootstrap();
