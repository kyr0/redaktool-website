import { useFadeInOnVisible } from "@/hooks/fade-in";
import { tr } from "@/lib/translation";
import { UsersRound } from "lucide-react";
import LazyImage from "../LazyImage";
import { SectionBadge } from "../SectionBadge";
import { SectionHeading } from "../SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const LeadershipSection = ({ t, l }) => {
	return (
		<section
			id="LeadershipSection"
			key="LeadershipSection"
			className="relative z-1 w-full mx-auto py-32  bg-gradient-to-tl mb-8 from-white dark:via-black dark:to-gray-900 dark:from-black"
		>
			<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
				<div className="grid max-w-[1300px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 px-16">
					<div className="space-y-8 w-full col-span-full lg:w-[85%] xl:w-[85%] 2xl:w-[90%]">
						<div className="w-full text-center md:text-left">
							<SectionBadge>
								<UsersRound className="h-4 w-4" />
								{tr("leadership.badgeTitle", t, l)}
							</SectionBadge>
							<SectionHeading className="md:text-left font-normal">
								{tr("leadership.heading", t, l)}
							</SectionHeading>
							<p
								className="mt-6 text-xl text-gray-600 dark:text-gray-500"
								dangerouslySetInnerHTML={{
									__html: tr("leadership.description", t, l),
								}}
							/>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 relative px-8 md:px-16 lg:px-24">
					<PersonCard
						delay={200}
						name={tr("leadership.leader1Name", t, l)}
						position={tr("leadership.leader1Role", t, l)}
						description={tr("leadership.leader1Vita", t, l)}
						imageUrl={tr("leadership.leader1PhotoUrl", t, l)}
					/>

					<PersonCard
						delay={400}
						name={tr("leadership.leader2Name", t, l)}
						position={tr("leadership.leader2Role", t, l)}
						description={tr("leadership.leader2Vita", t, l)}
						imageUrl={tr("leadership.leader2PhotoUrl", t, l)}
					/>

					<PersonCard
						delay={600}
						name={tr("leadership.leader3Name", t, l)}
						position={tr("leadership.leader3Role", t, l)}
						description={tr("leadership.leader3Vita", t, l)}
						imageUrl={tr("leadership.leader3PhotoUrl", t, l)}
					/>
				</div>
			</div>
		</section>
	);
};

export const PersonCard = ({
	description,
	name,
	position,
	imageUrl,
	delay,
}) => {
	const [ref, visible] = useFadeInOnVisible(delay);

	return (
		<Card
			key={name}
			ref={ref}
			className={`fade-in ${
				visible ? "visible" : ""
			} w-full z-1 bg-white shadow-lg rounded-lg overflow-hidden dark:bg-black dark:shadow-gray-900 dark:border-gray-700 border-solid from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black bg-gradient-to-t`}
		>
			<CardHeader className="flex flex-col items-center p-6 mt-6">
				<LazyImage
					alt={`${name} Profile Picture`}
					className="h-32 w-32 mb-4 rounded-full bg-gray-200 dark:bg-gray-800"
					height={128}
					src={imageUrl}
					style={{
						aspectRatio: "128/128",
						objectFit: "cover",
					}}
					width={128}
				/>
				<CardTitle className="text-2xl font-bold text-black dark:text-white">
					{name}
				</CardTitle>
				<p className="text-md text-gray-600 dark:text-gray-400">
					&ndash; {position} &ndash;
				</p>
			</CardHeader>
			<CardContent className="px-12 py-4 mb-6 flex flex-col items-center">
				<p className="text-lg text-gray-600 dark:text-gray-500">
					{description}
				</p>
			</CardContent>
		</Card>
	);
};
