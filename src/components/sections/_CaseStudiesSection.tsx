import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/riItnI51WsT
 */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CaseStudiesSection() {
	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 px-32 items-start">
				<div className="space-y-6">
					<div className="text-center lg:text-left">
						<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 mb-4">
							Become more successful with RedakTool
						</div>
						<h2 className="text-2xl font-bold flex items-center justify-center md:justify-start">
							<BookIcon className="w-6 h-6 mr-2" />
							CASE STUDIES
						</h2>
						<p className="mt-4 text-lg pr-4">
							Whether you are a small business, or a large corporation, we
							invite you to join the RedakTool.ai family and experience the
							transformative power of AI in online reputation management. Watch
							what our clients say about our products and services.
						</p>
					</div>
					<Button
						className="mx-auto lg:mx-0 flex items-center"
						variant="default"
					>
						Talk to us
						<ArrowUpRightIcon className="ml-2 h-4 w-4" />
					</Button>
				</div>
				<div className="space-y-6">
					<Card className="border-dashed">
						<CardContent className="relative">
							<QuoteIcon className="absolute top-0 left-0 text-gray-700 text-opacity-10 w-16 h-16 m-4" />
							<div className="flex items-center justify-end">
								<div className="inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-2xl p-4 border-0 text-right">
									3 to 5 stars on Google in just 3 Months
									<ArrowUpRightIcon className="w-32 h-32 ml-4" />
								</div>
							</div>
							<p className="mt-4 italic text-lg text-gray-500 font-semibold">
								"I've never seen a better change in reputation management. We're
								still sitting here, blown away by the numbers. The Insights
								we've got from RedakTool.ai prepared us to take the right
								decisions. Our customers love us now."
							</p>
							<p className="mt-4">
								<span className="font-bold text-lg pl-4">
									- Max Mustermann,
								</span>
								<span className="font-medium text-base pl-2">
									Head of Marketing
									<span className="font-medium text-base pl-2">
										at XYZ Company
									</span>
								</span>
							</p>
							<div className="mt-4 flex flex-col sm:flex-row items-center justify-between">
								<div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mb-4 sm:mb-0">
									<Button variant="default">
										Get in Touch
										<ArrowUpRightIcon className="ml-2 h-4 w-4" />
									</Button>
									<Button className="mt-4 sm:mt-0 sm:ml-4" variant="outline">
										Download Case Study
										<DownloadIcon className="ml-2 h-4 w-4" />
									</Button>
								</div>
								<img
									alt="Company Logo"
									className="w-16 h-16"
									height="64"
									src="/placeholder.svg"
									style={{
										aspectRatio: "64/64",
										objectFit: "cover",
									}}
									width="64"
								/>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-32 items-start">
				<div className="space-y-6">
					<Card className="border-dashed">
						<CardContent className="relative">
							<QuoteIcon className="absolute top-0 left-0 text-gray-700 text-opacity-10 w-16 h-16 m-4" />
							<div className="flex items-center justify-between">
								<Avatar>
									<img
										alt="User Profile"
										className="w-32 h-32 object-cover"
										src="/placeholder.svg?height=64&width=64"
									/>
								</Avatar>
								<div className="inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-2xl p-4 border-0 text-right">
									4 to 5 stars on Yelp in just 6 Months
									<PercentIcon className="w-16 h-16 ml-4" />
								</div>
							</div>
							<p className="mt-4 italic text-lg text-gray-500 font-semibold">
								"The transformation in our online reputation is unbelievable.
								The insights from RedakTool.ai helped us make the right decisions.
								Our customers are happier than ever."
							</p>
							<p className="mt-4">
								<span className="font-bold text-lg pl-4">- Jane Doe,</span>
								<span className="font-medium text-base pl-2">
									CEO
									<span className="font-medium text-base pl-2">
										at ABC Company
									</span>
								</span>
							</p>
							<div className="mt-4 flex items-center justify-between">
								<div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mb-4 sm:mb-0">
									<Button variant="default">
										Get in Touch
										<ArrowUpRightIcon className="ml-2 h-4 w-4" />
									</Button>
									<Button className="mt-4 sm:mt-0 sm:ml-4" variant="outline">
										Download Case Study
										<DownloadIcon className="ml-2 h-4 w-4" />
									</Button>
								</div>
								<img
									alt="Company Logo"
									className="w-16 h-16"
									height="64"
									src="/placeholder.svg"
									style={{
										aspectRatio: "64/64",
										objectFit: "cover",
									}}
									width="64"
								/>
							</div>
						</CardContent>
					</Card>
				</div>
				<div className="space-y-4">
					<Card className="border-dashed">
						<CardContent className="relative">
							<QuoteIcon className="absolute top-0 left-0 text-gray-700 text-opacity-10 w-16 h-16 m-4" />
							<div className="flex items-center justify-end">
								<div className="inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-2xl p-4 border-0 text-right">
									4.5 stars on TripAdvisor in just 4 Months
									<SmileIcon className="w-16 h-16 ml-4" />
								</div>
							</div>
							<p className="mt-4 italic text-lg text-gray-500 font-semibold">
								"Our online reputation has never been better. The insights from
								RedakTool.ai were invaluable in helping us make the right
								decisions. Our customers are extremely satisfied."
							</p>
							<p className="mt-4">
								<span className="font-bold text-lg pl-4">- John Smith,</span>
								<span className="font-medium text-base pl-2">
									Head of Customer Service
									<span className="font-medium text-base pl-2">
										at DEF Company
									</span>
								</span>
							</p>
							<div className="mt-4 flex items-center justify-between">
								<div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mb-4 sm:mb-0">
									<Button variant="default">
										Get in Touch
										<ArrowUpRightIcon className="ml-2 h-4 w-4" />
									</Button>
									<Button className="mt-4 sm:mt-0 sm:ml-4" variant="outline">
										Download Case Study
										<DownloadIcon className="ml-2 h-4 w-4" />
									</Button>
								</div>
								<img
									alt="Company Logo"
									className="w-16 h-16"
									height="64"
									src="/placeholder.svg"
									style={{
										aspectRatio: "64/64",
										objectFit: "cover",
									}}
									width="64"
								/>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-0 px-32 items-start">
				<div className="space-y-6 lg:col-span-1">
					<Card className="border-dashed mt-12">
						<CardContent className="relative mt-4">
							<QuoteIcon className="absolute top-0 left-0 text-gray-700 text-opacity-10 w-16 h-16 m-4" />
							<div className="flex items-center justify-end">
								<div className="inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-2xl p-4 border-0 text-right">
									Writing responses to reviews became a breeze
									<FeatherIcon className="w-16 h-16 ml-4" />
								</div>
							</div>
							<p className="mt-4 italic text-lg text-gray-500 font-semibold">
								"RedakTool truly understands what the customers say. It's so much
								less stressful and time consuming now. Our teams can focus on
								what truly matters."
							</p>
							<p className="mt-4">
								<span className="font-bold text-lg pl-4">- Anonymous,</span>
								<span className="font-medium text-base pl-2">
									Team Lead
									<span className="font-medium text-base pl-2">
										at GHI Company
									</span>
								</span>
							</p>
							<div className="mt-4 flex items-center justify-between">
								<div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mb-4 sm:mb-0">
									<Button variant="default">
										Get in Touch
										<ArrowUpRightIcon className="ml-2 h-4 w-4" />
									</Button>
									<Button className="mt-4 sm:mt-0 sm:ml-4" variant="outline">
										Download Case Study
										<DownloadIcon className="ml-2 h-4 w-4" />
									</Button>
								</div>
								<img
									alt="Company Logo"
									className="w-16 h-16"
									height="64"
									src="/placeholder.svg"
									style={{
										aspectRatio: "64/64",
										objectFit: "cover",
									}}
									width="64"
								/>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
}

function ArrowUpRightIcon(props) {
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
			<path d="M7 7h10v10" />
			<path d="M7 17 17 7" />
		</svg>
	);
}

function BookIcon(props) {
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
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
		</svg>
	);
}

function DownloadIcon(props) {
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
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
			<polyline points="7 10 12 15 17 10" />
			<line x1="12" x2="12" y1="15" y2="3" />
		</svg>
	);
}

function FeatherIcon(props) {
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
			<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
			<line x1="16" x2="2" y1="8" y2="22" />
			<line x1="17.5" x2="9" y1="15" y2="15" />
		</svg>
	);
}

function PercentIcon(props) {
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
			<line x1="19" x2="5" y1="5" y2="19" />
			<circle cx="6.5" cy="6.5" r="2.5" />
			<circle cx="17.5" cy="17.5" r="2.5" />
		</svg>
	);
}

function QuoteIcon(props) {
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
			<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
			<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
		</svg>
	);
}

function SmileIcon(props) {
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
			<circle cx="12" cy="12" r="10" />
			<path d="M8 14s1.5 2 4 2 4-2 4-2" />
			<line x1="9" x2="9.01" y1="9" y2="9" />
			<line x1="15" x2="15.01" y1="9" y2="9" />
		</svg>
	);
}
