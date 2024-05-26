import { stored } from "@/hooks/stored";
import { atomicSignal } from "./signal";

export type Theme = "theme-light" | "dark" | "system" | "indeterminate";
export const defaultTheme: Theme = "system";
export const storedThemeKey = "theme";

export const theme = atomicSignal<Theme>();

export const getThemeStored = () =>
	stored<Theme>(storedThemeKey, "indeterminate").get();
export const setThemeStored = (v: Theme) =>
	stored<Theme>(storedThemeKey, "indeterminate").set(v);

export const syncThemeOnDoc = (theme: Theme) =>
	document.documentElement.classList[theme === "dark" ? "add" : "remove"](
		"dark",
	);

export const determineThemeBySystemPref = (theme: Theme): Theme => {
	let themeDecidedFor: Theme = theme;
	if (theme === "indeterminate") {
		themeDecidedFor = "system";
	}

	if (theme === "system") {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			themeDecidedFor = "dark";
		} else {
			themeDecidedFor = "theme-light";
		}
	}
	return themeDecidedFor;
};

export const computeCurrentTheme = (): "dark" | "theme-light" => {
	let theme = getThemeStored();

	if (theme === "system" || theme === "indeterminate") {
		theme = window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "theme-light";
	}
	return theme;
};
