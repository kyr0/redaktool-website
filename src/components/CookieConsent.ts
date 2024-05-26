export type CookieCategory = "functional" | "essential" | "marketing" | "other";

export const categories: Array<CookieCategory> = [
	"essential",
	"functional",
	"marketing",
	"other",
];

export interface CookieOrigin {
	/** id of the cookie and repsective <script> injection */
	id: string;
	/** name of the service or tool setting a cookie */
	name: string;
	/** description of the service or tool and it's cookie use */
	description: {
		[lang in Language]: string;
	};
	/** domain, the cookie is coming from (might be a 3rd party cookie) */
	domain?: string;
	/** state of consent */
	consent: boolean;
	/** is marked as essential */
	category: CookieCategory;
	/** URL for privacy policy statements */
	url?: {
		[lang in Language]: string;
	};
	/** cannot be changed by the user */
	disabled?: boolean;
	/** unique names of the cookies, only relevant for non-3rd-party cookies, as 3rd party cookies cannot be deleted actively */
	cookies?: Array<string>;
	/** data collected as names */
	dataCollected?: {
		[lang in Language]: Array<string>;
	};
}

export interface Translation {
	titleText: string;
	activate: string;
	integration: string;
	isDeactivatedMessage: string;
	privacySettingsButtonText: string;
	text: string;
	privacyPolicyLinkText: string;
	legalNoticeLinkText: string;
	moreInformationLinkText: string;
	denyAllButtonText: string;
	acceptAndCloseButtonText: string;
	creditsText: string;
	privacySettingsTitleText: string;
	privacySettingsText: string;
	categoriesTabTitleText: string;
	serivcesTabTitleText: string;
	categories: {
		functional: string;
		essential: string;
		marketing: string;
		other: string;
		functionalText: string;
		essentialText: string;
		marketingText: string;
		otherText: string;
	};
	saveButtonText: string;
	moreTitle: string;
	moreText: string;
	thirdPartyNote: string;
}

export type Language = "de" | "en";

export type Translations = {
	[lang in Language]: Translation;
};

export interface CookieConsentConfig {
	defaultLanguage: Language;
	showFloatingButton: boolean;
	privacyPolicyUrl?: {
		[lang in Language]: string;
	};
	legalNoticeUrl?: {
		[lang in Language]: string;
	};
	cookieOrigins: Array<CookieOrigin>;
}

export type LanguageNames = { [lang in Language]: string };

export const languageNames: LanguageNames = {
	de: "Deutsch",
	en: "English",
};

export const translations: Translations = {
	en: {
		activate: "Activate",
		integration: "integration",
		isDeactivatedMessage: "was deactivated due to missing consent.",
		privacySettingsButtonText: "Privacy Settings",
		titleText: "🍪 We value your privacy",
		text: `We and our partners are using technologies like Cookies or Targeting and process personal data like IP-address or browser information in order to personalize the advertisement you see. These technologies may access your device and help us to show you more relevant ads and improve your internet experience.
We also use it in order to measure results or align our website content. Because we value your privacy, we are herewith asking your permission to use the following technologies. 
You can always change/withdraw your consent later by clicking on the settings button on the left lower corner of the page.`,
		privacyPolicyLinkText: "Privacy Policy",
		legalNoticeLinkText: "Legal Notice",
		moreInformationLinkText: "More Information",
		denyAllButtonText: "Deny",
		acceptAndCloseButtonText: "Accept and close",
		creditsText: "Powered by Astro Consent Management",
		privacySettingsTitleText: "Privacy Settings",
		privacySettingsText:
			"This tool helps you to select and deactivate various tags / trackers / analysis tools used on this website.",
		categoriesTabTitleText: "Categories",
		serivcesTabTitleText: "Services",
		categories: {
			essential: "Essential",
			functional: "Functional",
			marketing: "Marketing",
			other: "Other data processing",
			essentialText:
				"These tags are required for the basic functions of the website.",
			functionalText:
				"These tags enable us to analyze website usage so that we can measure and improve its performance.",
			marketingText:
				"Marketing/target cookies are usually used to show you advertisements that meet your interests. When you visit another website, your browser's cookie is recognized and selected ads are displayed to you based on the information stored in this cookie (art. 6 par. 1 p. 1 a) GDPR).",
			otherText:
				"Within our organization we use other tools for data processing, such as our CRM or our newsletter provider. These are also listed here for informational purposes. However, data is collected only after a certain interaction, for example, when you agree on a demo or subscribe to the newsletter. If you wish to object to data processing by these processors, please contact us.",
		},
		saveButtonText: "Save",
		moreTitle: "🍪 Privacy Settings",
		moreText:
			"This tool helps you to select and deactivate various tags / trackers / analysis tools used on this website.",
		thirdPartyNote:
			"This is integrated with a third party. If you later decide to change your preferences, please remember to manually clear any previously stored cookies through your browser's privacy settings.",
	},
	de: {
		activate: "Aktivieren",
		integration: "Integration",
		isDeactivatedMessage: "wurde deaktiviert, da die Einwilligung fehlt.",
		privacySettingsButtonText: "Datenschutz-Einstellungen",
		titleText: "🍪 Wir schätzen Ihre Privatsphäre",
		text: `Wir und unsere Partner verwenden Technologien wie Cookies oder Targeting und verarbeiten personenbezogene Daten wie IP-Adresse oder Browserinformationen, um die angezeigte Werbung zu personalisieren. Diese Technologien können auf Ihr Gerät zugreifen und helfen uns, Ihnen relevantere Anzeigen zu zeigen und Ihre Webseitenerfahrung zu verbessern.
Wir nutzen diese Technologien zudem, um Ergebnisse zu messen oder unsere Website-Inhalte besser auszurichten. Da wir Ihre Privatsphäre schätzen, bitten wir Sie hiermit um Ihre Einwilligung, die folgenden Technologien zu verwenden.
Sie können diese jederzeit später ändern/widerrufen, indem Sie auf die Schaltfläche Einstellungen in der linken unteren Ecke der Seite klicken.`,
		privacyPolicyLinkText: "Datenschutzerklärung",
		legalNoticeLinkText: "Impressum",
		moreInformationLinkText: "Mehr Informationen",
		denyAllButtonText: "Ablehnen",
		acceptAndCloseButtonText: "Akzeptieren und schließen",
		creditsText: "Powered by Astro Consent Management",
		privacySettingsTitleText: "Privatsphäre-Einstellungen",
		privacySettingsText:
			"Mit diesem Tool können Sie verschiedene auf dieser Website verwendete Tags / Tracker / Analyse-Tools auswählen und deaktivieren.",
		categoriesTabTitleText: "Kategorien",
		serivcesTabTitleText: "Services",
		categories: {
			essential: "Essentiell",
			functional: "Funktionell",
			marketing: "Marketing",
			other: "Andere Datenverarbeitungen",
			essentialText:
				"Diese Tags werden für die Grundfunktionen der Website benötigt.",
			functionalText:
				"Mit diesen Tags können wir die Nutzung der Website analysieren, um deren Leistung zu messen und zu verbessern.",
			marketingText:
				"Marketing- / Ziel-Cookies werden normalerweise verwendet, um Ihnen Anzeigen anzuzeigen, die Ihren Interessen entsprechen. Wenn Sie eine andere Website besuchen, wird das Cookie Ihres Browsers erkannt und ausgewählte Anzeigen werden Ihnen basierend auf den in diesem Cookie gespeicherten Informationen angezeigt (Art. 6 Abs. 1 S. 1 a) DSGVO).",
			otherText:
				"Innerhalb unserer Organisation verwenden wir andere Tools für die Datenverarbeitung, wie z. B. unser CRM oder unseren Newsletter-Anbieter. Diese sind hier auch zu Informationszwecken aufgeführt. Daten werden jedoch erst nach einer bestimmten Interaktion erfasst, beispielsweise wenn Sie einer Demo zustimmen oder den Newsletter abonnieren. Wenn Sie der Datenverarbeitung durch diese Prozessoren widersprechen möchten, kontaktieren Sie mich bitte.",
		},
		saveButtonText: "Speichern",
		moreTitle: "🍪 Privatsphäre-Einstellungen",
		moreText:
			"Mit diesem Tool können Sie verschiedene auf dieser Website verwendete Tags / Tracker / Analyse-Tools auswählen und deaktivieren.",
		thirdPartyNote:
			"Dies ist eine Integration von Drittanbietern. Wenn Sie später Ihre Entscheidung ändern, denken Sie bitte daran, zuvor gespeicherte Cookies manuell über die Datenschutzeinstellungen Ihres Browsers zu löschen.",
	},
};

export interface CookieConsentState {
	modalOpen: boolean;
	decisionMade: boolean;
	language: Language;
	denyAll: boolean;
	acceptAll: boolean;
	moreInfoActive: boolean;
	moreServicesTabActive: boolean;
	moreCategoriesTabActive: boolean;
	acceptedCategories: Array<CookieCategory>;
	acceptedServices: Array<string>;
	uncommittedChangePending: boolean;
}

// Set a cookie
export function setCookie(name: string, value: string, days?: number): void {
	let expires = "";
	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = `; expires=${date.toUTCString()}`;
	}
	document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
}

// Get a cookie value by its name
export function getCookie(name: string): string | null {
	const cookies = new URLSearchParams(document.cookie.replace(/; /g, "&"));
	return cookies.get(name);
}

// Delete a cookie by its name
export function deleteCookie(name: string): void {
	setCookie(name, "", -1);
}

// Backup all cookies
export function backupCookies(): string {
	const cookies = new URLSearchParams(document.cookie.replace(/; /g, "&"));
	const cookiesObj: Record<string, string> = {};
	for (const [key, value] of cookies.entries()) {
		cookiesObj[key] = value;
	}
	return JSON.stringify(cookiesObj);
}

// Restore cookies from a backup
export function restoreCookies(backup: string): void {
	const cookiesObj: Record<string, string> = JSON.parse(backup);
	for (const name in cookiesObj) {
		setCookie(name, cookiesObj[name]);
	}
}

declare global {
	interface Window {
		astroCookieConsent?: CookieConsentState;
		astroCookieConsentConfig: Partial<CookieConsentConfig>;
		astroCookieConsentTranslations: Partial<Translations>;
		astroCookieConsentOnAccept: (state: CookieConsentState) => void;
		astroCookieConsentOnDeny: (state: CookieConsentState) => void;
		astroCookieConsentOnChange: (state: CookieConsentState) => void;
		astroCookieAcceptService: (serviceId: string) => void;
		astroCookieIsServiceAccepted: (serviceId: string) => boolean;
		openAstroCookieConsent: () => void;
		updateTagsActivation: () => void;
	}
}
