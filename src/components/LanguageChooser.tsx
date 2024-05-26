import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { stored } from "@/hooks/stored";
import type { LocalizedPaths } from "@/lib/translation";
import type { SupportedLanguage } from "@/lib/translation";
import { tr } from "@/lib/translation";
import { useCallback } from "react";

export type LanguageChooserProps = {
	language: SupportedLanguage;
	localizedPaths: LocalizedPaths;
	triggerClassName?: string;
	translations: Record<string, Record<SupportedLanguage, string>>;
};

export default function LanguageChooser({
	triggerClassName,
	language,
	localizedPaths,
	translations,
}: LanguageChooserProps) {
	const storedPreferredLanguage = stored("preferredLanguage", undefined);

	const onLanguageChange = useCallback((language: SupportedLanguage) => {
		const url = new URL(location.href);
		if (url.pathname !== localizedPaths[language]) {
			storedPreferredLanguage.set(language);
			document.location.href = localizedPaths[language] + url.hash;
		}
	}, []);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				className="cursor-pointer mr-2 md:mr-4 -ml-4"
				asChild
			>
				<Button
					size="sm"
					variant="link"
					className={`h-7 text-black dark:text-white underline ${triggerClassName}`}
				>
					{language.toUpperCase()}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 bg-white text-black active:bg-gray-100 dark:bg-black dark:text-white dark:active:bg-gray-900">
				<DropdownMenuItem onClick={() => onLanguageChange("de")}>
					{tr("language_chooser.german", translations, language)}{" "}
					<DropdownMenuShortcut>
						{tr("language_chooser.de", translations, language)}
					</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => onLanguageChange("en")}>
					{tr("language_chooser.english", translations, language)}{" "}
					<DropdownMenuShortcut>
						{tr("language_chooser.en", translations, language)}
					</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
