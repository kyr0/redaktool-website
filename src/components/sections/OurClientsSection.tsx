import { computeCurrentTheme, theme } from "@/lib/theme";
import { useStore } from "@nanostores/react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import LazyImage from "../LazyImage";
import { SectionHeading } from "../SectionHeading";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel";

export interface LogoBase {
	name: string;
	theme: "dark" | "theme-light" | "indeterminate";
	src: string;
	extraClassNames: string;
}

const logoBase: Array<LogoBase> = [
	{
		name: "Netlight",
		theme: "indeterminate",
		src: "/logos/clients/Netlight_Consulting_logo.svg",
		extraClassNames: "",
	},
	{
		name: "FTI Group",
		theme: "indeterminate",
		src: "/logos/clients/FTI_Group_Logo.svg",
		extraClassNames: "",
	},
	{
		name: "Freigeist",
		theme: "theme-light",
		src: "/logos/clients/Logo_FREIgeist_black.svg",
		extraClassNames: "",
	},
	{
		name: "Freigeist",
		theme: "dark",
		src: "/logos/clients/Logo_FREIgeist_white.svg",
		extraClassNames: "",
	},
	{
		name: "interliving Bäucke",
		theme: "indeterminate",
		src: "/logos/clients/Baeucke_Logo_Neu2.png",
		extraClassNames: "",
	},
	{
		name: "Burghotel",
		theme: "indeterminate",
		src: "/logos/clients/Logo_BURGhotel.svg",
		extraClassNames: "",
	},
	{
		name: "Hotel Schere",
		theme: "indeterminate",
		src: "/logos/clients/HotelSchereLogo.png",
		extraClassNames: "",
	},
];

export default function OurClientsSection() {
	const theme$ = useStore(theme);
	const [logos, setLogos] = useState([]);

	useEffect(() => {
		const currentTheme = computeCurrentTheme();
		setLogos(
			logoBase.filter(
				(i) => i.theme === "indeterminate" || i.theme === currentTheme,
			),
		);
	}, []);

	return (
		<section key="OurClientsSection" className="relative z-1 w-full mb-8 mt-12">
			<div className="space-y-3 w-full text-center">
				<div className="inline-block bg-gray-100 rounded-full px-3 py-1 mt-12 text-sm text-black mb-2">
					Join the RedakTool family!
				</div>

				<SectionHeading>Our Clients</SectionHeading>

				<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mb-6">
					We're providing exceptional services to our clients worldwide.
				</p>
			</div>
			<Carousel
				plugins={[
					Autoplay({
						delay: 3500,
					}),
				]}
				opts={{
					align: "start",
					loop: true,
				}}
				orientation="horizontal"
				className="w-full relative"
			>
				<CarouselPrevious className="z-10 absolute left-6 scale-150 -mt-4" />

				<CarouselContent className="flex grayscale">
					{logos
						.filter((img) => img)
						.map((img, index) => (
							<CarouselItem
								key={img.name}
								className="md:basis-1/3 lg:basis-1/4"
							>
								<div className="flex aspect-square items-center justify-center p-2">
									<LazyImage
										alt={img.name}
										className={`client-logo ${
											img.extraClassNames ? img.extraClassNames : ""
										}`}
										src={img.src}
									/>
								</div>
							</CarouselItem>
						))}
				</CarouselContent>

				<CarouselNext className="z-10 absolute right-6 scale-150 -mt-4" />
			</Carousel>

			{/*
          
            <div className="relative">
              <div className="z-10 absolute block h-[200px] w-16 bg-gradient-to-r top-0 from-white to-transparent dark:from-black"></div>
              <div ref={scrollEl} className="grayscale z-1 grid w-full grid-cols-2 lg:grid-cols-5 items-center justify-center gap-12 lg:gap-12 [&>img]:mx-auto whitespace-nowrap overflow-hidden mt-16 mb-12">
                <div className="flex items-center transform gap-8 md:gap-12">
                  <img
                    alt="Netlight"
                    className="client-logo"
                    src="/logos/clients/Netlight_Consulting_logo.svg"
                  />
                  <img
                    alt="Logo"
                    className="client-logo"
                    src="/logos/clients/FTI_Group_Logo.svg"
                  />
                  <img
                    alt="Logo"
                    className="client-logo block dark:hidden"
                    src="/logos/clients/Logo_FREIgeist_black.svg"
                  />

                  <img
                    alt="Logo"
                    className="client-logo hidden dark:block"
                    src="/logos/clients/Logo_FREIgeist_white.svg"
                  />
                  <img
                    alt="Logo"
                    className="client-logo"
                    src="/logos/clients/Baeucke_Logo_Neu2.png"
                  />
                  <img
                    alt="Logo"
                    className="client-logo"
                    src="/logos/clients/Logo_BURGhotel.svg"
                  />
                  <img
                    alt="Logo"
                    className="client-logo"
                    src="/logos/clients/HotelSchereLogo.png"
                  />
                </div>
              </div>

              <div className="z-10 absolute right-0 block h-[200px] w-16 bg-gradient-to-l top-0 from-white to-transparent dark:from-black"></div>
            </div>
          </div>
          */}
		</section>
	);
}
