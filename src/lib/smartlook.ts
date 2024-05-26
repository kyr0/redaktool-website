import { getEnv } from "@/lib/get-env";
import Smartlook from "smartlook-client";
import { CookieConsent } from "./../components/CookieConsentComponent";

export interface UserToTrack {
	email: string;
	name?: string;
	phone?: string;
	companyName?: string;
}

export const init = () => {
	if (typeof localStorage === "undefined") {
		return;
	}

	const cookieConsent = JSON.parse(
		localStorage.getItem("cookie-consent") || "{}",
	);

	if (!cookieConsent) {
		return;
	}

	if (cookieConsent?.acceptedServices?.includes("smartlook")) {
		Smartlook.init(import.meta.env.PUBLIC_SMARTLOOK_API_KEY, { region: "eu" });
		console.log("Smartlook initialized");
	}
};

export const sha256 = async (str: string) => {
	// Normalize the email
	const normalized = str.trim().toLowerCase();

	// Convert the string to a Uint8Array
	const encoder = new TextEncoder();
	const data = encoder.encode(normalized);

	// Hash the data using SHA-256
	const hashBuffer = await crypto.subtle.digest("SHA-256", data);

	// Convert the hash to a hex string for easy display
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
};

export const track = async (
	eventName: string,
	data?: any,
	user?: UserToTrack,
) => {
	init();
	if (user) {
		Smartlook.identify(await sha256(user.email), user as any);
	}
	Smartlook.track(eventName, data || {});
};
