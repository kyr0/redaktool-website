import { dbConnect } from "@/lib/db";
import { getNewsletterList, registerNewsletter } from "@/lib/newsletter";
import type { APIRoute } from "astro";
import { config as dotEnvConfig } from "dotenv";

dotEnvConfig();

export const prerender = false;

export const POST: APIRoute = async ({ params, request }) => {
	if (request.headers.get("Content-Type") === "application/json") {
		const body = await request.json();
		await dbConnect();
		return await registerNewsletter(getNewsletterList(), body.email);
	}
	return new Response(
		JSON.stringify({ success: false, error: "Invalid request" }),
		{ status: 500 },
	);
};
