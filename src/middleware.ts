import { config as dotEnvConfig } from "dotenv";
import { defineMiddleware } from "astro:middleware";

dotEnvConfig();

export const onRequest = defineMiddleware(async (context, next) => {
	const { request } = context;

	// CORS
	const origin = request.headers.get("Origin");
	if (origin) {
		request.headers.set("Access-Control-Allow-Origin", origin);
		request.headers.set(
			"Access-Control-Allow-Methods",
			"GET, POST, PUT, DELETE, OPTIONS",
		);
		request.headers.set("Access-Control-Allow-Headers", "Content-Type");
		request.headers.set("Access-Control-Allow-Credentials", "true");
	}

	// pre-flight request
	if (request.method === "OPTIONS") {
		console.log("Middleware allowed pre-flight request, 200 OK");
		return new Response(null, { status: 200 });
	}

	let response: Response | undefined;
	return await next();
});
