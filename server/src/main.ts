import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { testConnection } from './database/connection';
import user_router from './routes/user.Router';
import * as dotenv from 'dotenv';
import health_check_router from './routes/health_check.router';

dotenv.config();

async function bootstrap() {
  try {
    await testConnection();
    const app = await NestFactory.create(AppModule);

    app.use('/api/v1/user', user_router);
    app.use('/api/v1/health_check', health_check_router);

    await app.listen(3000);
  } catch (err) {
    console.log(err);
  }

}

bootstrap();
