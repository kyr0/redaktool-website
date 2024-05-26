import { cn } from "@/lib/utils";
import type { FC } from "react";

export const SectionBadge: FC<any> = ({ children, className }) => {
	return (
		<div
			className={cn(
				"inline-block bg-black rounded-full px-3 py-1 text-sm text-white mb-4 dark:bg-gray-800",
				className || "",
			)}
		>
			<span className="flex justify-center items-center gap-1">{children}</span>
		</div>
	);
};
