import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  

  app.enableCors()

  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }))

  const config = new DocumentBuilder()
  .setTitle('Gestão de comércio - APIs')
  .setDescription('Gestão de comércio documentation API')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  try {
    await app.listen(3000);

    console.log(`Server running on port 3000!`)
  } catch (error) {
    console.log(`Error on running server: `, error)
  }
}
bootstrap();
