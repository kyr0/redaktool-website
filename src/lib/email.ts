import {
	Configuration,
	type EmailMessageData,
	EmailsApi,
} from "@elasticemail/elasticemail-client-ts-axios";
import { getEnv } from "./get-env";
import emailConfig from "../config.json";

const config = new Configuration({
	apiKey: getEnv("ELASTIC_MAIL_API_KEY"),
});

export interface EmailBody {
	from: string;
	subject: string;
	text: string;
}

export const sendEmail = async (opts: EmailBody) => {
	const emailsApi = new EmailsApi(config);

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
					Content: opts.text,
				},
			],
			From: `RedakTool.ai Feedback <${emailConfig.mailChannelsFromEmail}>`,
			ReplyTo: opts.from,
			Subject: opts.subject,
		},
	};

	try {
		await emailsApi.emailsPost(emailMessageData);

		return true;
	} catch (e) {
		console.error("Error sending email", e);
		return false;
	}
};
