import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tr } from "@/lib/translation";
import { Tr } from "@/translations/comparison";
import {
	BarChart,
	Clock,
	DollarSign,
	Euro,
	Eye,
	HeartHandshake,
	Library,
	Lightbulb,
	LineChart,
	PenLine,
	Scale,
	Smile,
	Sparkle,
	Sparkles,
	Target,
	Text,
	TimerIcon,
} from "lucide-react";
import PieChart from "../PieChart";
import { SectionBadge } from "../SectionBadge";
import { SectionHeading } from "../SectionHeading";
import { SubStar } from "../SubStar";
import { StarFull } from "../icons/StarFull";
import { Badge } from "../ui/badge";

export default function ComparisonSection({ t, l }) {
	return (
		<section
			id="ComparisonSection"
			key="ComparisonSection"
			className="relative z-1 flex flex-col items-center gap-5 p-2 md:p-10 py-16 md:py-24 mb-8 mt-8 bg-gradient-to-tl from-white via-white to-gray-100 dark:from-black dark:via-black dark:to-gray-900"
		>
			<SectionBadge className="mt-10">
				<Sparkles className="w-4 h-4" />{" "}
				<span>{tr("comparison.badgeTitle", t, l)}</span>
			</SectionBadge>
			<SectionHeading>{tr("comparison.heading", t, l)}</SectionHeading>

			<p className="text-xl text-gray-600 max-w-prose mx-auto text-center dark:text-gray-500">
				<Tr k={"comparison.description"} l={l} />
			</p>
			<div className="relative comparison-grid grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl mt-20">
				<ComparisonCard
					className="rounded-bl-none rounded-tr-none shadow-none border-l-0 border-t-0 bg-gradient-to-br"
					badgeText={
						<>
							<Smile className="w-4 h-4 mr-1 shrink-0" />
							{tr("comparison.dimension3Badge", t, l)}
						</>
					}
					icon={<Clock className="w-16 h-16 mr-2 shrink-0" />}
					title={tr("comparison.dimension3Title", t, l)}
					description={
						<p
							dangerouslySetInnerHTML={{
								__html: tr("comparison.dimension3Description", t, l),
							}}
						/>
					}
					chart={
						undefined /*<PieChart size={200} initialPercentage={100} finalPercentage={10} animationDuration={3} className="w-full h-full aspect-[2/1] mt-14 mb-6" />*/
					}
					figure={
						undefined /*<><i>Fig 1.: Get <strong>up to 90%<SubStar/>faster</strong>, in writing responses</i></>*/
					}
				/>

				<ComparisonCard
					className="rounded-tl-none rounded-br-none shadow-none border-t-0 border-r-0 bg-gradient-to-bl items-stretch"
					badgeText={
						<>
							<BarChart className="w-4 h-4 mr-1 shrink-0 scale-x-[-1]" />
							{tr("comparison.dimension2Badge", t, l)}
						</>
					}
					icon={<Euro className="w-16 h-16 mr-2 shrink-0" />}
					title={tr("comparison.dimension2Title", t, l)}
					description={
						<p
							dangerouslySetInnerHTML={{
								__html: tr("comparison.dimension2Description", t, l),
							}}
						/>
					}
					chart={
						undefined /*<PieChart size={200} initialPercentage={0} finalPercentage={70} animationDuration={3} className="w-full h-full aspect-[2/1] mt-14 mb-6" />*/
					}
					figure={
						undefined /*<><i>Fig 2.: Get rid of <strong>up to 70%<SubStar/>mental distress</strong> when writing responses</i></>*/
					}
				/>

				<ComparisonCard
					className="rounded-bl-none rounded-br-none rounded-tl-none shadow-none border-b-0 border-l-0 bg-gradient-to-tr"
					badgeText={
						<>
							<StarFull className="w-4 h-4 mr-1 shrink-0 scale-x-[-1]" />
							{tr("comparison.dimension1Badge", t, l)}
						</>
					}
					icon={<PenLine className="w-16 h-16 mr-2 shrink-0" />}
					title={tr("comparison.dimension1Title", t, l)}
					description={
						<p
							dangerouslySetInnerHTML={{
								__html: tr("comparison.dimension1Description", t, l),
							}}
						/>
					}
					chart={
						undefined /*<PieChart size={200} initialPercentage={0} finalPercentage={45} animationDuration={3} className="w-full h-full aspect-[2/1] mt-14 mb-6" />*/
					}
					figure={
						undefined /*<><i>Fig 3.: Get rid of <strong>up to 45%<SubStar/>of mistakes</strong>, when writing responses</i></>*/
					}
				/>

				<ComparisonCard
					className="rounded-br-none rounded-bl-none rounded-tr-none shadow-none border-b-0 border-r-0 bg-gradient-to-tl"
					badgeText={
						<>
							<Lightbulb className="w-4 h-4 mr-1 shrink-0 scale-x-[-1]" />
							{tr("comparison.dimension4Badge", t, l)}
						</>
					}
					icon={<LineChart className="w-16 h-16 mr-2 shrink-0" />}
					title={tr("comparison.dimension4Title", t, l)}
					description={
						<p
							dangerouslySetInnerHTML={{
								__html: tr("comparison.dimension4Description", t, l),
							}}
						/>
					}
					chart={
						undefined /*PieChart size={200} initialPercentage={0} finalPercentage={97} animationDuration={3} className="w-full h-full aspect-[2/1] mt-14 mb-6" />*/
					}
					figure={
						undefined /*<><i>Fig 4.: In <strong>up to 97%<SubStar/>of cases</strong>, humans evaluate our AI's responses as excellent</i></>*/
					}
				/>
			</div>
			{/*
      <p className="text-sm text-gray-400 max-w-prose mx-auto text-center mt-5">
        <em>
          <sup>*</sup>
          these numbers are based on evidence, collected in our case studies. We're working on getting more data in
          production, and will update these numbers according to your customers' interactive feedback.
        </em>
      </p>
      */}
			{/*
      <Button className="text-md py-2 px-6 mt-5 justify-center items-center" variant="outline">
        <Library className="h-4 w-4 mr-1" /> &nbsp;Goto Case Studies 
      </Button>
       */}
		</section>
	);
}

const ComparisonCard = ({
	icon,
	className,
	badgeText,
	title,
	description,
	chart = undefined,
	figure = undefined,
}) => {
	return (
		<Card
			className={`flex flex-col ${className} dark:from-black dark:to-gray-900 dark:border-gray-700`}
		>
			<CardHeader className="flex flex-shrink-0">
				<SectionBadge className="w-fit mb-6 text-md">{badgeText}</SectionBadge>
				<CardTitle className="flex items-center">
					{icon}
					<span className="text-2xl md:text-4xl break-normal">{title}</span>
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col justify-between flex-grow items-center text-lg text-gray-500">
				{description}
				{chart || ""}
				{figure && <figcaption className="text-gray-500">{figure}</figcaption>}
			</CardContent>
		</Card>
	);
};
