import { Github } from "lucide-react";
import { LinkButton } from "./LinkButton";
import { tr } from "@/lib/translation";
import config from "../config.json";

export const GithubLink = ({ className, language, translations, inFooter }) => {
	return (
		<LinkButton
			href={config.githubLink}
			className={`-mr-[5px] ${className ? className : ""}`}
		>
			<Github
				color="white"
				className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100  ${
					inFooter ? "" : "hidden"
				}`}
			/>
			{!inFooter && (
				<Github className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:visible" />
			)}

			<span className="sr-only">
				{tr("header.githubLink", translations, language)}
			</span>
		</LinkButton>
	);
};
