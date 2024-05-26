import { useFadeInOnVisible } from "@/hooks/fade-in";
import { tr } from "@/lib/translation";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
	BookA,
	BrainCircuit,
	CheckCheck,
	CheckIcon,
	Cog,
	Database,
	DollarSign,
	EyeIcon,
	FileSignature,
	Fingerprint,
	GitPullRequestCreateArrow,
	KeyRound,
	Landmark,
	Languages,
	Lightbulb,
	ListChecks,
	MessageCircleHeart,
	MessageCircleReply,
	MessagesSquare,
	Mic,
	MousePointerClick,
	Network,
	NetworkIcon,
	PenLine,
	PieChart,
	Pyramid,
	Radar,
	ReceiptEuro,
	Rocket,
	Scale,
	Server,
	ShieldCheck,
	ShieldQuestion,
	Smartphone,
	SpellCheck2,
	TextIcon,
	UnplugIcon,
	UsersRound,
	Waypoints,
	ZoomIn,
	ZoomOut,
} from "lucide-react";
import { useCallback, useState } from "react";
import LazyImage, { type Props as LazyImageProps } from "../LazyImage";
import { SectionBadge } from "../SectionBadge";
import { SectionHeading } from "../SectionHeading";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

export const ZoomableLazyImage: React.FC<LazyImageProps & { isDark: boolean }> =
	(props) => {
		const [isZoomed, setIsZoomed] = useState(false);
		const onZoomClick = useCallback(() => {
			setIsZoomed(!isZoomed);
		}, [isZoomed]);

		return (
			<div
				className={`${
					isZoomed ? "relative scale-[2] z-40 max-w-[100vw]" : "relative"
				} items-center justify-center ${
					props.isDark ? "hidden dark:flex" : "flex dark:hidden"
				}`}
			>
				<LazyImage
					{...{
						...props,
					}}
					style={{
						aspectRatio: isZoomed ? "auto" : "16/8",
						objectFit: "cover",
						objectPosition: "center 25%",
					}}
				/>
				<Button
					className={`hidden md:flex absolute -bottom-2 -right-3 ${
						isZoomed
							? "z-50 scale-[0.4]"
							: "-bottom-0 -right-[2px] scale-[0.72]"
					}`}
					onClick={onZoomClick}
				>
					{isZoomed ? (
						<ZoomOut className="w-6 h-6" />
					) : (
						<ZoomIn className="w-6 h-6" />
					)}
				</Button>
			</div>
		);
	};

export const FeaturesNgSection = ({ t, l }) => {
	const [ref1, visible1] = useFadeInOnVisible(300);
	const [ref2, visible2] = useFadeInOnVisible(100);
	const [ref3, visible3] = useFadeInOnVisible(300);

	return (
		<section
			id="FeaturesSection"
			className="relative w-full py-12 md:py-24 lg:py-24 bg-gradient-to-bl from-gray-100 via-white to-white dark:from-gray-900 dark:via-black dark:to-black "
		>
			<div className="container space-y-12 px-4 md:px-6 -mb-4">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<SectionBadge className="mt-12">
							<ZoomIn className="w-4 h-4" /> {tr("features.badgeText", t, l)}
						</SectionBadge>
						<SectionHeading>{tr("features.heading", t, l)}</SectionHeading>
						<p className="max-w-[900px] text-gray-500 text-lg/relaxed dark:text-gray-500">
							{tr("features.sectionDescription", t, l)}
						</p>
					</div>
				</div>
				<div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 pt-12">
					<Card
						ref={ref1}
						className={`fade-in ${
							visible1 ? "visible" : ""
						} shadow-lg dark:shadow-gray-900 dark:border-gray-700 from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black bg-gradient-to-t`}
					>
						<CardHeader>
							<div className="flex items-center justify-between">
								<h3 className="text-lg font-bold flex items-center">
									<Rocket className="w-8 h-8 mr-2 shrink-0" />
									<span className="text-xl">
										{tr("features.conversationsTitle", t, l)}
									</span>
								</h3>
								<Badge>{tr("features.featureBadgeTextLive", t, l)}</Badge>
							</div>
						</CardHeader>
						<CardContent>
							{/*
							<ZoomableLazyImage
								isDark={false}
								alt="Dashboard: Interactions"
								className="w-full object-cover rounded-sm border-2 border-gray-300"
								src={
									l === "de"
										? "/screenshots/interactions_de_light.png"
										: "/screenshots/interactions_en_light.png"
								}
								width={1490}
								height={750}
								quality={100}
							/>
							<ZoomableLazyImage
								isDark={true}
								alt="Dashboard: Interactions"
								className="w-full object-cover rounded-sm border-2 border-gray-700"
								src={
									l === "de"
										? "/screenshots/interactions_de_dark.png"
										: "/screenshots/interactions_en_dark.png"
								}
								width={1490}
								height={750}
								quality={100}
							/>

							<div className="text-gray-500 text-sm w-full flex italic text-center">
								Abb. Interaktionen: Beantworten Sie alle Bewertungen von allen
								Plattformen aus einem zentralen Dashboard heraus.
							</div>
							*/}

							<p className="text-gray-600 mb-4 dark:text-gray-300">
								{tr("features.conversationsDescription", t, l)}
							</p>
							<div className="flex flex-col items-start mb-4">
								<Accordion type="single" collapsible className="w-full">
									<AccordionItem value="feature1" className="border-0">
										<AccordionTrigger className="-mb-3 h-12">
											<span className="flex items-start justify-start">
												<NetworkIcon
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<p>
													<strong>
														{tr("features.meaningfulTitle", t, l)}
													</strong>
												</p>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-base text-gray-500"
												dangerouslySetInnerHTML={{
													__html: tr("features.meaningfulDescription", t, l),
												}}
											/>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="feature2" className="border-0">
										<AccordionTrigger className="-mb-3  h-12">
											<span className="flex items-start justify-start">
												<Waypoints
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<p>
													<strong>
														{tr("features.visionEnabledTitle", t, l)}
													</strong>
												</p>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-base text-gray-500"
												dangerouslySetInnerHTML={{
													__html: tr("features.visionEnabledDescription", t, l),
												}}
											/>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="feature3" className="border-0">
										<AccordionTrigger className="-mb-3  h-12">
											<span className="flex items-start justify-start">
												<ReceiptEuro
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<strong>{tr("features.polyglotTitle", t, l)}</strong>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-gray-500 text-base"
												dangerouslySetInnerHTML={{
													__html: tr("features.polyglotDescription", t, l),
												}}
											/>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="feature4" className="border-0">
										<AccordionTrigger className="-mb-3  h-12">
											<span className="flex items-start justify-start">
												<Mic
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<strong
													dangerouslySetInnerHTML={{
														__html: tr("features.safeEmpathicTitle", t, l),
													}}
												/>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-gray-500 text-base"
												dangerouslySetInnerHTML={{
													__html: tr("features.safeEmpathicDescription", t, l),
												}}
											/>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="feature5" className="border-0">
										<AccordionTrigger className="-mb-3  h-12">
											<span className="flex items-start justify-start">
												<UsersRound
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<strong>{tr("features.eloquentTitle", t, l)}</strong>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-gray-500 text-base"
												dangerouslySetInnerHTML={{
													__html: tr("features.eloquentDescription", t, l),
												}}
											/>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="feature6" className="border-0">
										<AccordionTrigger className="-mb-3  h-12">
											<span className="flex items-start justify-start">
												<ShieldCheck
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<strong>{tr("features.mediatingTitle", t, l)}</strong>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-gray-500 text-base"
												dangerouslySetInnerHTML={{
													__html: tr("features.mediatingDescription", t, l),
												}}
											/>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
							{/*
                  <div className="flex justify-between items-center mt-5">
                    <span className="font-bold">Learn More</span>
                    <Button>View Details</Button>
                  </div>
                  */}
						</CardContent>
					</Card>

					<Card
						ref={ref2}
						className={`fade-in ${
							visible2 ? "visible" : ""
						} lg:-mt-8 shadow-lg dark:shadow-gray-900 dark:border-gray-700 from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black bg-gradient-to-t`}
					>
						<CardHeader>
							<div className="flex items-center justify-between">
								<h3 className="text-lg font-bold flex items-center">
									<Radar className="w-8 h-8 mr-1" />{" "}
									<span className="text-xl">
										{tr("features.insightsTitle", t, l)}
									</span>
								</h3>
								<Badge>{tr("features.featureBadgeTextNew", t, l)}</Badge>
							</div>
						</CardHeader>
						<CardContent>
							{/*
							<ZoomableLazyImage
								isDark={false}
								alt="Dashboard: Insights"
								className="w-full object-cover rounded-sm border-2 border-gray-300"
								src={
									l === "de"
										? "/screenshots/insights_de_light.png"
										: "/screenshots/insights_en_light.png"
								}
								width={1490}
								height={750}
								quality={100}
							/>
							<ZoomableLazyImage
								isDark={true}
								alt="Dashboard: Insights"
								className="w-full object-cover rounded-sm border-2 border-gray-700"
								src={
									l === "de"
										? "/screenshots/insights_de_dark.png"
										: "/screenshots/insights_en_dark.png"
								}
								width={1490}
								height={750}
								quality={100}
							/>
							<div className="text-gray-500 text-sm w-full flex italic text-center">
								Abb. Übersicht: Tagesaktuell aggregierte Auswertungen über alle
								Plattformen hinweg und KI-gestützte Handlungsempfehlungen.
							</div>

							*/}
							<p className="text-gray-600 mb-4 dark:text-gray-300">
								{tr("features.insightsDescription", t, l)}
							</p>
							<div className="flex flex-col items-start mb-4">
								<Accordion type="single" collapsible className="w-full">
									<AccordionItem value="feature1" className="border-0">
										<AccordionTrigger className="-mb-3 h-12">
											<span className="flex items-start justify-start">
												<Radar
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<p>
													<strong>
														{tr("features.interactiveDashboardTitle", t, l)}
													</strong>
												</p>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-base text-gray-500"
												dangerouslySetInnerHTML={{
													__html: tr(
														"features.interactiveDashboardDescription",
														t,
														l,
													),
												}}
											/>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="feature2" className="border-0">
										<AccordionTrigger className="-mb-3  h-12">
											<span className="flex items-start justify-start">
												<Mic
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<p>
													<strong>
														{tr("features.trueInsightsTitle", t, l)}
													</strong>
												</p>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-gray-500"
												dangerouslySetInnerHTML={{
													__html: tr("features.trueInsightsDescription", t, l),
												}}
											/>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="feature3" className="border-0">
										<AccordionTrigger className="-mb-3  h-12">
											<span className="flex items-start justify-start">
												<MousePointerClick
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<strong>
													{tr("features.executiveAdvisorTitle", t, l)}
												</strong>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-gray-500"
												dangerouslySetInnerHTML={{
													__html: tr(
														"features.executiveAdvisorDescription",
														t,
														l,
													),
												}}
											/>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="feature4" className="border-0">
										<AccordionTrigger className="-mb-3  h-12">
											<span className="flex items-start justify-start">
												<Languages
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<strong>
													{tr("features.permissionModelTitle", t, l)}
												</strong>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-gray-500"
												dangerouslySetInnerHTML={{
													__html: tr(
														"features.permissionModelDescription",
														t,
														l,
													),
												}}
											/>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="feature5" className="border-0">
										<AccordionTrigger className="-mb-3  h-12">
											<span className="flex items-start justify-start">
												<ListChecks
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<strong>
													{tr("features.mutliLanguageTitle", t, l)}
												</strong>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-gray-500"
												dangerouslySetInnerHTML={{
													__html: tr("features.mutliLanguageDescription", t, l),
												}}
											/>
										</AccordionContent>
									</AccordionItem>

									{/*
									<AccordionItem value="feature6" className="border-0">
										<AccordionTrigger className="-mb-3  h-12">
											<span className="flex items-start justify-start">
												<Network
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<strong>{tr("features.multiTenantTitle", t, l)}</strong>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-gray-500"
												dangerouslySetInnerHTML={{
													__html: tr("features.multiTenantDescription", t, l),
												}}
											/>
										</AccordionContent>
									</AccordionItem>
											*/}
								</Accordion>
							</div>
							{/*
                <div className="flex justify-between items-center mt-5">
                  <span className="font-bold">Learn More</span>
                  <Button>View Details</Button>
                </div>
                */}
						</CardContent>
					</Card>

					<Card
						ref={ref3}
						className={`fade-in ${
							visible3 ? "visible" : ""
						} shadow-lg dark:shadow-gray-900 dark:border-gray-700 from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black bg-gradient-to-t`}
					>
						<CardHeader>
							<div className="flex items-center justify-between">
								<h3 className="text-lg font-bold flex items-center">
									<SpellCheck2 className="w-8 h-8 mr-2" />{" "}
									<span className="text-xl">
										{tr("features.integrationsTitle", t, l)}
									</span>
								</h3>
								<Badge>{tr("features.featureBadgeTextBeta", t, l)}</Badge>
							</div>
						</CardHeader>
						<CardContent>
							{/*
							<ZoomableLazyImage
								isDark={false}
								alt="Dashboard: Integrations"
								className="w-full object-cover rounded-sm border-2 border-gray-300"
								src={
									l === "de"
										? "/screenshots/integrations_de_light.png"
										: "/screenshots/integrations_en_light.png"
								}
								width={1490}
								height={750}
								quality={100}
							/>
							<ZoomableLazyImage
								isDark={true}
								alt="Dashboard: Integrations"
								className="w-full object-cover rounded-sm border-2 border-gray-700"
								src={
									l === "de"
										? "/screenshots/integrations_de_dark.png"
										: "/screenshots/integrations_en_dark.png"
								}
								width={1490}
								height={750}
								quality={100}
							/>

							<div className="text-gray-500 text-sm w-full flex italic text-center">
								Abb. Einstellungen: Marke, Plattform-Integrationen,
								Antwortverhalten, Tonalität und Regelwerk für Konfliktlösungen.
							</div>
							*/}
							<p className="text-gray-600 mb-4 dark:text-gray-300">
								{tr("features.integrationsDescription", t, l)}
							</p>
							<div className="flex flex-col items-start mb-4">
								<Accordion type="single" collapsible className="w-full">
									<AccordionItem value="feature1" className="border-0">
										<AccordionTrigger className="-mb-3 h-12">
											<span className="flex items-start justify-start">
												<PenLine
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<p>
													<strong>
														{tr("features.reviewPlatformsTitle", t, l)}
													</strong>
												</p>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-base text-gray-500"
												dangerouslySetInnerHTML={{
													__html: tr(
														"features.reviewPlatformsDescription",
														t,
														l,
													),
												}}
											/>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="feature5" className="border-0">
										<AccordionTrigger className="-mb-3  h-12">
											<span className="flex items-start justify-start">
												<CheckCheck
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<strong>{tr("features.reviewAppTitle", t, l)}</strong>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-gray-500"
												dangerouslySetInnerHTML={{
													__html: tr("features.reviewAppDescription", t, l),
												}}
											/>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="feature2" className="border-0">
										<AccordionTrigger className="-mb-3  h-12">
											<span className="flex items-start justify-start">
												<SpellCheck2
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<p>
													<strong>{tr("features.crmErpTitle", t, l)}</strong>
												</p>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-gray-500"
												dangerouslySetInnerHTML={{
													__html: tr("features.crmErpDescription", t, l),
												}}
											/>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="feature3" className="border-0">
										<AccordionTrigger className="-mb-3  h-12">
											<span className="flex items-start justify-start">
												<Fingerprint
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<strong>
													{tr("features.enterpriseSsoTitle", t, l)}
												</strong>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-gray-500"
												dangerouslySetInnerHTML={{
													__html: tr("features.enterpriseSsoDescription", t, l),
												}}
											/>
										</AccordionContent>
									</AccordionItem>

									<AccordionItem value="feature4" className="border-0">
										<AccordionTrigger className="-mb-3  h-12">
											<span className="flex items-start justify-start">
												<Database
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<strong>{tr("features.coBrandingTitle", t, l)}</strong>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-gray-500"
												dangerouslySetInnerHTML={{
													__html: tr("features.coBrandingDescription", t, l),
												}}
											/>
										</AccordionContent>
									</AccordionItem>
									{/*

									<AccordionItem value="feature6" className="border-0">
										<AccordionTrigger className="-mb-3  h-12">
											<span className="flex items-start justify-start">
												<Cog
													className="w-6 h-6 mr-2 text-gray-500 shrink-0"
													style={{ strokeWidth: 2 }}
												/>
												<strong>
													{tr("features.customizationTitle", t, l)}
												</strong>
											</span>
										</AccordionTrigger>
										<AccordionContent className="ml-8 pb-0">
											<i
												className="text-gray-500"
												dangerouslySetInnerHTML={{
													__html: tr("features.customizationDescription", t, l),
												}}
											/>
										</AccordionContent>
									</AccordionItem>
											*/}
								</Accordion>
							</div>
							{/*
                <div className="flex justify-between items-center mt-5">
                  <span className="font-bold">Learn More</span>
                  <Button>View Details</Button>
                </div>
                */}
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};
