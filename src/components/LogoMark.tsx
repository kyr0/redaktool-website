import { cn } from "@/lib/utils";

export const LogoMark = ({ className = "" }) => {
	return (
		<>
			<img
				src="/ci/logomark_white.svg"
				alt="RedakTool logomark"
				className={cn("h-8 hidden dark:block", className)}
			/>
			<img
				src="/ci/logomark_black.svg"
				alt="RedakTool logomark"
				className={cn("h-8 dark:hidden", className)}
			/>
			<span className={cn("sr-only", className)}>RedakTool LOGOMARK</span>
		</>
	);
};
