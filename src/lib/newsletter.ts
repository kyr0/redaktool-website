import { addToAudience } from "./db";
import { getEnv } from "./get-env";

export const prerender = false;

export const getHeaders = () => ({
	Authorization: `Basic ${btoa(
		`${getEnv("RAPIDMAIL_API_KEY")}:${getEnv("RAPIDMAIL_PASSWORD")}`,
	)}`,
	"Content-Type": "application/json",
});

export const getNewsletterList = () => "newsletter";
export const getWaitingList = () => "waiting-list";

export const registerNewsletter = async (
	listId: string,
	email: string,
): Promise<Response> => {
	try {
		const audience: ("waiting-list" | "product-updates")[] =
			listId === getWaitingList() ? ["waiting-list"] : ["product-updates"];

		await addToAudience({
			email,
			audience,
		});

		/*
		const hasRegistration = await fetch(
			`https://apiv3.emailsys.net/recipients?recipientlist_id=${listId}&email=${email}`,
			{
				method: "GET",
				headers: getHeaders(),
			},
		);

		if (!hasRegistration.ok) {
			return new Response(
				JSON.stringify({ success: false, error: hasRegistration }),
				{ status: 500 },
			);
		}

		const recipient = await hasRegistration.json();

		if (recipient.total_items === 0) {
			// create
			const result = await fetch(
				"https://apiv3.emailsys.net/recipients?send_activationmail=no",
				{
					method: "POST",
					headers: getHeaders(),
					body: JSON.stringify({
						recipientlist_id: listId,
						email: email,
						status: "active",
					}),
				},
			);

			if (!result.ok) {
				return new Response(
					JSON.stringify({ success: false, error: result.statusText }),
					{ status: 500 },
				);
			}
		}
		*/
		return new Response(JSON.stringify({ success: true }));
	} catch (e) {
		console.log(e);

		return new Response(JSON.stringify({ success: false, error: e }), {
			status: 500,
		});
	}
};
