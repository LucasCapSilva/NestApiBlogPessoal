import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() { 
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('API - Blog Pessoal')
  .setDescription('Projeto API Spring - Blog Pessoal')
  .setContact("Lucas Capelotto da Silva","http://www.generationbrasil.online","generation@email.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('', app, document);
  await app.listen(3000);
}
bootstrap();
