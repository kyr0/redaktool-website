import { useFadeInOnVisible } from "@/hooks/fade-in";
import { tr } from "@/lib/translation";
import { BookIcon, MessageCircleHeart, PaperclipIcon } from "lucide-react";
import LazyImage from "../LazyImage";
import { SectionBadge } from "../SectionBadge";
import { SectionHeading } from "../SectionHeading";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

export const TestimonialsSection = ({ t, l }) => {
	const [ref1, visible1] = useFadeInOnVisible(600);
	const [ref2, visible2] = useFadeInOnVisible(400);
	//const [ref3, visible3] = useFadeInOnVisible(200)

	return (
		<section
			id="TestimonialsSection"
			className="w-full py-12 -mb-8 md:py-24 lg:py-32 bg-gradient-to-bl from-gray-100 via-white to-white dark:from-gray-900 dark:via-black dark:to-black"
		>
			<div className="container grid items-center justify-center gap-4 px-4 text-center pt-24 md:px-6">
				<div className="space-y-3 mb-5 -mt-24">
					<SectionBadge>
						<MessageCircleHeart className="w-4 h-4" />{" "}
						<span> {tr("testimonials.badgeTitle", t, l)}</span>
					</SectionBadge>

					<SectionHeading> {tr("testimonials.heading", t, l)}</SectionHeading>
					<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
						{tr("testimonials.description", t, l)}
					</p>
				</div>
				<div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2 mt-8 md:mt-16 mb-4 ">
					<Card
						ref={ref1}
						className={`fade-in ${
							visible1 ? "visible" : ""
						} transform rotate-2 shadow-md dark:shadow-gray-900 dark:border-gray-700 border-solid max-w-[320px]`}
					>
						<CardHeader>
							<div className="flex items-center justify-between">
								<div className="text-left">
									<h3 className="text-lg font-bold text-left">
										{tr("testimonials.testimonial1Name", t, l)}
									</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										{tr("testimonials.testimonial1Role", t, l)}{" "}
										{tr("testimonials.at", t, l)}{" "}
										{tr("testimonials.testimonial1CompanyName", t, l)}
									</p>
								</div>

								<PaperclipIcon className="w-8 h-8 absolute -top-1 -left-1 text-gray-400 -m-2 rotate-[-85deg] dark:text-gray-700" />
							</div>
						</CardHeader>
						<CardContent>
							<LazyImage
								alt={`Photo of ${tr("testimonials.testimonial1Name", t, l)}`}
								className="w-full h-[200px] object-cover rounded-sm"
								height={200}
								src={tr("testimonials.testimonial1PhotoUrl", t, l)}
								style={{
									aspectRatio: "300/200",
									objectFit: "cover",
									objectPosition: "center top",
								}}
								width={300}
							/>
							<p className="text-gray-500 mt-4 italic border-l-4 border-gray-500 pl-4 dark:border-gray-700 dark:text-gray-400">
								"{tr("testimonials.testimonial1Text", t, l)}"
							</p>
							{/*
                <div className="flex justify-between items-center mt-4">
                  <Button className="ml-auto">
                    View Case Study
                    <BookIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                */}
							<div className="flex justify-center items-center mt-4">
								<LazyImage
									alt={`${tr(
										"testimonials.testimonial1CompanyName",
										t,
										l,
									)} Light Logo`}
									className="block dark:hidden"
									src={tr("testimonials.testimonial1CompanyLogoUrlLight", t, l)}
									style={{
										objectFit: "cover",
									}}
									height={34}
									width={42}
								/>

								<LazyImage
									alt={`${tr(
										"testimonials.testimonial1CompanyName",
										t,
										l,
									)} Dark Logo`}
									className="hidden dark:block"
									src={tr("testimonials.testimonial1CompanyLogoUrlDark", t, l)}
									style={{
										objectFit: "cover",
									}}
									height={34}
									width={42}
								/>
							</div>
						</CardContent>
					</Card>
					<Card
						ref={ref2}
						className={`fade-in ${
							visible2 ? "visible" : ""
						} transform -rotate-2 shadow-md dark:shadow-gray-900 dark:border-gray-700 border-solid max-w-[320px] lg:-mb-2 sm:mb-24`}
					>
						<CardHeader>
							<div className="flex items-center justify-between">
								<div className="text-left">
									<h3 className="text-lg font-bold text-left">
										{tr("testimonials.testimonial2Name", t, l)}
									</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										{tr("testimonials.testimonial2Role", t, l)}{" "}
										{tr("testimonials.at", t, l)}{" "}
										{tr("testimonials.testimonial2CompanyName", t, l)}
									</p>
								</div>

								<PaperclipIcon className="w-8 h-8 absolute -top-1 -right-1 text-gray-400 -m-2 rotate-[85deg] scale-x-[-1] dark:text-gray-700" />
							</div>
						</CardHeader>
						<CardContent>
							<LazyImage
								alt={`Photo of ${tr("testimonials.testimonial2Name", t, l)}`}
								className="w-full h-[200px] object-cover rounded-sm "
								height={200}
								src={tr("testimonials.testimonial2PhotoUrl", t, l)}
								style={{
									aspectRatio: "300/200",
									objectFit: "cover",
									objectPosition: "center top",
								}}
								width={300}
							/>
							<p className="text-gray-500 mt-4 italic border-l-4 border-gray-500 pl-4 dark:border-gray-700 dark:text-gray-400">
								"{tr("testimonials.testimonial2Text", t, l)}"
							</p>
							{/*
                <div className="flex justify-between items-center mt-4">
                  <Button className="ml-auto">
                    View Case Study
                    <BookIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                */}

							<div className="flex justify-center items-center mt-4">
								<LazyImage
									alt={`${tr(
										"testimonials.testimonial2CompanyName",
										t,
										l,
									)} Light Logo`}
									className="block dark:hidden"
									src={tr("testimonials.testimonial2CompanyLogoUrlLight", t, l)}
									style={{
										objectFit: "cover",
									}}
									width={80}
								/>

								<LazyImage
									alt={`${tr(
										"testimonials.testimonial2CompanyName",
										t,
										l,
									)} Dark Logo`}
									className="hidden dark:block"
									src={tr("testimonials.testimonial2CompanyLogoUrlDark", t, l)}
									style={{
										objectFit: "cover",
									}}
									width={80}
								/>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};
