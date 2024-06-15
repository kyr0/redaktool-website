import { type APIRoute } from "astro";
import { sendEmail } from "@/lib/email";
import { addFeedback } from "@/lib/db";
import { config as dotEnvConfig } from "dotenv";

export interface FeedbackInput {
	url: string; // URL of the page where the feedback was submitted
	email: string; // Email of the user
	name: string; // Name of the user
	usageStatistics?: string;
	message: string;
	smartlookSessionId?: string;
}

export const prerender = false;

dotEnvConfig();

export const POST: APIRoute = async ({ request }) => {
	if (request.headers.get("Content-Type") === "application/json") {
		try {
			const { url, name, email, usageStatistics, message, smartlookSessionId } =
				(await request.json()) as FeedbackInput;

			console.log("usageStatistics", usageStatistics);
			console.log("message", message);
			console.log("smartlookSessionId", smartlookSessionId);

			await addFeedback({
				email,
				name,
				usageStatistics,
				message,
				smartlookSessionId,
				url,
				sentDate: new Date(),
			});

			await sendEmail({
				from: email,
				subject: `RedakTool.ai - Feedback from ${name}`,
				text: `URL:  ${new URL(url).pathname}${
					new URL(url).hash
				}\n\nFeedback: ${message}${
					usageStatistics ? `\n\nUsage Statistics: ${usageStatistics}` : ""
				}${
					smartlookSessionId
						? `\n\nSmartlook Session ID: ${smartlookSessionId}`
						: ""
				}`,
			});

			return new Response(
				JSON.stringify({
					success: true,
				}),
				{
					status: 200,
				},
			);
		} catch (e) {
			console.error("ERROR", e);
			return new Response(JSON.stringify({ type: "error", error: e.message }), {
				status: 500,
			});
		}
	}
	return new Response(
		JSON.stringify({ success: false, error: "Invalid request" }),
		{ status: 500 },
	);
};
