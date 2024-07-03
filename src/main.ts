import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Env } from "@utils";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.setGlobalPrefix(Env.GLOBAL_PREFIX);
	const config = new DocumentBuilder()
		.setTitle("Hello App")
		.setDescription("Hello App API document")
		.setVersion("1.0")
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("api/docs", app, document);

	await app.listen(Env.LISTEN_PORT);
}
bootstrap();
