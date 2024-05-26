import { cn } from "@/lib/utils";

export const Logo = ({ className = "", width = 48, height = 48 }) => {
	return (
		<>
			<img
				src="/icons/icon.svg"
				alt="RedakTool logo"
				width={width}
				height={height}
				className={cn("h-24 hidden dark:block", className)}
			/>
			<img
				src="/icons/icon.svg"
				alt="RedakTool logo"
				width={width}
				height={height}
				className={cn("h-24 dark:hidden", className)}
			/>
			<span className={cn("ml-3 text-xl", className)}><strong>RedakTool</strong></span>
		</>
	);
};
