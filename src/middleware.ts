import { config as dotEnvConfig } from "dotenv";
import { defineMiddleware } from "astro:middleware";

dotEnvConfig();

export const onRequest = defineMiddleware(async (context, next) => {
	let response: Response | undefined;
	return await next();
});
