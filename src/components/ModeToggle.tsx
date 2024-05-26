import { Button } from "@/components/ui/button";
import {
	type Theme,
	determineThemeBySystemPref,
	getThemeStored,
	setThemeStored,
	syncThemeOnDoc,
	theme as themeSignal,
} from "@/lib/theme";
import { tr } from "@/lib/translation";
import { useStore } from "@nanostores/react";
import { Moon, Sun } from "lucide-react";
import * as React from "react";

export function ModeToggle({ language, translations }) {
	const theme$ = useStore(themeSignal);

	const handleThemeChange = React.useCallback((theme: Theme) => {
		const themeDecidedFor = determineThemeBySystemPref(theme);
		setThemeStored(themeDecidedFor);
		syncThemeOnDoc(themeDecidedFor);
		themeSignal.set(themeDecidedFor);
	}, []);

	const onSetThemeState = React.useCallback(
		(theme: Theme) => {
			handleThemeChange(theme);
		},
		[handleThemeChange],
	);

	const toggleTheme = React.useCallback(() => {
		if (theme$.value === "dark" || theme$.value === "indeterminate") {
			onSetThemeState("theme-light");
		} else {
			onSetThemeState("dark");
		}
	}, [onSetThemeState, theme$, theme$.value]);

	React.useEffect(() => {
		handleThemeChange(getThemeStored());
	}, [handleThemeChange]);

	return (
		<>
			<Button variant="outline" size="icon" onClick={toggleTheme}>
				<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				<span className="sr-only">
					{tr("modeSwitch.toggleTheme", translations, language)}
				</span>
			</Button>
			{/*
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">{tr("modeSwitch.toggleTheme", translations, language)}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => onSetThemeState("theme-light")}>
            {tr("modeSwitch.light", translations, language)}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSetThemeState("dark")}>
            {tr("modeSwitch.dark", translations, language)}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSetThemeState("system")}>
            {tr("modeSwitch.system", translations, language)}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    */}
		</>
	);
}
