import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import { type } from 'os';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
//   const options= new DocumentBuilder()
//   .setTitle("TodoApp")
//   .setDescription("Todo NestApp Rest Docs")
//   .setVersion("1.0")
//   .addBearerAuth({
//     type : "http",
//     scheme : "bearer",
//     bearerFormat : "JWT",
//     name : "JWT",
//     description : "Enter JWT token",
//     in : "header",
// }, "JWT-auth").build();

// const document = SwaggerModule.createDocument(app, options);
// SwaggerModule.setup("api", app, document);

  await app.listen(5000);
}
bootstrap();
