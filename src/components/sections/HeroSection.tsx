import useSmoothScroll from "@/hooks/smooth-scroll";
import { tr } from "@/lib/translation";
import translations from "@/translations";
import {
	ArrowDown,
	ArrowRightCircle,
	ArrowUpRightIcon,
	AsteriskIcon,
	CheckCheck,
	FileArchive,
	Languages,
	ListChecks,
	Mic,
	Mic2,
	MousePointerClick,
	PenLine,
	Play,
	PlayIcon,
	Radar,
	SpellCheck2,
	StarIcon,
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AstroCoookieWrapper } from "../AstroCoookieWrapper";
import { ButtonLink } from "../ButtonLink";
import { VideoPlayer } from "../VideoPlayer";
import Youtube from "../Youtube.astro";
import { Braces } from "../icons/Braces";
import { StarFull } from "../icons/StarFull";
import { Button } from "../ui/button";
import { Link } from "../ui/link";
import SimpleIconsGooglechrome from "../icons/SimpleIconsGooglechrome";
import CibMozillaFirefox from "../icons/FirefoxIcon";
import SimpleIconsMicrosoftedge from "../icons/SimpleIconsMicrosoftedge";
import MdiAppleSafari from "../icons/MdiAppleSafari";
import { track } from "@/lib/smartlook";
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "../ui/alert-dialog";

export const HeroSection = ({ t, l }) => {
	const scroll = useSmoothScroll();
	const videoRef = useRef(null);
	const [isInitialized, setIsInitialized] = useState(false);

	const onClickInitialize = () => {
		if (videoRef.current && !isInitialized) {
			videoRef.current.innerHTML = tr("herosection.videoUrl", t, l);
			setIsInitialized(true);
		}
	};

	const onBrowserClick = (browser) => () => {
		track("browser_requested", { browser });
	};

	return (
		<section
			key="HeroSection"
			id="HeroSection"
			className="w-full relative mt-20 "
		>
			<div className="relative z-1 pt-12 md:pt-24 lg:pt-32 px-4 md:px-6 -space-y-36 sm:-space-y-20 md:-space-y-16 lg:-space-y-12 xl:space-y-2">
				<div className="flex flex-col sm:grid max-w-[1300px] mx-auto gap-4 pb-4 md:pb-12 lg:pb-16 px-0 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
					<span className="relative text-center mx-auto mb-8 md:mr-auto w-[80%] md:w-[100%] flex-col items-center md:items-start md:text-left lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] inline-block !leading-[1.04] gap-1">
						<h1>{tr("herosection.headline", t, l)}</h1>

						<span
							className="-left-10 -top-6  border-2 rounded-md pl-2 pr-2 -rotate-6 z-10 bg-white dark:bg-black absolute max-w-[700px] text-lg text-red-500 md:text-xl dark:text-gray-400"
							dangerouslySetInnerHTML={{
								__html: tr("herosection.tagLine2", t, l),
							}}
						/>

						<span className="text-lg md:text-xl lg:text-2xl mt-8 flex flex-col items-center md:items-start">
							<span>{tr("herosection.supportedBy", t, l)}</span>
							<img
								src="/logos/mtl-powered-by.png"
								className="mt-0 inline-block max-h-16 md:max-h-20 lg:max-h-24 w-fit md:mt-4 lg:mt-4"
								alt="Media Tech Lab Bayern Logo"
							/>
						</span>
					</span>

					<div className="flex flex-col text-center md:text-left space-y-4 pt-0 md:pt-2 lg:pt-2 w-[80%] md:w-[100%] mx-auto md:mr-auto">
						<p
							className="max-w-[700px] text-lg text-gray-500 md:text-xl dark:text-gray-400"
							dangerouslySetInnerHTML={{
								__html: tr("herosection.tagLine1", t, l),
							}}
						/>
						<div className="flex flex-row gap-2 mx-auto md:mx-0 flex-nowrap">
							<div className="flex flex-wrap flex-col items-center md:items-start align-middle gap-2 mt-4 sm:flex-row md:flex-col lg:flex-row">
								<Link
									className="inline-flex h-min-12 h-14 items-center justify-center rounded-md bg-black px-6 py-3 text-md md:text-lg font-medium text-white shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
									href="#scroll=FeaturesSection"
									onClick={() => {
										scroll("FeaturesSection");
									}}
								>
									{tr("herosection.button1Text", t, l)}
									<ArrowDown className="ml-2 h-6 w-6" />
								</Link>

								<Link
									className="inline-flex h-min-12 h-14 items-center justify-center rounded-md bg-white px-6 py-3 text-md md:text-lg font-medium text-gray-900 shadow transition-colors hover:bg-gray-100/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-transparent border-solid border-2 dark:border-gray-700  dark:text-gray-500 dark:hover:bg-gray-900 dark:focus-visible:ring-gray-300"
									href="#scroll=WaitingListSection"
									onClick={() => {
										scroll("WaitingListSection");
									}}
								>
									{tr("waitingList.button", t, l)}
									<ArrowUpRightIcon className="ml-2 h-6 w-6" />
								</Link>
							</div>
						</div>
						<p
							className="max-w-[700px] text-sm text-gray-500 md:text-sm dark:text-gray-600"
							dangerouslySetInnerHTML={{
								__html: tr("herosection.tagLine3", t, l),
							}}
						/>
					</div>
				</div>

				<div className="mx-auto rounded-t-xl object-cover w-full h-min">
					<div className="relative items-center justify-center flex border-none drop-shadow-md z-1 mx-auto overflow-hidden rounded-md object-cover w-full bg-contain h-min lg:max-w-[1200px]">
						<div
							className="w-full h-fit items-stretch"
							style={{
								width: "100%",
								height: "600px",
								backgroundImage: `url('/redaktool/redaktool_screen_3d.png')`,
								backgroundSize: "contain",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
							}}
						/>

						{/*<VideoPlayer className="w-full h-full grayscale" poster={tr('herosection.posterUrl', t, l)} src={tr('herosection.videoUrl', t, l)} />*/}

						{/*!isInitialized && (
							<ButtonLink
								aria-label="Play the intro video"
								className="absolute z-10 w-24 h-24 pl-6 text-white bg-gray-400 rounded-full mx-auto my-auto dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-900"
								onClick={onClickInitialize}
							>
								<PlayIcon className="z-10 w-24 h-24 px-4 -ml-4" />
							</ButtonLink>
						)*/}
					</div>
				</div>

				<div className="grid max-w-[1300px] pt-12 md:pt-12 lg:pt-12 xl:pt-0 mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
					<div className="flex flex-row gap-2 flex-wrap justify-between">
						<div>
							<div className="flex flex-row mt-12 mb-4">
								<Radar className="w-12 h-12 dark:stroke-white mr-1" />
								<MousePointerClick className="w-12 h-12 dark:stroke-white mr-1" />
								<Mic className="w-12 h-12 dark:stroke-white mr-1" />
								<Languages className="w-12 h-12 dark:text-white mr-1" />
								<ListChecks className="w-12 h-12 dark:text-white mr-1" />
								<CheckCheck className="w-12 h-12 dark:text-white mr-1" />
								<PenLine className="w-12 h-12 dark:text-white mr-1" />
								<SpellCheck2 className="w-12 h-12 dark:text-white" />
							</div>
							<h2
								className="lg:leading-tighter text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl hyphens-manual whitespace-nowrap"
								dangerouslySetInnerHTML={{
									__html: tr("herosection.secondHeadline", t, l),
								}}
							/>
							<h3
								className="lg:leading-tighter text-gray-400 mt-4 font-normal text-lg tracking-tighter sm:text-lg md:text-xl lg:text-2xl hyphens-manual whitespace-nowrap"
								dangerouslySetInnerHTML={{
									__html: tr("herosection.thirdHeadline", t, l),
								}}
							/>
						</div>
						<div className="text-gray-300 rotate-90 md:rotate-0 mr-12 md:mr-0 text-[8rem] -mb-10 md:text-[16rem] ml-auto mt-auto md:mb-auto leading-[1] dark:text-gray-700">
							&#x7b;
						</div>
					</div>
					<div>
						<div className="mb-6 text-md md:text-lg text-gray-500">
							<span
								dangerouslySetInnerHTML={{
									__html: tr("herosection.secondTagLine", t, l),
								}}
							/>
						</div>
						<div className="grid w-full grid-cols-2 items-center justify-center gap-6 lg:gap-8 [&>img]:mx-auto">
							<AlertDialog>
								<AlertDialogTrigger asChild>
									<Button
										aria-label="Install for Google Chrome"
										variant="outline"
										className="flex flex-row items-center w-full p-6"
										onClick={onBrowserClick("chrome")}
									>
										<span className="flex flex-row items-center text-xl w-auto">
											<SimpleIconsGooglechrome className="m-1" />{" "}
											<span>Google Chrome</span>
										</span>
									</Button>
								</AlertDialogTrigger>

								<AlertDialogTrigger asChild>
									<Button
										aria-label="Install for Mozilla Firefox"
										variant="outline"
										className="flex flex-row items-center w-full p-6"
										onClick={onBrowserClick("firefox")}
									>
										<span className="flex flex-row items-center text-xl w-auto">
											<CibMozillaFirefox className="m-1" />{" "}
											<span>Mozilla Firefox</span>
										</span>
									</Button>
								</AlertDialogTrigger>

								<AlertDialogTrigger asChild>
									<Button
										aria-label="Install for Microsoft Edge"
										variant="outline"
										className="flex flex-row items-center w-full p-6"
										onClick={onBrowserClick("edge")}
									>
										<span className="flex flex-row items-center text-xl w-auto">
											<SimpleIconsMicrosoftedge className="m-1" />{" "}
											<span>Microsoft Edge</span>
										</span>
									</Button>
								</AlertDialogTrigger>
								<AlertDialogTrigger asChild>
									<Button
										aria-label="Install for Apple Safari"
										variant="outline"
										className="flex flex-row items-center w-full p-6 "
										onClick={onBrowserClick("safrari")}
									>
										<span className="flex flex-row items-center text-xl w-auto">
											<MdiAppleSafari className="m-1" />{" "}
											<span>Apple Safari</span>
										</span>
									</Button>
								</AlertDialogTrigger>
								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>
											{tr("herosection.notReadyYetTitle", t, l)}
										</AlertDialogTitle>
										<AlertDialogDescription>
											{tr("herosection.notReadyYet", t, l)}
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel>OK</AlertDialogCancel>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
						</div>
						<div className="mt-6 text-md md:text-lg text-gray-500 text-md mb-14">
							<p
								dangerouslySetInnerHTML={{
									__html: tr("herosection.thirdTagLine", t, l),
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
