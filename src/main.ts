import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import ConfigService from './utils/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerSetup = ConfigService.swaggerSetup;
  let builder = new DocumentBuilder()
    .setTitle(swaggerSetup.title)
    .setDescription(swaggerSetup.description)
    .setVersion(swaggerSetup.version);
  swaggerSetup.tags.forEach((tag) => {
    builder = builder.addTag(tag);
  });
  const config = builder.build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerSetup.path, app, document);

  await app.listen(3001);
}
bootstrap();
