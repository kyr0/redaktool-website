import {
	DollarSign,
	Eye,
	HeartHandshake,
	Library,
	PenLine,
	Scale,
	Shield,
	Smile,
	Sparkle,
	Sparkles,
	Target,
	Text,
	TimerIcon,
} from "lucide-react";

export const DescriptionEn = () => {
	return (
		<>
			Our AI product significantly changes how your team approachs your
			company's online reputation management &ndash; leading to massive
			improvements in your teams'
			<strong>
				<TimerIcon className="inline h-[1.125rem]" /> work efficiency
			</strong>
			,
			<strong>
				<HeartHandshake className="inline h-[1.125rem]" /> customer
				statisfaction
			</strong>
			,
			<strong>
				<PenLine className="inline h-[1.125rem]" /> writing quality
			</strong>{" "}
			and{" "}
			<strong>
				<Smile className="inline h-[1.125rem]" /> workforce happiness
			</strong>
			.
		</>
	);
};

export const DescriptionDe = () => {
	return (
		<>
			<strong>RedakTool</strong> möchte verändern, wie{" "}
			<strong>redaktionelle Arbeit</strong> abläuft. Anstatt mit{" "}
			<strong>Copy & Paste</strong> von Tool zu Tool zu springen, und dabei viel{" "}
			<strong>Zeit</strong>, <strong>Nerven</strong>, <strong>Geld</strong>, und{" "}
			<strong>Daten</strong> zu verlieren, möchte <strong>RedakTool</strong>{" "}
			starke Verbesserungen in der
			<strong>
				<TimerIcon className="inline h-[1.125rem]" /> Arbeitseffizienz
			</strong>
			,
			<strong>
				<DollarSign className="inline h-[1.125rem]" /> Kostenkontrolle
			</strong>
			,
			<strong>
				<PenLine className="inline h-[1.125rem]" /> Schreibqualität
			</strong>{" "}
			und auch beim{" "}
			<strong>
				<Shield className="inline h-[1.125rem]" /> Datenschutz
			</strong>{" "}
			erreichen.
		</>
	);
};

// TODO: Auto-generate with code generation (overall)
export const Tr = ({ k, l }) => {
	switch (k) {
		case "comparison.description":
			switch (l) {
				case "en":
					return <DescriptionEn />;
				default:
					return <DescriptionDe />;
			}
		default:
			return <>{k}</>;
	}
};

export default {
	"comparison.title": {
		en: "Why RedakTool?",
		de: "Warum RedakTool?",
	},
	"comparison.menuText": {
		en: "Learn about the huge benefits of using our AI.",
		de: "Erfahren Sie mehr über die großen Vorteile der Nutzung unserer KI.",
	},
	"comparison.heading": {
		en: "🛸 The Future is Now",
		de: "🛸 Die Zukunft beginnt heute",
	},
	"comparison.badgeTitle": {
		en: "4 dimensions of our Excellence",
		de: "Vier Ziele - Ein Tool",
	},
	"comparison.dimension1Badge": {
		en: "Enhanced text quality",
		de: "Verbesserte Textqualität",
	},
	"comparison.dimension1Title": {
		en: "Excellent reviews and responses  ",
		de: "Exzellente Bewertungen und Antworten",
	},
	"comparison.dimension1Description": {
		en: `At RedakTool, we enhance response quality by leveraging cutting-edge AI technology. Our advanced algorithms analyze and understand the sentiment behind reviews, allowing you to respond strategically and effectively.  
        <br /><br />
        At the same time, we have developed the RedakTool App to assist your customers in writing meaningful reviews.
        <br /><br />
        By fostering a cycle of meaningful interaction, we ensure to enhance your online reputation, fostering positive engagements across all relevant online review platforms.`,
		de: `Bei RedakTool verbessern wir die Qualität der Antworten, indem wir modernste KI-Technologie einsetzen. Unsere fortschrittlichen Algorithmen analysieren und verstehen die Stimmung hinter den Bewertungen, damit Sie strategisch und effektiv reagieren können.
        <br /><br />
        Gleichzeitig haben wir die RedakTool App entwickelt, um Ihren Kunden zu helfen, aussagekräftige Bewertungen zu schreiben.
        <br />
        <br />
        Indem wir einen Zyklus sinnvoller Interaktionen fördern, verbessern wir Ihre Online-Reputation und fördern positive Interaktionen auf allen relevanten Online-Plattformen.`,
	},
	"comparison.dimension2Badge": {
		en: "Less Costs and higher Yield",
		de: "Geringe Kosten bei höherem Ertrag",
	},
	"comparison.dimension2Title": {
		en: "Efficient and Cost-effective",
		de: "Effizient und Wirtschaftlich",
	},
	"comparison.dimension2Description": {
		en: `RedakTool helps you efficiently and cost-effectively manage your online reputation. Our AI-powered solutions streamline processes, minimize the resources needed for manual monitoring and analysis, and encourage the "silent, satisfied majority" of your customers to leave reviews. 
        <br /><br />
        With automation, you can achieve impressive results at a fraction of the time, personnel, external service providers, and various tools previously required. High-quality, AI-driven online reputation management is now made accessible and economical for businesses of all sizes.`,
		de: `RedakTool hilft Ihnen, Ihre Online-Reputation effizient und kostengünstig zu verwalten. Unsere KI-gestützten Lösungen optimieren Prozesse, minimieren die Ressourcen, die für die manuelle Überwachung und Analyse benötigt werden. Sie animieren die "stille, zufriedene Mehrheit" Ihrer Kunden, Bewertungen zu hinterlassen. 
        <br /><br />
        Dank Automatisierung erzielen Sie beeindruckende Ergebnisse, und das zu einem Bruchteil Ihres bisherigen Aufwands an Zeit, Personal, externen Dienstleistern und diversen Tools. Hochqualitatives, KI-gestütztes Online-Reputationsmanagement wird erstmals für Unternehmen aller Größen zugänglich und wirtschaftlich gemacht.`,
	},
	"comparison.dimension3Badge": {
		de: "Zufriedenere Mitarbeiter",
		en: "More Happy Employees",
	},
	"comparison.dimension3Title": {
		de: "Optimierte Arbeitsprozesse",
		en: "Optimized Workflows",
	},
	"comparison.dimension3Description": {
		en: `RedakTool contributes to employee happiness by optimizing workflows. Our AI-driven tools automate repetitive tasks associated with online reputation management, freeing up valuable time for your team. 
        <br /><br />
        This not only increases efficiency but also reduces workload. Your employees can thus focus on their core tasks.`,
		de: `RedakTool trägt zur Zufriedenheit der Mitarbeiter bei, indem es Workflows optimiert. Unsere KI-gesteuerten Tools automatisieren wiederkehrende Aufgaben im Zusammenhang mit dem Online-Reputationsmanagement und sorgen so für Zeitersparnis. 
        <br /><br />
        Dies steigert nicht nur die Effizienz, sondern reduziert auch die Arbeitsbelastung. Ihre Mitarbeiter können sich so auf ihre Kernaufgaben konzentrieren.`,
	},
	"comparison.dimension4Badge": {
		en: "Smart Insights",
		de: "Intelligente Auswertungen",
	},
	"comparison.dimension4Title": {
		en: "AI-driven Decision Making",
		de: "KI-gestützte Entscheidungen",
	},
	"comparison.dimension4Description": {
		en: `We simplify the management of your online reviews across various platforms. Our AI analyzes key insights and presents you with a unified view of your reviews. This streamlined approach saves time and also facilitates root cause analysis when it comes to negative reviews. 
        <br /><br />
        Our solution enables a precise analysis of the current situation and empowers you to make strategic decisions that positively impact your business.`,
		de: `Wir vereinfachen das Management Ihrer Online-Bewertungen über verschiedene Plattformen hinweg. Unsere KI analysiert die wesentlichen Erkenntnisse und präsentiert Ihnen eine einheitliche Sicht auf Ihre Bewertungen. Dieser vereinfachte Ansatz spart Zeit und erleichtert auch die Ursachenanalyse, wenn es um negative Bewertungen geht. 
        <br /><br />
        Unsere Lösung ermöglicht eine präzise Analyse der vorliegenden Situation und ermöglicht Ihnen, strategische Entscheidungen zu treffen, die sich positiv auf Ihr Unternehmen auswirken.  `,
	},
};
