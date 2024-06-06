import useSmoothScroll from "@/hooks/smooth-scroll";
import { getLocalizedPath, tr } from "@/lib/translation";
import { cn } from "@/lib/utils";
import config from "../config.json";
import { ButtonLink } from "./ButtonLink";
import LanguageChooser from "./LanguageChooser";
import { ProductUpdates } from "./ProductUpdates";
import { Link } from "./ui/link";
import { Separator } from "./ui/separator";
import { GithubLink } from "./GithubLink";

export const Footer = ({ language, localizedPaths, translations }) => {
	const scroll = useSmoothScroll();

	return (
		<footer
			key="Footer"
			className="relative z-10 bg-black text-white p-10 w-[100vw]"
		>
			<div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
				<div className="flex flex-col relative items-start justify-start">
					<img
						src="/icons/icon.svg"
						width={55}
						height={55}
						alt="RedakTool Logo"
						className={cn("flex h-16", "self-start place-self-start")}
					/>
					<span className={cn("sr-only")}>{config.legalName}</span>
					<p className="mb-4 text-gray-300 mt-4">
						<strong>{config.productName}</strong>
					</p>

					<p className="mb-2 font-medium">
						{tr("footer.salesContact", translations, language)}:
					</p>

					{/**
          <p className="mb-2 flex items-center text-gray-300">
            <PhoneIcon className="w-4 h-4 mr-2" />
            (+49) 89 - 31337
          </p>
           */}

					<p className="flex items-center text-gray-300">
						<MailIcon className="w-4 h-4 mr-2" />
						<a href={`mailto:${config.email}`}>{config.email}</a>
					</p>

					<ButtonLink
						className="text-md underline underline-offset-2 max-w-fit text-white mt-2 mb-4 md:mt-auto"
						onClick={() => window.openAstroCookieConsent()}
					>
						{tr("footer.openPrivacySettingsLink", translations, language)}
					</ButtonLink>
				</div>

				<div className="flex flex-col relative">
					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=HeroSection", language)}
						onClick={() => scroll("HeroSection")}
						className="mb-4 text-base cursor-pointer max-w-fit"
					>
						{tr("comparison.title", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=FeaturesSection", language)}
						onClick={() => scroll("FeaturesSection")}
						className="mb-4 text-base cursor-pointer max-w-fit"
					>
						{tr("features.menuTitle", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath(
							"/#scroll=CustomerAppFeaturesSection",
							language,
						)}
						onClick={() => scroll("CustomerAppFeaturesSection")}
						className="mb-4 text-base cursor-pointer max-w-fit"
					>
						{tr("engagementApp.menuTitle", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=TestimonialsSection", language)}
						onClick={() => scroll("TestimonialsSection")}
						className="mb-4 text-base cursor-pointer max-w-fit"
					>
						{tr("testimonials.menuTitle", translations, language)}
					</Link>
				</div>
				<div className="flex flex-col relative">
					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=WaitingListSection", language)}
						onClick={() => scroll("WaitingListSection")}
						className="mb-4 text-base cursor-pointer max-w-fit"
					>
						{tr("waitingList.title", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath("/#scroll=ContactSection", language)}
						onClick={() => scroll("ContactSection")}
						className="mb-4 text-base cursor-pointer max-w-fit"
					>
						{tr("contact.menuTitle", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath("/privacy-policy", language)}
						className="mb-4 text-base cursor-pointer max-w-fit"
					>
						{tr("privacyPolicy.title", translations, language)}
					</Link>

					<Link
						data-astro-reload
						href={getLocalizedPath("/legal-notice", language)}
						className="mb-4 text-base cursor-pointer max-w-fit"
					>
						{tr("legalNotice.title", translations, language)}
					</Link>
				</div>
				<div>
					<div className="flex flex-col space-y-4 h-full">
						<ProductUpdates translations={translations} language={language} />

						<div className="relative flex space-x-4 mt-auto bottom-0 justify-end h-full height-auto">
							{/*
							<GithubLink
								inFooter={true}
								className="mt-auto h-8 !-mr-2 !bg-black !hover:bg-black !dark:hover:bg-black"
								language={language}
								translations={translations}
							/>
							*/}
							<Separator orientation="vertical" className="mt-auto h-6" />

							<LanguageChooser
								triggerClassName="text-white m-0 cursor-pointer p-0 pr-1 mt-auto"
								language={language}
								localizedPaths={localizedPaths}
								translations={translations}
							/>

							<Separator orientation="vertical" className="mt-auto h-6" />

							{/*
              <Link className="mt-auto" href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                <FacebookIcon className="w-6 h-6" />
                <span className="sr-only">Facebook Social Media Pofile</span>
              </Link>
              <Link className="mt-auto" href="#" rel="noopener noreferrer" target="_blank">
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link className="mt-auto" href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                <InstagramIcon className="w-6 h-6" />
                <span className="sr-only">Instagram Social Media Pofile</span>
              </Link>
              */}
							<Link
								className="mt-auto"
								href={config.linkedInProfile}
								rel="noopener noreferrer"
								target="_blank"
							>
								<LinkedinIcon className="w-6 h-6" />
								<span className="sr-only">
									{tr(
										"footer.linkedInSocialMediaProfile",
										translations,
										language,
									)}
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="text-center text-white opacity-50 mt-8 text-xs">
				{tr("footer.madeBy", translations, language)}
			</div>
		</footer>
	);
};

function FacebookIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
		</svg>
	);
}

function InstagramIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
		</svg>
	);
}

function LinkedinIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect width="4" height="12" x="2" y="9" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	);
}

function MailIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="20" height="16" x="2" y="4" rx="2" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
		</svg>
	);
}

function PhoneIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
		</svg>
	);
}

function TwitterIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
		</svg>
	);
}
