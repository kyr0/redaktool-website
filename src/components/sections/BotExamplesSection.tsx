import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useFadeInOnVisible } from "@/hooks/fade-in";
import useSmoothScroll from "@/hooks/smooth-scroll";
import { track } from "@/lib/smartlook";
import { tr } from "@/lib/translation";
import { reviewsData } from "@/translations/bot-reviews";
import GraphemeSplitter from "grapheme-splitter";
import {
	ArrowDown,
	ArrowUpRight,
	CalendarPlus,
	Lightbulb,
	Presentation,
	Redo,
	Save,
	Send,
	Share2Icon,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { ButtonLink } from "../ButtonLink";
import LazyImage from "../LazyImage";
import { Logo } from "../Logo";
import { SectionBadge } from "../SectionBadge";
import { SectionHeading } from "../SectionHeading";
import { ShareButton } from "../ShareButton";
import { Label } from "../ui/label";
import { Link } from "../ui/link";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import { Toggle } from "../ui/toggle";

const stringSplitter = (text: string) => {
	const splitter = new GraphemeSplitter();
	return splitter.splitGraphemes(text);
};

export default function BotExamplesSection({ t, l }) {
	const [reviews, setReviews] = useState(
		reviewsData.filter((review) => review.language === l),
	);
	const scroll = useSmoothScroll();
	const [isAuto, setAuto] = useState(true);
	const [isPosted, setPosted] = useState(false);
	const [secs, setSecs] = useState(0);
	const [botResponseRef, botRefIsVisible] = useFadeInOnVisible(100);
	const [isTyping, setTyping] = useState(false);
	const [review, setReview] = useState(reviews[0]);
	const reviewTextRef = useRef(null);
	const [doneWriting, setDoneWriting] = useState(false);
	const [isInPreDelay, setInPreDelay] = useState(true);

	const scrollResponseDown = () => {
		botResponseRef.current.scrollTo({
			top: 10000000,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		setReviews(reviewsData.filter((review) => review.language === l));
	}, [l]);

	useEffect(() => {
		if (!botRefIsVisible) return;

		let typingInterval: any;
		let index = 0;
		let typer: typeof Typewriter;
		let timeout: NodeJS.Timeout;
		const timeouts: NodeJS.Timeout[] = [];

		const makeType = (response: string) => {
			typer = new Typewriter(botResponseRef.current, {
				strings: [],
				stringSplitter,
				autoStart: false,
				loop: false,
				deleteSpeed: 100,
				delay: 0,
			});

			typer
				.typeString(response)
				.callFunction(() => {
					setDoneWriting(true);
					scrollResponseDown();
					//reviewTextRef.current.classList.add('blur-lg')
					//console.log('done writing')
					typer.stop();
					clearInterval(typingInterval);

					if (isAuto) {
						setPosted(true);
					}
					setTyping(false);

					// wait +10 secs pre-delay, then next
					animateResponseBehaviour(false, 10000);
				})
				.start();

			setTyping(true);
		};

		const deferAnimate = (fn: Function, timeout: number) => {
			timeouts.push(
				setTimeout(() => {
					fn();
				}, timeout),
			);
		};

		const animateResponseWriting = () => {
			setDoneWriting(false);

			setPosted(false);

			// actually start animating the response writing
			makeType(reviews[index].response);
		};

		const animateResponseBehaviour = (initial = false, preDelay = 0) => {
			deferAnimate(() => {
				setInPreDelay(true);

				// flip review
				reviewTextRef.current.classList.add("blur-lg");

				if (!initial) {
					index++;

					// flip/restart
					if (index > reviews.length - 1) {
						index = 0;
					}

					// render new review
					setReview(reviews[index]);

					typer.typeString("");
				}

				deferAnimate(() => {
					// flip review
					reviewTextRef.current.classList.remove("blur-lg");
				}, 250);

				setSecs(0); // predelay
				//reviewTextRef.current.classList.remove('blur-lg')
				typingInterval = setInterval(() => {
					setSecs((secs) => secs + 1);
					scrollResponseDown();
				}, 1000);

				// initially, start animating the response writing
				deferAnimate(() => {
					botResponseRef.current.innerHTML = `
            <li class="flex p-0 py-6 md:p-6 lg:p-12 justify-center dark:text-white items-center transition duration-500 fade-in visible">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="mr-2"><path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"/><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path></svg>
              ${tr("botExamples.downloadingReview", t, l)}...
            </li>
          `;
				}, 0);

				deferAnimate(() => {
					botResponseRef.current.innerHTML = `
            <li class="flex p-0 py-6 md:p-6 lg:p-12 justify-center dark:text-white items-center transition duration-500 fade-in visible">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="mr-2"><path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"/><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path></svg>
              ${tr("botExamples.analyzingMeaning", t, l)}...
            </li>
          `;
				}, 1500);

				deferAnimate(() => {
					botResponseRef.current.innerHTML = `
            <li class="flex p-0 py-6 md:p-6 lg:p-12 justify-center dark:text-white items-center transition duration-500 fade-in visible">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="mr-2"><path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"/><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path></svg>
              ${tr("botExamples.adjustingBrandSpeech", t, l)}...
            </li>
          `;
				}, 2500);

				deferAnimate(() => {
					botResponseRef.current.innerHTML = `
            <li class="flex p-0 py-6 md:p-6 lg:p-12 justify-center dark:text-white items-center transition duration-500 fade-in visible">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="mr-2"><path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"/><path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path></svg>
              ${tr("botExamples.ethicalFineTuning", t, l)}...
            </li>
          `;
				}, 3500);

				deferAnimate(() => {
					botResponseRef.current.innerHTML = "";
				}, 4500);

				deferAnimate(() => {
					setInPreDelay(false);
					animateResponseWriting();
				}, 5000);
			}, preDelay);
		};

		animateResponseBehaviour(true);

		return () => {
			clearInterval(typingInterval);
			clearTimeout(timeout);
			timeouts.map((timeout) => clearTimeout(timeout));
			setTyping(false);
			if (index >= 1) {
				setReview(reviews[index - 1]);
			}
			if (typer) {
				console.log("stop");
				typer.stop();
			}

			if (botResponseRef.current) {
				botResponseRef.current.innerHTML = "";
			}
			setDoneWriting(false);
		};
	}, [botRefIsVisible, botResponseRef, isAuto, reviewTextRef]);

	const onToggleAuto = useCallback(() => {
		setAuto(!isAuto);
		track("bot_examples_auto_mode_toggled");
	}, [isAuto]);

	const onPostClick = useCallback(() => {
		setPosted(true);
		track("bot_examples_post_button_clicked");
	}, []);

	return (
		<>
			<section
				id="BotExamplesSection"
				key="BotExamplesSection"
				className="flex flex-col bg-gradient-to-tr from-gray-100 via-white to-white dark:to-black dark:via-black dark:from-gray-900"
			>
				<div className="w-full px-4 pt-16 md:px-6 lg:pt-24 md:pt-12 flex flex-col md:flex-col items-center justify-center relative">
					<SectionBadge className="mt-12">
						<Lightbulb className="w-4 h-4" />{" "}
						{tr("botExamples.badgeText", t, l)}
					</SectionBadge>
					<SectionHeading>{tr("botExamples.heading", t, l)}</SectionHeading>
					<p className="text-lg text-gray-600 max-w-prose mx-auto text-center dark:text-gray-500 pb-10 pt-4">
						{tr("botExamples.description", t, l)}
					</p>
				</div>
				<div className="w-full px-4 flex flex-col md:flex-row items-center justify-center relative">
					<Card className="relative -ml-4 w-full max-w-md p-10 grid gap-1 lg:mr-6 mb-6 md:mb-0 shadow-md">
						<CardHeader className="items-start space-y-0 gap-4 p-0">
							<div className="flex flex-row justify-between items-center w-full">
								<div className="grid gap-1 text-left">
									<CardTitle className="flex items-center md:h-[1.125rem] text-lg">
										{review.companyName}
									</CardTitle>
									<CardDescription className="text-xs">
										{tr("botExamples.onPlatform", t, l)} {review.platformName}
									</CardDescription>
								</div>
								<LazyImage
									alt={`${review.companyName} Logo`}
									format="png"
									height={32}
									className="h-[32px]"
									src={review.companyLogo}
									style={{
										objectFit: "contain",
									}}
								/>
							</div>

							<Separator />
							<div className="flex items-center justify-center gap-3">
								<Avatar className="w-10 h-10 rounded-full">
									<LazyImage
										alt={`${review.author.name} User Profile`}
										className="w-full h-full object-cover"
										src={review.author.imageUrl}
									/>
								</Avatar>
								<div className="flex flex-col justify-around">
									<span className="text-md h-[1.125rem] leading-tight">
										{review.author.name}
									</span>
									<span className="text-sm h-[1.125rem] leading-tight text-gray-500">
										{review.author.labelA}
										{review.author.labelB && (
											<>&nbsp;&nbsp;·&nbsp;&nbsp;{review.author.labelB}</>
										)}
									</span>
								</div>
							</div>
							<div className="flex items-center gap-2 flex-wrap">
								<p className="text-md">{review.rating}</p>
								<span className="text-sm text-gray-500 flex items-center dark:text-gray-400">
									{review.time}&nbsp;&nbsp;·&nbsp;&nbsp;
									{tr("botExamples.onPlatform", t, l)}{" "}
									<img
										height={14}
										width={14}
										className="h-[0.875rem] mx-1 ml-2"
										src={review.platformIcon}
										alt={review.platformName}
									/>
									{review.platformShortName}
								</span>
								<Badge className="text-xs bg-white text-black border-2 font-bold border-gray-300 border-solid scale-90 -ml-1 hover:bg-white dark:border-gray-700 dark:bg-gray-900 dark:text-white">
									{tr("botExamples.new", t, l)}
								</Badge>
							</div>
						</CardHeader>
						<CardContent className="p-0 grid">
							<p
								ref={reviewTextRef}
								className="text-sm blur-lg transition duration-500 ease-in-out"
							>
								{review.reviewText}
							</p>
						</CardContent>
						<CardFooter className="text-xs p-0 flex items-center mt-4">
							<Toggle
								size="sm"
								className="flex items-center gap-2 dark:hover:text-white"
								onClick={() => {
									track("bot_examples_review_like_button_clicked", review);
								}}
							>
								<ThumbsUpIcon className="w-4 h-4" />
								<p>{tr("botExamples.likeButton", t, l)}</p>
							</Toggle>
							<div className="space-x-2 ml-2">
								<ShareButton t={t} l={l} />
							</div>

							<div className="flex flex-row flex-grow justify-end items-center">
								<span>
									<Link
										href={review.sourceLink}
										target="_blank"
										className="flex items-center opacity-60"
										onClick={() => {
											track("bot_examples_review_source_button_clicked", {
												link: review.sourceLink,
											});
										}}
									>
										{tr("botExamples.realReview", t, l)}{" "}
										<ArrowUpRight className="w-4" />
									</Link>
								</span>
							</div>
						</CardFooter>
					</Card>
					<Card className="relative w-full z-10 max-w-md p-10 flex flex-col gap-1 -mt-10 -mr-4 md:mt-24 md:-mr-0 md:-ml-4 lg:-ml-10 shadow-lg min-h-[400px] h-auto">
						<Redo
							className="w-24 h-24 absolute right-2 -top-14 md:-bottom-0 md:-top-14 md:-left-6 rotate-45 text-gray-300 z-20 dark:text-gray-700"
							style={{ strokeWidth: 1 }}
						/>

						<CardHeader className="items-start space-y-0 gap-4 p-0">
							<div className="flex flex-row w-full justify-between items-start">
								<div className="grid gap-1 text-left">
									<CardTitle className="flex items-center h-[1.125rem] text-lg">
										<Logo
											width={106}
											height={18}
											className="h-[1.125rem] w-[106px]"
										/>
									</CardTitle>
									<CardDescription className="text-xs">
										{tr("botExamples.respondingOnBehalfOf", t, l)}{" "}
										{review.companyName}
									</CardDescription>
								</div>

								<div className="flex items-center space-x-2 scale-90">
									<Label htmlFor="auto-mode">
										{tr("botExamples.autoMode", t, l)}
									</Label>
									<Switch
										aria-label="Auto"
										id="auto-mode"
										checked={isAuto}
										onClick={onToggleAuto}
									/>
								</div>
							</div>
							<Separator />
							<div className="flex flex-col items-start">
								<div className="flex items-center gap-2">
									<p className="text-sm font-bold">
										{tr("botExamples.responseFromOwner", t, l)}
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-400">
										{tr("botExamples.genIn", t, l)} {secs}{" "}
										{tr("botExamples.sec", t, l)}
									</p>
									<Badge className="text-xs bg-white text-black border-2 font-bold border-gray-300 border-solid scale-90 -ml-1 hover:bg-white  dark:border-gray-700 dark:bg-gray-900 dark:text-white">
										{isTyping
											? tr("botExamples.generating", t, l)
											: isInPreDelay
											  ? tr("botExamples.processing", t, l)
											  : isPosted || isAuto
												  ? tr("botExamples.posted", t, l)
												  : tr("botExamples.inReview", t, l)}
									</Badge>
								</div>
							</div>
						</CardHeader>
						<CardContent className="p-0 flex flex-grow gap-4 text-sm pt-4">
							<div
								ref={botResponseRef}
								className="h-[500px] pr-4 lg:h-[400px] scrollbar dark:scrollbar-dark w-full overflow-y-scroll overflow-visible"
								id="botResponse"
							/>
						</CardContent>
						<CardFooter className="text-xs p-0 flex items-center jusitfy-between mt-4">
							<div className="flex flex-row">
								<Toggle
									size="sm"
									className="flex items-center gap-2 dark:hover:text-white"
									onClick={() => {
										track("bot_examples_response_like_button_clicked", review);
									}}
								>
									<ThumbsUpIcon className="w-4 h-4" />
									<p>{tr("botExamples.likeButton", t, l)}</p>
								</Toggle>
								<div className="space-x-2 ml-2">
									<ShareButton t={t} l={l} />
								</div>
							</div>
							<div className="flex flex-row flex-grow justify-end items-center">
								{!isAuto ? (
									<Button
										size="sm"
										variant="outline"
										className="gap-2"
										disabled={!doneWriting || isPosted || isInPreDelay}
										onClick={onPostClick}
									>
										<Send className="w-4 h-4" />
										<p>{tr("botExamples.postButton", t, l)}</p>
									</Button>
								) : (
									<div className="flex flex-row flex-grow justify-end items-center">
										<span>
											<Link
												href={review.sourceLink}
												target="_blank"
												className="flex items-center opacity-60"
												onClick={() => {
													track("bot_examples_response_source_button_clicked", {
														link: review.sourceLink,
													});
												}}
											>
												{tr("botExamples.realResponse", t, l)}{" "}
												<ArrowUpRight className="w-4" />
											</Link>
										</span>
									</div>
								)}
							</div>
						</CardFooter>
					</Card>
				</div>

				<div className="w-full px-4 md:px-6 flex flex-col items-center justify-center relative mb-24 md:mb-20  mt-8">
					<h4 className="flex mt-4 text-md md:text-lg font-normal text-gray-400 dark:text-gray-400">
						{tr("botExamples.genuineResponse", t, l)}
					</h4>

					<Link
						href="#scroll=CustomerAppFeaturesSection"
						className="rounded-md flex no-underline border-2  text-md py-1 px-2 md:py-2 md:px-3 mt-5 justify-center items-center text-lg shadow-sm"
						variant="outline"
						onClick={() => {
							scroll("CustomerAppFeaturesSection");
						}}
					>
						<CalendarPlus className="h-6 w-6 mr-2" /> &nbsp;
						{tr("botExamples.liveDemoButtonText", t, l)}
					</Link>
				</div>
			</section>
		</>
	);
}

function ThumbsUpIcon(props) {
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
			<path d="M7 10v12" />
			<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
		</svg>
	);
}
