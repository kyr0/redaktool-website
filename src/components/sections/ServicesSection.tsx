import { Button } from "@/components/ui/button";
import { useFadeInOnVisible } from "@/hooks/fade-in";
import { tr } from "@/lib/translation";
import {
	ArrowBigRightDash,
	Clock12,
	CloudCog,
	Cog,
	CogIcon,
	DatabaseZap,
	Fingerprint,
	GraduationCap,
	Headphones,
	KeyRound,
	Mail,
	Mailbox,
	MessageCircleMore,
	PersonStanding,
	PhoneCall,
	Presentation,
	Server,
	ShieldCheck,
	ShieldHalf,
	ShieldPlus,
	Smartphone,
	TrendingUp,
	UnplugIcon,
	UserCircle,
} from "lucide-react";
import LazyImage from "../LazyImage";
import { SectionBadge } from "../SectionBadge";
import { SectionHeading } from "../SectionHeading";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

// TODO: used later again, dont remove
function ContactBlock({ t, l }) {
	return (
		<>
			<div className="flex flex-row justify-center items-center mt-7 font-bold -mb-4">
				Contact us:
			</div>
			<div className="flex flex-row">
				<Button
					className="mt-8 mb-8 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700"
					variant="outline"
				>
					<Mail className="w-4 h-4 mr-2" />
					E-mail
				</Button>
				<Button
					className="mt-8 mb-8 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700"
					variant="outline"
				>
					<Smartphone className="w-4 h-4 mr-2" />
					WhatsApp
				</Button>
				<Button
					className="mt-8 mb-8 dark:bg-gray-800 dark:hover:bg-gray-700"
					variant="outline"
				>
					<PhoneCall className="w-4 h-4 mr-2" />
					Call
				</Button>
			</div>

			<div className="flex flex-row text-sm justify-center items-center -mt-4 mb-5 italic text-gray-500">
				Mo. &ndash; Fr.: &nbsp;9am &ndash; 5pm &nbsp;·&nbsp; Berlin time
				&nbsp;·&nbsp; UTC + 1
			</div>
		</>
	);
}

export default function ServicesSection({ t, l }) {
	const [ref1, visible1] = useFadeInOnVisible(300);
	const [ref2, visible2] = useFadeInOnVisible(600);
	const [ref3, visible3] = useFadeInOnVisible(900);

	const [ref4, visible4] = useFadeInOnVisible(300);
	const [ref5, visible5] = useFadeInOnVisible(600);
	const [ref6, visible6] = useFadeInOnVisible(900);

	const [ref7, visible7] = useFadeInOnVisible(300);
	const [ref8, visible8] = useFadeInOnVisible(600);
	const [ref9, visible9] = useFadeInOnVisible(1500);

	const [ref10, visible10] = useFadeInOnVisible(300);
	const [ref11, visible11] = useFadeInOnVisible(600);
	const [ref12, visible12] = useFadeInOnVisible(900);

	return (
		<div
			id="ServicesSection"
			key="ServicesSection"
			className="relative z-1 py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-bl from-gray-100 via-white to-white mt-8 md:mt-16 lg:mt-24 -mb-8 md:mb-24 dark:from-gray-900 dark:via-black dark:to-black"
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16 mt-16">
					<div className="inline-block bg-black rounded-full px-3 py-1 text-sm text-white mb-4 dark:bg-gray-800">
						<span className="flex justify-center items-center gap-1">
							<TrendingUp className="w-4 h-4" />{" "}
							<span>{tr("services.badgeTitle", t, l)}</span>
						</span>
					</div>
					<SectionHeading>{tr("services.heading", t, l)}</SectionHeading>
					<p
						className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
						dangerouslySetInnerHTML={{
							__html: tr("services.description", t, l),
						}}
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="order-2 md:order-1 flex flex-col items-center md:mt-8 p-4 rounded-md">
						<ul className="text-2xl p-6">
							<li
								ref={ref1}
								className={`flex p-0 py-6 md:p-6 lg:p-6 justify-center items-center fade-in ${
									visible1 ? "visible" : ""
								}`}
							>
								<CloudCog className="h-10 w-10 mt-1 mr-8 flex-shrink-0" />{" "}
								{tr("services.service1Bullet1", t, l)}
							</li>
							<li
								ref={ref2}
								className={`flex p-0 py-6 md:p-6 lg:p-6 justify-center items-center fade-in ${
									visible2 ? "visible" : ""
								}`}
							>
								<GraduationCap className="h-10 w-10 -mt-1 mr-8 flex-shrink-0" />{" "}
								{tr("services.service1Bullet2", t, l)}
							</li>
							{/**
              <li ref={ref3} className={`flex p-0 py-6 md:p-6 lg:p-6 justify-center items-center fade-in ${visible3 ? 'visible' : ''}`}>
                <ShieldHalf className="h-10 w-10 mt-1 mr-8 flex-shrink-0"/> {tr('services.service1Bullet3', t, l)}
              </li>
               */}
						</ul>
					</div>

					<Card className="order-1 md:order-2 flex flex-col items-center md:mt-8 p-4 rounded-md bg-gradient-to-bl from-white to-gray-100 via-gray-50 dark:from-black dark:via-gray-950 dark:to-gray-900 rounded-br-none rounded-tr-none shadow-none border-r-0 border-t-0">
						<div className="relative">
							<CloudCog className="w-16 h-16 text-gray-500 absolute -top-8 -right-14 rotate-12" />
							<CloudCog className="w-12 h-12 text-gray-400 absolute top-16 -left-20 -rotate-12" />
							<CloudCog className="w-8 h-8 text-gray-300 absolute -bottom-4 right-3 rotate-12 " />
							<LazyImage
								alt="Service Illustration"
								className="mb-8 mt-8 rounded-md"
								height={167}
								src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								style={{
									aspectRatio: "200/100",
									objectFit: "cover",
								}}
								width={250}
							/>
						</div>
						<SectionBadge>
							<CloudCog className="w-4 h-4 mr-1" />{" "}
							{tr("services.service1Badge", t, l)}
						</SectionBadge>
						<h3 className="text-4xl font-medium text-gray-900 mb-4 dark:text-gray-300 text-center md:text-left">
							{tr("services.service1Title", t, l)}
						</h3>
						<p className="mt-2 text-lg text-gray-500 ml-4 mr-4 pl-8 pr-8 pb-8 dark:text-gray-400">
							{tr("services.service1Description", t, l)}
						</p>
						{/*
            <ContactBlock />
            */}
					</Card>

					<Card className="order-3 md:order-3 flex flex-col items-center md:mt-8 rounded-md bg-white bg-gradient-to-bl via-gray-100 from-gray-200 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black rounded-bl-none rounded-br-none rounded-tl-none shadow-none border-b-0 border-l-0">
						<div className="relative">
							<Cog className="w-20 h-20 text-gray-500 absolute -top-10 -right-20 rotate-12" />
							<Cog className="w-12 h-12 text-gray-400 absolute top-16 -left-20 -rotate-12" />
							<Cog className="w-8 h-8 text-gray-300 absolute -bottom-4 right-2 rotate-12 " />

							<LazyImage
								alt="Service Illustration"
								className="mb-8 mt-8 rounded-md"
								height={167}
								src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								style={{
									aspectRatio: "200/100",
									objectFit: "cover",
								}}
								width={250}
							/>
						</div>
						<SectionBadge>
							<Cog className="w-4 h-4 mr-1" />{" "}
							{tr("services.service2Badge", t, l)}
						</SectionBadge>
						<h3 className="text-4xl font-medium text-gray-900 mb-4 dark:text-gray-300 text-center md:text-left">
							{tr("services.service2Title", t, l)}
						</h3>
						<p className="mt-2 text-lg text-gray-500 ml-4 mr-4 pl-8 pr-8 pb-8 dark:text-gray-400">
							{tr("services.service2Description", t, l)}
						</p>
						{/*<ContactBlock />*/}
					</Card>
					<div className="order-4 md:order-4 flex flex-col items-center md:mt-8 p-4 rounded-md">
						<ul className="text-2xl p-4">
							<li
								ref={ref4}
								className={`flex p-0 py-6 md:p-6 lg:p-6 justify-center items-center fade-in ${
									visible4 ? "visible" : ""
								}`}
							>
								<Fingerprint className="h-10 w-10 mt-1 mr-8 flex-shrink-0 items-center" />{" "}
								{tr("services.service2Bullet1", t, l)}
							</li>
							<li
								ref={ref5}
								className={`flex p-0 py-6 md:p-6 lg:p-6 justify-center items-center fade-in ${
									visible5 ? "visible" : ""
								}`}
							>
								<Cog className="h-10 w-10 -mt-1 mr-8 flex-shrink-0 " />{" "}
								{tr("services.service2Bullet2", t, l)}
							</li>
							<li
								ref={ref6}
								className={`flex p-0 py-6 md:p-6 lg:p-6 justify-center items-center fade-in ${
									visible6 ? "visible" : ""
								}`}
							>
								<KeyRound className="h-10 w-10 mt-1 mr-8 flex-shrink-0" />{" "}
								{tr("services.service2Bullet3", t, l)}
							</li>
						</ul>
					</div>

					<div className="order-6 md:order-5 flex flex-col items-center md:mt-8 p-4 rounded-md ">
						<ul className="text-2xl p-4">
							<li
								ref={ref7}
								className={`flex p-0 py-6 md:p-6 lg:p-6 justify-center items-center fade-in ${
									visible7 ? "visible" : ""
								}`}
							>
								<UserCircle className="h-10 w-10 mt-1 mr-8 flex-shrink-0" />{" "}
								{tr("services.service3Bullet1", t, l)}
							</li>
							<li
								ref={ref8}
								className={`flex p-0 py-6 md:p-6 lg:p-6 justify-center items-center fade-in ${
									visible8 ? "visible" : ""
								}`}
							>
								<MessageCircleMore className="h-10 w-10 -mt-1 mr-8 flex-shrink-0" />{" "}
								{tr("services.service3Bullet2", t, l)}
							</li>
							<li
								ref={ref9}
								className={`flex p-0 py-6 md:p-6 lg:p-6 justify-center items-center fade-in ${
									visible9 ? "visible" : ""
								}`}
							>
								<Clock12 className="h-10 w-10 mt-1 mr-8 flex-shrink-0" />{" "}
								{tr("services.service3Bullet3", t, l)}
							</li>
						</ul>
					</div>
					<Card className="order-5 md:order-6 flex flex-col items-center md:mt-8 p-4 rounded-md bg-gradient-to-tr from-gray-200 to-white via-gray-50 rounded-br-none rounded-tr-none shadow-none border-r-0 border-t-0 dark:from-gray-800 dark:to-black dark:via-gray-950 ">
						<div className="relative">
							<Headphones className="w-16 h-16 text-gray-500 absolute -top-6 -left-24 rotate-12" />
							<Headphones className="w-8 h-8 text-gray-400 absolute -top-10 -right-12 -rotate-12" />
							<Headphones className="w-6 h-6 text-gray-300 absolute -bottom-4 right-8 rotate-12 " />
							<LazyImage
								alt="Service Illustration"
								className="mb-8 mt-8 rounded-md"
								height={167}
								src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=90&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								style={{
									aspectRatio: "200/100",
									objectFit: "cover",
								}}
								width={250}
							/>
						</div>
						<SectionBadge>{tr("services.service3Badge", t, l)}</SectionBadge>
						<h3 className="text-4xl font-medium text-gray-900 mb-4 dark:text-gray-300 text-center md:text-left">
							{tr("services.service3Title", t, l)}
						</h3>
						<p className="mt-2 text-lg text-gray-500 ml-4 mr-4 pl-8 pr-8 pb-8 dark:text-gray-400">
							{tr("services.service3Description", t, l)}
						</p>
						{/*<ContactBlock />*/}
					</Card>

					{/*
          <Card className="order-7 md:order-7 flex flex-col items-center md:mt-8 rounded-md bg-white bg-gradient-to-bl via-gray-100 from-gray-200 to-white dark:from-gray-900 dark:via-gray-950 dark:to-black  rounded-bl-none rounded-br-none rounded-tl-none shadow-none border-b-0 border-l-0">

            <div className="relative">
                  <Server className="w-16 h-16 text-gray-500 absolute -top-10 -right-20 -rotate-12"/> 
                  <Server className="w-12 h-12 text-gray-400 absolute top-16 -left-16 rotate-12"/> 
                  <Server className="w-8 h-8 text-gray-300 absolute -bottom-10 left-14 -rotate-12 "/>
              <img
                alt="Service Illustration"
                className="mb-8 mt-8 rounded-md"
                height="200"
                src="https://images.unsplash.com/photo-1560732488-6b0df240254a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
            </div>
            <SectionBadge>Concerned?</SectionBadge>
            <h3 className="text-4xl font-medium text-gray-900 mb-4 dark:text-gray-300 text-center">We deliver on-premise</h3>
            <p className="mt-2 text-lg text-gray-500 ml-4 mr-4 dark:text-gray-400">
              As part of our enterprise plan, we offer on-demand and dedicated hosting services. This ensures your
              online presence is always reliable and capable of handling high traffic volumes.
            </p>
          </Card>
          */}

					{/*
          <div className="order-8 md:order-8 flex flex-col items-center md:mt-8 p-4 rounded-md">
            <ul className="text-2xl p-12">
              <li ref={ref10} className={`flex p-0 py-6 md:p-6 lg:p-12 justify-center items-center fade-in ${visible10 ? 'visible' : ''}`}>
                <ShieldPlus className="h-10 w-10 mt-1 mr-3 flex-shrink-0"/> Become fully compliant to the latest regulations in data privacy.
              </li>
              <li ref={ref11} className={`flex p-0 py-6 md:p-6 lg:p-12 justify-center items-center fade-in ${visible11 ? 'visible' : ''}`}>
                <DatabaseZap className="h-10 w-10 -mt-1 mr-3 flex-shrink-0"/> Get a dedicated AI and database deployment. 
              </li>
              <li ref={ref12} className={`flex p-0 py-6 md:p-6 lg:p-12 justify-center items-center fade-in ${visible12 ? 'visible' : ''}`}>
                <ShieldCheck className="h-10 w-10 mt-1 mr-3 flex-shrink-0 "/> Get the maximum data security.
              </li>
            </ul>
          </div>
        */}
				</div>
			</div>
		</div>
	);
}
