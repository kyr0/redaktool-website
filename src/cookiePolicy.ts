import type { CookieConsentConfig } from "./components/CookieConsent";

export const cookiePolicyConfig: CookieConsentConfig = {
	defaultLanguage: "de", // TODO: double-check
	showFloatingButton: false,
	privacyPolicyUrl: {
		de: "/privacy-policy",
		en: "/privacy-policy",
	},
	legalNoticeUrl: {
		de: "/legal-notice",
		en: "/legal-notice",
	},
	cookieOrigins: [
		{
			id: "smartlook",
			name: "Smartlook",
			category: "marketing",
			consent: false,
			description: {
				de: "Smartlook ist ein Webanalyse-Tool der Firma Smartlook s.r.o., Milady Horákové 13, 602 00 Brno, Tschechische Republik. Smartlook verwendet Cookies, die Informationen enthalten, um Benutzer in Sitzungen zu identifizieren. Es werden keine persönlichen Daten in den Cookies gespeichert. Es werden Daten über das Nutzerverhalten auf der Website gesammelt und analysiert. Die Daten werden verwendet, um die Website zu verbessern und zu optimieren.",
				en: "Smartlook is a web analytics tool provided by Smartlook s.r.o., Milady Horákové 13, 602 00 Brno, Czech Republic.Smartlook makes use of cookies containing in formation to help identify users in sessions. No personal data will be stored in the cookies. Data on user behavior on the website is collected and analyzed. The data is used to improve and optimize the website.",
			},
			dataCollected: {
				de: [
					"IP-Adresse",
					"Standort",
					"Art des Betriebssystems",
					"Sprache des Betriebssystems",
					"Browsertyp",
					"Verweisende Website",
					"Interagierte Web-Elemente oder Objekte",
					"Metadaten über Aktivitäten auf der Seite",
					"Änderungen im Benutzerstatus",
					"Dauer des Seitenbesuchs",
					"Erstes Öffnen der Anwendung",
					"Mobilfunkanbieter",
					"Gerätekennung",
					"Art des Mobilgeräts",
					"Download-Status der Anwendung",
					"Nutzungsaktivität innerhalb der Anwendung",
					"Modell des Mobilgeräts",
					"Betriebssystemversion des Mobilgeräts",
					"Erhaltene Push-Benachrichtigungen",
					"Betriebssystem des Geräts für Benachrichtigungen",
					"Benutzeridentifikation für Benachrichtigungen",
					"Mobile Anwendungsanalysen (z.B. Häufigkeit, Ereignisse, aggregierte Nutzung, Leistungsdaten, Quelle des App-Stores)",
					"Informationen, die über Cookies gesammelt werden",
				],
				en: [
					"IP Address",
					"Location",
					"Type of operating system",
					"Language of the operating system",
					"Browser type",
					"Referring website",
					"Web elements or objects interacted with",
					"Metadata about activity on the Site",
					"User state changes",
					"Duration of visit to the Site",
					"First time the Application is opened",
					"Mobile carrier",
					"Device identifier",
					"Type of mobile device",
					"Application download status",
					"Usage activity within the Application",
					"Mobile device model",
					"Mobile device OS version",
					"Push notifications received",
					"Device OS for notifications",
					"User identification for notifications",
					"Mobile application analytics (e.g., frequency, events, aggregated usage, performance data, app store source)",
					"Information collected via cookies",
				],
			},
			url: {
				de: "https://help.smartlook.com/docs/privacy-policy?tid=331707484469",
				en: "https://help.smartlook.com/docs/privacy-policy?tid=331707484469",
			},
		},
		{
			id: "vercel",
			name: "Vercel",
			url: {
				de: "https://vercel.com/legal/privacy-policy",
				en: "https://vercel.com/legal/privacy-policy",
			},
			description: {
				de: `Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.

Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).

Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.

Wir setzen folgenden Hoster ein:

Vercel Inc.
340 S Lemon Ave #4133
Walnut, CA 91789
USA
`,
				en: `This website is hosted by an external service provider (hoster). The personal data collected on this website is stored on the hoster's servers. This may include, but is not limited to, IP addresses, contact requests, meta and communication data, contract data, contact details, names, website accesses and other data generated via a website.

The use of the hoster is for the purpose of fulfilling the contract with our potential and existing customers (Art. 6 para. 1 lit. b DSGVO) and in the interest of a secure, fast and efficient provision of our online offer by a professional provider (Art. 6 para. 1 lit. f DSGVO).

Our hoster will process your data only to the extent necessary to fulfil its performance obligations and will follow our instructions with regard to this data.

We use the following hoster:

Vercel Inc.
340 S Lemon Ave #4133
Walnut, CA 91789
USA`,
			},
			dataCollected: {
				de: [
					"IP-Adresse",
					"Standort-Informationen",
					"Datum und Uhrzeit der Anfrage",
					"Verwendete Sprache",
					"Cookies und ähnliche Technologien",
				],
				en: [
					"IP address",
					"Location information",
					"Date and time of the request",
					"Language used",
					"Cookies and similar technologies",
				],
			},
			category: "essential",
			consent: true,
		},
		{
			id: "cloudflare",
			name: "Cloudflare",
			url: {
				de: "https://www.cloudflare.com/de-de/privacypolicy/",
				en: "https://www.cloudflare.com/privacypolicy/",
			},
			description: {
				de: `Wir nutzen den Service „Cloudflare“. Anbieter ist die Cloudflare Inc., 101 Townsend St., San Francisco, CA 94107, USA (im Folgenden „Cloudflare”).

Cloudflare bietet ein weltweit verteiltes Content Delivery Network mit DNS an. Dabei wird technisch der Informationstransfer zwischen Ihrem Browser und unserer Website über das Netzwerk von Cloudflare geleitet. Das versetzt Cloudflare in die Lage, den Datenverkehr zwischen Ihrem Browser und unserer Website zu analysieren und als Filter zwischen unseren Servern und potenziell bösartigem Datenverkehr aus dem Internet zu dienen. Hierbei kann Cloudflare auch Cookies oder sonstige Technologien zur Wiedererkennung von Internetnutzern einsetzen, die jedoch allein zum hier beschriebenen Zweck verwendet werden.

Der Einsatz von Cloudflare beruht auf unserem berechtigten Interesse an einer möglichst fehlerfreien und sicheren Bereitstellung unseres Webangebotes (Art. 6 Abs. 1 lit. f DSGVO).`,
				en: `We use the service "Cloudflare". The provider is Cloudflare Inc, 101 Townsend St., San Francisco, CA 94107, USA (hereinafter "Cloudflare").

Cloudflare offers a worldwide distributed content delivery network with DNS. Technically, this means that the information transfer between your browser and our website is routed via Cloudflare's network. This enables Cloudflare to analyze the traffic between your browser and our website and to serve as a filter between our servers and potentially malicious traffic from the Internet. Cloudflare may also use cookies or other technologies to recognize Internet users, but these are used solely for the purpose described here.

The use of Cloudflare is based on our legitimate interest in providing our website as free of errors and as secure as possible (Art. 6 para. 1 lit. f DSGVO).`,
			},
			dataCollected: {
				de: [
					"IP-Adresse",
					"Standort-Informationen",
					"Datum und Uhrzeit der Anfrage",
					"Verwendete Sprache",
					"Cookies und ähnliche Technologien",
				],
				en: [
					"IP address",
					"Location information",
					"Date and time of the request",
					"Language used",
					"Cookies and similar technologies",
				],
			},
			category: "essential",
			consent: true,
		} /*{
      id: 'mixpanel',
      name: 'Mixpanel',
      domain: 'mixpanel.com',
      url: {
        de: 'https://mixpanel.com/legal/privacy-policy',
        en: 'https://mixpanel.com/legal/privacy-policy/',
      },
      description: {
        de: 'Mixpanel ist ein Webanalyse-Tool der Firma Mixpanel Inc., One Front Street, Floor 28, San Francisco, CA 94111, USA. Es werden Daten über das Nutzerverhalten auf der Website gesammelt und analysiert. Die Daten werden verwendet, um die Website zu verbessern und zu optimieren.',
        en: 'Mixpanel is a web analytics tool provided by Mixpanel Inc., One Front Street, Floor 28, San Francisco, CA 94111, USA. Data on user behavior on the website is collected and analyzed. The data is used to improve and optimize the website.',
      },
      dataCollected: {
        de: [
          "IP-Adresse",
          "Standort",
          "Art des Betriebssystems",
          "Sprache des Betriebssystems",
          "Browsertyp",
          "Verweisende Website",
          "Interagierte Web-Elemente oder Objekte",
          "Metadaten über Aktivitäten auf der Seite",
          "Änderungen im Benutzerstatus",
          "Dauer des Seitenbesuchs",
          "Erstes Öffnen der Anwendung",
          "Mobilfunkanbieter",
          "Gerätekennung",
          "Art des Mobilgeräts",
          "Download-Status der Anwendung",
          "Nutzungsaktivität innerhalb der Anwendung",
          "Modell des Mobilgeräts",
          "Betriebssystemversion des Mobilgeräts",
          "Erhaltene Push-Benachrichtigungen",
          "Betriebssystem des Geräts für Benachrichtigungen",
          "Benutzeridentifikation für Benachrichtigungen",
          "Mobile Anwendungsanalysen (z.B. Häufigkeit, Ereignisse, aggregierte Nutzung, Leistungsdaten, Quelle des App-Stores)",
          "Informationen, die über Cookies gesammelt werden"
      ],
        en: [
          "IP Address",
          "Location",
          "Type of operating system",
          "Language of the operating system",
          "Browser type",
          "Referring website",
          "Web elements or objects interacted with",
          "Metadata about activity on the Site",
          "User state changes",
          "Duration of visit to the Site",
          "First time the Application is opened",
          "Mobile carrier",
          "Device identifier",
          "Type of mobile device",
          "Application download status",
          "Usage activity within the Application",
          "Mobile device model",
          "Mobile device OS version",
          "Push notifications received",
          "Device OS for notifications",
          "User identification for notifications",
          "Mobile application analytics (e.g., frequency, events, aggregated usage, performance data, app store source)",
          "Information collected via cookies"
      ]
      },
      category: 'marketing',
      consent: false,
    },*/ /*{
      id: 'youtube',
      name: 'Youtube',
      domain: 'www.youtube.com',
      url: {
        de: 'https://policies.google.com/privacy?hl=de',
        en: 'https://policies.google.com/privacy?hl=en',
      },
      description: {
        de: 'YouTube ist ein Online-Videoportal der Firma Google LLC. Nutzer können Videos hochladen, ansehen, bewerten und kommentieren. Die Inhalte reichen von Musikvideos, Tutorials und Dokumentationen bis hin zu persönlichen Vlogs und vielem mehr. Darüber hinaus bietet YouTube Funktionen wie Playlisten-Erstellung, Kanalabonnements und personalisierte Videovorschläge. Videos von YouTube können auf anderen Webseiten eingebunden werden. Diese Seite verwendet YouTube Embeds, um Artikel mit zusätzlichen Informationen zu bereichern und einen tieferen Kontext zu bieten.',
        en: 'YouTube is an online video portal owned by Google LLC. Users can upload, view, rate and comment on videos. The content ranges from music videos, tutorials and documentaries to personal vlogs and much more. In addition, YouTube offers features such as playlist creation, channel subscriptions and personalized video suggestions. Videos from YouTube can be embedded on other websites. This site uses YouTube embeds to enrich articles with additional information and provide a deeper context.',
      },
      dataCollected: {
        de: [
          "IP-Adresse",
          "Standort-Informationen",
          "Suchverlauf",
          "Angesehene Videos",
          "Interaktionen mit Videos (z.B. Likes, Dislikes, Kommentare)",
          "Routeninformationen (falls in der App verwendet)",
          "Gerätetyp",
          "Betriebssystem",
          "Browser-Typ",
          "Datum und Uhrzeit der Anfrage",
          "Verwendete Sprache",
          "Cookies und ähnliche Technologien",
          "Mobile Geräte-IDs",
          "Sprach- und Audioinformationen (z.B. bei Verwendung von Sprachsuche)"
        ],
        en: [
          "IP address",
          "Location information",
          "Search history",
          "Watched videos",
          "Interactions with videos (e.g. likes, dislikes, comments)",
          "Route information (if used in the app)",
          "Device type",
          "Operating system",
          "Browser type",
          "Date and time of the request",
          "Language used",
          "Cookies and similar technologies",
          "Mobile device IDs",
          "Language and audio information (e.g. when using voice search)"
        ]
      },
      category: 'functional',
      consent: false,
    }*/,
	],
};
