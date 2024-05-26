import { addInquiry } from "@/lib/db";
import { getEnv } from "@/lib/get-env";
import { getWaitingList, registerNewsletter } from "@/lib/newsletter";
import {
	Configuration,
	type EmailMessageData,
	EmailsApi,
} from "@elasticemail/elasticemail-client-ts-axios";
import type { APIRoute } from "astro";
import { config as dotEnvConfig } from "dotenv";
import emailConfig from "../../config.json";

dotEnvConfig();

export const prerender = false;

const config = new Configuration({
	apiKey: getEnv("ELASTIC_MAIL_API_KEY"),
});

export const POST: APIRoute = async ({ params, request }) => {
	if (request.headers.get("Content-Type") === "application/json") {
		const body = await request.json();
		const emailsApi = new EmailsApi(config);

		// add to waiting list
		if (body.subject.indexOf("Waiting List Request") > -1) {
			await registerNewsletter(getWaitingList(), body.email);
		} else {
			await addInquiry({
				name: body.name,
				email: body.email,
				phone: body.phone,
				companyName: body.companyName,
				message: body.message,
				subject: body.subject,
				audience:
					body.subject.indexOf("Inbound Contact Form") > -1
						? "contact-sales"
						: "live-demo",
			});
		}

		const emailMessageData: EmailMessageData = {
			Recipients: [
				{
					Email: emailConfig.email,
				},
			],
			Content: {
				Body: [
					{
						ContentType: "PlainText",
						Charset: "utf-8",
						Content: `${body.message}

---
Der fogende Link würde die Zustellung dieser E-Mails beenden:`,
					},
				],
				From: `${body.name} <${emailConfig.mailChannelsFromEmail}>`,
				ReplyTo: body.email,
				Subject: body.subject,
			},
		};

		try {
			const result = await emailsApi.emailsPost(emailMessageData);
			return new Response(
				JSON.stringify({ success: true, error: result.statusText }),
				{ status: 200 },
			);
		} catch (e) {
			console.log(e);

			return new Response(JSON.stringify({ success: false, error: e }), {
				status: 500,
			});
		}
	}
	return new Response(
		JSON.stringify({ success: false, error: "Invalid request" }),
		{ status: 500 },
	);
};
