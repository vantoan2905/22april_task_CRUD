import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { testConnection } from './database/connection';
import * as dotenv from 'dotenv';
import { ExpressAdapter } from '@nestjs/platform-express';
import  express from 'express';
import router from './routes';
// dotenv.config();

// async function bootstrap() {
//   try {
//     await testConnection();

//     const server = express();
//     server.use(express.json()); 

//     server.use('/api/v1/user', user_router);
//     server.use('/api/v1/health_check', health_check_router);

//     const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

//     await app.listen(3000);
//   } catch (err) {
//     console.log(err);
//   }
// }

// bootstrap();


dotenv.config();

async function bootstrap() {
  try {
    await testConnection();

    const server = express();
    server.use(express.json());

    server.use('/api/v1', router);
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

    await app.listen(3000);
  } catch (err) {
    console.log(err);
  }
}

bootstrap();