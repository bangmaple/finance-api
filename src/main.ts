import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/modules';
import { initializeFirebaseAdminApp } from './app/utils';
import { initializeFirebaseApp } from './app/utils/firebase-app.util';

async function bootstrap() {  
  initializeFirebaseApp();
  initializeFirebaseAdminApp();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  await app.listen(3000);
}
bootstrap();
