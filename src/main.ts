/**
 * @author: ntwari egide
 * @description: main entry point of the application
 */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors()

  app.use(helmet());


  const config = new DocumentBuilder()
    .setTitle('Fix and fork apis documentation')
    .setDescription('Platform of posting solutions of coding bugs and how to fix them, powering open source development')
    .setVersion('1.0')
    .addTag('Users')
    .addTag('Post-Types')
    .addTag('Posts')
    .build()


  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('swagger-ui', app, document)

  await app.listen(process.env.PORT || 3000);
  
}
bootstrap();
