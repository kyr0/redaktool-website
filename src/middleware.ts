import * as Sentry from "@sentry/node";
import { config as dotEnvConfig } from "dotenv";
import { getEnv } from "./lib/get-env";
import { defineMiddleware } from "astro:middleware";

dotEnvConfig();

Sentry.init({
	dsn: getEnv("SENTRY_DSN"),
});

export const onRequest = defineMiddleware(async (context, next) => {
	let response: Response | undefined;

	try {
		response = await next();
	} catch (error) {
		Sentry.captureException(error);
	}
	return response;
});
