import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const swaggerDocumentConfig = new DocumentBuilder()
  .setTitle('fe-250406')
  .setDescription('fe-250406')
  .setVersion('1')
  .build();

export function setupSwaggerDocument(app: INestApplication) {
  const swaggerDocument = SwaggerModule.createDocument(
    app,
    swaggerDocumentConfig,
  );

  SwaggerModule.setup('/api-docs', app, swaggerDocument);
}
