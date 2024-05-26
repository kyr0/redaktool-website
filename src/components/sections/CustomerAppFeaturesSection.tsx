import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import useSmoothScroll from "@/hooks/smooth-scroll";
import { tr } from "@/lib/translation";
import {
	AppWindowIcon,
	Clock1,
	DollarSign,
	HeartHandshake,
	LayoutDashboardIcon,
	LineChart,
	LineChartIcon,
	PenIcon,
	PenToolIcon,
	QrCode,
	Smartphone,
	SmartphoneIcon,
	SmartphoneNfc,
	Sparkles,
	SparklesIcon,
	StarIcon,
	TimerIcon,
	TowerControlIcon,
} from "lucide-react";
import LazyImage from "../LazyImage";
import { NumericIndex } from "../NumericIndex";
import { ProductUpdates } from "../ProductUpdates";
import { SectionBadge } from "../SectionBadge";
import { SectionHeading } from "../SectionHeading";
import { Badge } from "../ui/badge";
import { Link } from "../ui/link";

export function CustomerAppFeaturesSection({ t, l }) {
	const scroll = useSmoothScroll();

	return (
		<section
			id="CustomerAppFeaturesSection"
			key="CustomerAppFeaturesSection"
			className="relative w-full py-12 md:py-24 lg:py-24 z-1 bg-gray-100 p-8 lg:px-32 dark:bg-black"
		>
			<div className="text-center">
				<div className="space-y-2 items-center flex flex-col">
					<SectionBadge>
						<HeartHandshake className="w-4 h-4" />{" "}
						<span>{tr("engagementApp.badgeText", t, l)}</span>
					</SectionBadge>
					<SectionHeading
						className="font-normal"
						html={tr("engagementApp.heading", t, l)}
					/>

					<p
						className="max-w-[900px] text-gray-500 text-lg/relaxed dark:text-gray-500 pb-6"
						dangerouslySetInnerHTML={{
							__html: tr("engagementApp.descriptionText", t, l),
						}}
					/>
				</div>
			</div>
			<div className="container space-y-2 md:space-y-12 px-0 md:px-6 -mb-4">
				<div className="w-full px-0 md:px-4 mt-8 sm:mt-8 md:mt-8 mb-4 flex flex-col md:flex-row items-center justify-center relative">
					<Card className="relative ml-0 md:-ml-4 w-full max-w-md p-2 md:p-10 grid gap-1 lg:mr-6 mb-6 md:mb-0 shadow-md">
						<CardHeader>
							<div className="flex items-center justify-between ">
								<h3 className="text-lg font-bold flex items-center">
									<span className="text-xl">
										{tr("engagementApp.appTeaserTitle", t, l)}
									</span>
								</h3>
								<Badge className="text-center">
									{tr("engagementApp.comingSoon", t, l)}
								</Badge>
							</div>
						</CardHeader>
						<CardContent>
							<p className="mb-4">
								{tr("engagementApp.appTeaserDescription", t, l)}
							</p>
							<ProductUpdates
								translations={t}
								language={l}
								buttonClassName="mt-2 w-full"
							/>
						</CardContent>
					</Card>
					<Card className="relative z-10 max-w-md p-0 flex gap-1 mr-0 -mt-12 md:mt-0 md:-ml-6 lg:-ml-10 shadow-lg h-[320px] w-[320px]">
						<LazyImage
							alt={"User interview process"}
							format="png"
							height={320}
							quality={100}
							width={320}
							className="h-[320px] w-[320px] rounded-md"
							src={"/user_interview.webp"}
							style={{
								objectFit: "fill",
							}}
						/>
					</Card>
				</div>
			</div>
		</section>
	);
}

// <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-8 mb-6">
//           <Card className="w-full shadow-lg dark:shadow-gray-900 dark:border-gray-700">
//             <CardContent className="mb-2">
//               <LazyImage
//                 id="one_scan_qr_code"
//                 alt="Scan a QR code"
//                 className="w-full h-auto mt-6 mb-4 rounded-sm"
//                 height={288}
//                 src="/app/scan_qr_code.png"
//                 style={{
//                   aspectRatio: "400/200",
//                   objectFit: "cover",
//                 }}
//                 width={576} />
//               <h2 className="text-xl font-semibold mb-4 mt-6 flex">
//                 <NumericIndex index={1} />
//                 {tr('engagementApp.step1Title', t, l)}
//               </h2>
//               <p className="text-gray-600 mb-4 mt-4 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: tr('engagementApp.step1Text', t, l)}}>

//               </p>
//               <div className="flex flex-col items-start mb-4">
//                 <div className="flex items-center">
//                   <CheckIcon className="w-6 h-6 mr-2 shrink-0" />
//                   <p dangerouslySetInnerHTML={{ __html: tr('engagementApp.step1Bullet1', t, l)}}></p>
//                 </div>
//                 <div className="flex items-center mt-2">
//                   <CheckIcon className="w-6 h-6 mr-2 shrink-0" />
//                   <p dangerouslySetInnerHTML={{ __html: tr('engagementApp.step1Bullet2', t, l)}}></p>
//                 </div>
//                 <div className="flex items-center mt-2">
//                   <CheckIcon className="w-6 h-6 mr-2 shrink-0" />
//                   <p dangerouslySetInnerHTML={{ __html: tr('engagementApp.step1Bullet3', t, l)}}></p>
//                 </div>
//               </div>
//               {/*
//               <div className="flex justify-between items-center">
//                 <Link href="#scroll=WaitingListSection" onClick={() => {
//                     scroll('WaitingListSection')
//                   }} className="bg-black text-white py-2 px-4 rounded-md flex items-center dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
//                   {tr('waitingList.button', t, l)}
//                   <ArrowUpRightIcon className="w-4 h-4 ml-2" />
//                 </Link>
//                 <QrCode className="w-16 h-16 text-gray-500 ml-4" />
//               </div>
//                 */}
//             </CardContent>
//           </Card>
//           <Card className="w-full shadow-lg dark:shadow-gray-900 dark:border-gray-700">
//             <CardContent className="mb-2">
//               <LazyImage
//                 id="two_we_guide_review_writing"
//                 alt="Our App Guides Review Writing"
//                 className="w-full h-auto mt-6 mb-4 rounded-sm"
//                 height={288}
//                 src="/app/app_review.png"
//                 style={{
//                   aspectRatio: "400/200",
//                   objectFit: "cover",
//                 }}
//                 width={576} />
//               <h2 className="text-xl font-semibold mb-4 mt-6 flex">
//                 <NumericIndex index={2} />
//                 {tr('engagementApp.step2Title', t, l)}
//               </h2>
//               <p className="text-gray-600 mb-4 mt-4 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: tr('engagementApp.step2Text', t, l)}}>
//               </p>
//               <div className="flex flex-col items-start mb-4">
//                 <div className="flex items-center">
//                   <CheckIcon className="w-6 h-6 mr-2 shrink-0" />
//                   <p dangerouslySetInnerHTML={{ __html: tr('engagementApp.step2Bullet1', t, l)}}></p>
//                 </div>
//                 <div className="flex items-center mt-2">
//                   <CheckIcon className="w-6 h-6 mr-2 shrink-0" />
//                   <p dangerouslySetInnerHTML={{ __html: tr('engagementApp.step2Bullet2', t, l)}}></p>
//                 </div>
//                 <div className="flex items-center mt-2 ">
//                   <CheckIcon className="w-6 h-6 mr-2 shrink-0" />
//                   <p dangerouslySetInnerHTML={{ __html: tr('engagementApp.step2Bullet3', t, l)}}></p>
//                 </div>
//               </div>
//               {/*
//               <div className="flex justify-between items-center">
//                 <Link href="#scroll=WaitingListSection" onClick={() => {
//                     scroll('WaitingListSection')
//                   }} className="bg-black text-white py-2 px-4 rounded-md flex items-center dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
//                     {tr('waitingList.button', t, l)}
//                   <ArrowUpRightIcon className="w-4 h-4 ml-2" />
//                 </Link>
//                 <PenToolIcon className="w-16 h-16 text-gray-500 ml-4" />
//               </div>
//               */}
//             </CardContent>
//           </Card>
//           <Card className="w-full shadow-lg dark:shadow-gray-900 dark:border-gray-700">
//             <CardContent className="mb-2">
//               <LazyImage
//                 id="three_dashboard"
//                 alt="Watch Your Ratings Soar"
//                 className="w-full h-auto mt-6 mb-4 rounded-sm"
//                 height={288}
//                 src="/app/app_dashboard.png"
//                 style={{
//                   aspectRatio: "400/200",
//                   objectFit: "cover",
//                 }}
//                 width={576} />

//               <h2 className="text-xl font-semibold mb-4 mt-6 flex">
//                 <NumericIndex index={3} />
//                 {tr('engagementApp.step3Title', t, l)}
//               </h2>

//               <p className="text-gray-600 mb-4 mt-4 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: tr("engagementApp.step3Text", t, l)}}>
//               </p>

//               <div className="flex flex-col items-start mb-4">
//                 <div className="flex items-center">
//                   <CheckIcon className="w-6 h-6 mr-2 shrink-0" />
//                   <p dangerouslySetInnerHTML={{__html: tr('engagementApp.step3Bullet1', t , l)}}></p>
//                 </div>
//                 <div className="flex items-center mt-2">
//                   <CheckIcon className="w-6 h-6 mr-2 shrink-0" />
//                   <p dangerouslySetInnerHTML={{__html: tr('engagementApp.step3Bullet2', t , l)}}></p>
//                 </div>
//                 <div className="flex items-center mt-2">
//                   <CheckIcon className="w-6 h-6 mr-2 shrink-0" />
//                   <p dangerouslySetInnerHTML={{__html: tr('engagementApp.step3Bullet3', t , l)}}></p>
//                 </div>
//               </div>
//               {/*
//               <div className="flex justify-between items-center">
//                 <Link href="#scroll=WaitingListSection" onClick={() => {
//                   scroll('WaitingListSection')
//                 }} className="bg-black text-white py-2 px-4 rounded-md flex items-center dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
//                   {tr('waitingList.button', t, l)}
//                   <ArrowUpRightIcon className="w-4 h-4 ml-2" />
//                 </Link>
//                 <SparklesIcon className="w-16 h-16 text-gray-500 ml-4" />
//               </div>
//               */}
//             </CardContent>
//           </Card>
//         </div>
//         <i className="text-sm text-gray-500 p-0 m-0 px-8 pb-4 block" dangerouslySetInnerHTML={{ __html: tr('engagementApp.note', t ,l)}}>
//         </i>
