import useSmoothScroll from "@/hooks/smooth-scroll";
import { getLocalizedPath, tr } from "@/lib/translation";
import { Github, LinkedinIcon, MenuIcon } from "lucide-react";
import { useState } from "react";
import LanguageChooser from "./LanguageChooser";
import { ListItem } from "./ListItem";
import { Logo } from "./Logo";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { Link } from "./ui/link";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { LinkButton } from "./LinkButton";
import { GithubLink } from "./GithubLink";
import config from "../config.json";

export const Header = ({ language, localizedPaths, translations }) => {
	const scroll = useSmoothScroll();
	const [value, setValue] = useState("");
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className="px-4 z-50 w-screen fixed lg:px-6 h-20 flex items-center bg-white bg-opacity-90 backdrop-blur-sm justify-center dark:bg-black dark:bg-opacity-90">
			<Link
				data-astro-reload
				className="flex items-center justify-center"
				href={getLocalizedPath("/", language)}
			>
				<Logo />
			</Link>
			<nav className="mr-auto ml-6 flex mt-1 gap-4 sm:gap-6">
				<NavigationMenu
					value={value}
					onValueChange={setValue}
					className="hidden md:block min-w-max text-gray-600 dark:text-gray-50"
				>
					<NavigationMenuList>
						<NavigationMenuItem value="products">
							<NavigationMenuTrigger
								onClick={(evt) => {
									evt.preventDefault();
									setValue("products");
								}}
								className="text-lg font-medium hover:underline underline-offset-4 mb-1"
							>
								{tr("header.menu1Text", translations, language)}
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<div className="row-span-3">
										<NavigationMenuLink asChild>
											<a
												data-astro-reload
												className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
												href={getLocalizedPath("/", language)}
											>
												<img
													src="/icons/icon.svg"
													alt="RedakTool"
													width={100}
													height={100}
													className="h-16 w-16 flex dark:hidden"
												/>
												<img
													src="/icons/icon.svg"
													alt="RedakTool"
													width={100}
													height={100}
													className="h-16 w-16 hidden dark:flex"
												/>
												<div className="mb-2 mt-4 text-lg font-medium">
													{tr("header.menu1.hero", translations, language)}
												</div>
												<p className="text-sm leading-tight text-muted-foreground">
													{tr("header.menu1.heroText", translations, language)}
												</p>
											</a>
										</NavigationMenuLink>
									</div>

									<ListItem
										data-astro-reload
										href={getLocalizedPath(
											"/#scroll=FeaturesSection",
											language,
										)}
										onClick={() => scroll("FeaturesSection")}
										title={tr(
											"features.conversationsTitle",
											translations,
											language,
										)}
									>
										{tr(
											"features.conversationsDescription",
											translations,
											language,
										)}
									</ListItem>

									<ListItem
										data-astro-reload
										href={getLocalizedPath(
											"/#scroll=FeaturesSection",
											language,
										)}
										onClick={() => scroll("FeaturesSection")}
										title={tr("features.insightsTitle", translations, language)}
									>
										{tr("features.insightsDescription", translations, language)}
									</ListItem>

									<ListItem
										data-astro-reload
										href={getLocalizedPath(
											"/#scroll=FeaturesSection",
											language,
										)}
										onClick={() => scroll("FeaturesSection")}
										title={tr(
											"features.integrationsTitle",
											translations,
											language,
										)}
									>
										{tr(
											"features.integrationsDescription",
											translations,
											language,
										)}
									</ListItem>

									<ListItem
										data-astro-reload
										href={getLocalizedPath(
											"/#scroll=CustomerAppFeaturesSection",
											language,
										)}
										onClick={() => scroll("CustomerAppFeaturesSection")}
										title={tr(
											"engagementApp.menuTitle",
											translations,
											language,
										)}
									>
										{tr("engagementApp.menuText", translations, language)}
									</ListItem>

									<ListItem
										data-astro-reload
										href={getLocalizedPath(
											"/#scroll=WaitingListSection",
											language,
										)}
										onClick={() => scroll("WaitingListSection")}
										title={tr("waitingList.title", translations, language)}
									>
										{tr("waitingList.menuText", translations, language)}
									</ListItem>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						{/*
						<NavigationMenuItem value="company">
							<NavigationMenuTrigger
								onClick={(evt) => {
									evt.preventDefault();
									setValue("company");
								}}
								className="text-lg font-medium hover:underline underline-offset-4"
							>
								{tr("header.menu2Text", translations, language)}
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
									<ListItem
										data-astro-reload
										href={getLocalizedPath(
											"/#scroll=ComparisonSection",
											language,
										)}
										onClick={() => {
											scroll("ComparisonSection");
										}}
										className="cursor-pointer"
										title={tr("comparison.title", translations, language)}
									>
										{tr("comparison.menuText", translations, language)}
									</ListItem>

									<ListItem
										data-astro-reload
										href={getLocalizedPath(
											"/#scroll=BotExamplesSection",
											language,
										)}
										onClick={() => {
											scroll("BotExamplesSection");
										}}
										className="cursor-pointer"
										title={tr("botExamples.menuTitle", translations, language)}
									>
										{tr("botExamples.menuText", translations, language)}
									</ListItem>

									<ListItem
										data-astro-reload
										href={getLocalizedPath("/#FeaturesSection", language)}
										onClick={() => {
											scroll("FeaturesSection");
										}}
										className="cursor-pointer"
										title={tr("features.menuTitle", translations, language)}
									>
										{tr("features.menuText", translations, language)}
									</ListItem>

									<ListItem
										data-astro-reload
										href={getLocalizedPath(
											"/#scroll=CustomerAppFeaturesSection",
											language,
										)}
										onClick={() => {
											scroll("CustomerAppFeaturesSection");
										}}
										className="cursor-pointer"
										title={tr(
											"engagementApp.menuTitle",
											translations,
											language,
										)}
									>
										{tr("engagementApp.menuText", translations, language)}
									</ListItem>

									<ListItem
										data-astro-reload
										href={getLocalizedPath(
											"/#scroll=ServicesSection",
											language,
										)}
										onClick={() => {
											scroll("ServicesSection");
										}}
										className="cursor-pointer"
										title={tr("services.menuTitle", translations, language)}
									>
										{tr("services.menuText", translations, language)}
									</ListItem>

									<ListItem
										data-astro-reload
										href={getLocalizedPath(
											"/#scroll=TestimonialsSection",
											language,
										)}
										onClick={() => {
											scroll("TestimonialsSection");
										}}
										className="cursor-pointer"
										title={tr("testimonials.menuTitle", translations, language)}
									>
										{tr("testimonials.menuText", translations, language)}
									</ListItem>

									<ListItem
										data-astro-reload
										href={getLocalizedPath(
											"/#scroll=LeadershipSection",
											language,
										)}
										onClick={() => {
											scroll("LeadershipSection");
										}}
										className="cursor-pointer"
										title={tr("leadership.menuTitle", translations, language)}
									>
										{tr("leadership.menuText", translations, language)}
									</ListItem>

									<ListItem
										data-astro-reload
										href={getLocalizedPath("/#scroll=ContactSection", language)}
										onClick={() => {
											scroll("ContactSection");
										}}
										className="cursor-pointer"
										title={tr("contact.menuTitle", translations, language)}
									>
										{tr("contact.menuText", translations, language)}
									</ListItem>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
									*/}
					</NavigationMenuList>
				</NavigationMenu>
			</nav>

			{/*
        <LinkButton href="https://calendar.app.google/TPodNLT2KToKVZ1c9">
            <CalendarPlus className="h-6 w-6 mr-2" />
            Contact Sales
        </LinkButton
      */}

			<Popover open={mobileOpen}>
				<PopoverTrigger asChild>
					<Button
						onClick={() => {
							setMobileOpen(!mobileOpen);
						}}
						className="flex md:hidden ml-auto border-1 bg-transparent text-black text-xl font-normal hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900"
					>
						<MenuIcon className="h-6 w-6 mr-2" />
						{tr("header.mobileMenuButtonText", translations, language)}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className="h-screen w-screen flex flex-col gap-4 mt-4"
					onClick={() => {
						setMobileOpen(false);
					}}
				>
					<h2 className="text-2xl font-bold text-black dark:text-white">
						{tr("header.menu1Text", translations, language)}
					</h2>

					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=FeaturesSection", language)}
						onClick={() => scroll("FeaturesSection")}
						title={tr("features.conversationsTitle", translations, language)}
					>
						{tr("features.conversationsTitle", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=FeaturesSection", language)}
						onClick={() => scroll("FeaturesSection")}
						title={tr("features.insightsTitle", translations, language)}
					>
						{tr("features.insightsTitle", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=FeaturesSection", language)}
						onClick={() => scroll("FeaturesSection")}
						title={tr("features.integrationsTitle", translations, language)}
					>
						{tr("features.integrationsTitle", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath(
							"/#scroll=CustomerAppFeaturesSection",
							language,
						)}
						onClick={() => scroll("CustomerAppFeaturesSection")}
						title={tr("engagementApp.menuTitle", translations, language)}
					>
						{tr("engagementApp.menuTitle", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath(
							"/#scroll=RegisterForLiveDemoSection",
							language,
						)}
						onClick={() => scroll("RegisterForLiveDemoSection")}
						title={tr("liveDemo.title", translations, language)}
					>
						{tr("liveDemo.title", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=WaitingListSection", language)}
						onClick={() => scroll("WaitingListSection")}
						title={tr("waitingList.title", translations, language)}
					>
						{tr("waitingList.title", translations, language)}
					</Link>

					{/*

					<h2 className="text-2xl font-bold text-black dark:text-white">
						{tr("header.menu2Text", translations, language)}
					</h2>

					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=FeaturesSection", language)}
						onClick={() => {
							scroll("FeaturesSection");
						}}
						className="cursor-pointer"
						title={tr("comparison.title", translations, language)}
					>
						{tr("comparison.title", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=BotExamplesSection", language)}
						onClick={() => {
							scroll("BotExamplesSection");
						}}
						className="cursor-pointer"
						title={tr("botExamples.menuTitle", translations, language)}
					>
						{tr("botExamples.menuTitle", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=ComparisonSection", language)}
						onClick={() => {
							scroll("ComparisonSection");
						}}
						className="cursor-pointer"
						title={tr("features.menuTitle", translations, language)}
					>
						{tr("features.menuTitle", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath(
							"/#scroll=CustomerAppFeaturesSection",
							language,
						)}
						onClick={() => {
							scroll("CustomerAppFeaturesSection");
						}}
						className="cursor-pointer"
						title={tr("engagementApp.menuTitle", translations, language)}
					>
						{tr("engagementApp.menuTitle", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=ServicesSection", language)}
						onClick={() => {
							scroll("ServicesSection");
						}}
						className="cursor-pointer"
						title={tr("services.menuTitle", translations, language)}
					>
						{tr("services.menuTitle", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=TestimonialsSection", language)}
						onClick={() => {
							scroll("TestimonialsSection");
						}}
						className="cursor-pointer"
						title={tr("testimonials.menuTitle", translations, language)}
					>
						{tr("testimonials.menuTitle", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=LeadershipSection", language)}
						onClick={() => {
							scroll("LeadershipSection");
						}}
						className="cursor-pointer"
						title={tr("leadership.menuTitle", translations, language)}
					>
						{tr("leadership.menuTitle", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=ContactSection", language)}
						onClick={() => {
							scroll("ContactSection");
						}}
						className="cursor-pointer"
						title={tr("contact.menuTitle", translations, language)}
					>
						{tr("contact.menuTitle", translations, language)}
					</Link>
					*/}
				</PopoverContent>
			</Popover>

			<span className="ml-2 focus:outline-none flex items-center align-middle">
				<GithubLink
					language={language}
					translations={translations}
					className={"!mr-2  hidden md:visible"}
				/>

				<Link
					className="!mr-2 hidden md:visible"
					href={config.linkedInProfile}
					rel="noopener noreferrer"
					target="_blank"
				>
					<LinkedinIcon className="w-6 h-6" />
					<span className="sr-only">
						{tr("footer.linkedInSocialMediaProfile", translations, language)}
					</span>
				</Link>

				<LanguageChooser
					language={language}
					localizedPaths={localizedPaths}
					translations={translations}
				/>

				<ModeToggle language={language} translations={translations} />
			</span>
		</header>
	);
};
