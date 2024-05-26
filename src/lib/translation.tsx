import type { AstroGlobal } from "astro";
import getUserLocale from "get-user-locale";

export type SupportedLanguage = "de" | "en";
export type Translations = Record<string, Record<SupportedLanguage, string>>;

export const supportedLanguages = ["en", "de"] as const;
export const defaultLanguage: SupportedLanguage = "de";

export const getPreferredUserLanguage = () => {
	const localeCandidate = getUserLocale();
	return localeCandidate.split("-")[0] as SupportedLanguage;
};

export function getLanguageFromPath(path: string): SupportedLanguage {
	const [, language] = path.split("/");
	if (supportedLanguages.indexOf(language as SupportedLanguage) > -1) {
		return language as SupportedLanguage;
	}
	return defaultLanguage;
}

export const tr = (
	key: string,
	translations: Translations,
	language: SupportedLanguage = defaultLanguage,
) => {
	const translation = translations[key];
	if (!translation) {
		return key;
	}
	const translated = translation[language];
	if (!translated) {
		return key;
	}
	return translated as string;
};

/*
export interface TrProps {
    k: string
    t: Translations
    l: SupportedLanguage
}
function renderFromJson(json) {
    // Base case: if it's a string, return it directly
    if (typeof json === 'string') {
      return json;
    }
  
    // Handle React elements (simplified for illustration)
    if (json && json.props) {

        // Recursively render children
        const children = Array.isArray(json.props.children)
        ? json.props.children.map(child => {
 
            let newChild = child
            if (typeof child === 'object' && !child.key) {
                newChild = {
                    ...child,
                    key: child.key || Date.now() + Math.random()
                }   
            }
            return renderFromJson(newChild)
        })
        : renderFromJson(json.props.children);

        console.log('children', children)

        if (!json.props.type) {
            return <>{children}</>
        }
        
      // Determine the type of the element
      const Type = json.type || 'div'; // Fallback to 'div' if type is not specified
  
      // Return the React element
      return createElement(Type, { ...json.props, key: json.key || Date.now() + Math.random() }, children);
    }
  
    // Fallback for unhandled cases
    return null;
  }

  
export const Tr: React.FC<TrProps> = ({ k, t, l, }) => {

    const translation = _tr(k, t, l) as unknown as ReactComponentElement<any, any>

    console.log('translation', translation.props.type, l, t)

    return renderFromJson(translation)
}
*/

export type LocalizedPaths = { [language: string]: string };

export const getLocalizedPath = (
	path: string,
	lang: SupportedLanguage = defaultLanguage,
) => {
	if (
		typeof document !== "undefined" &&
		document.documentElement &&
		supportedLanguages.indexOf(
			document.documentElement.lang as SupportedLanguage,
		) > -1
	) {
		lang = document.documentElement.lang as SupportedLanguage;
	}
	return localizePath(getLangFreePath(path), lang);
};

export const getLangFreePath = (path: string) => {
	const [, lang] = path.split("/");

	let langFreePath = path || "/";
	if (supportedLanguages.indexOf(lang as SupportedLanguage) > -1) {
		langFreePath = `/${path.split("/").slice(2).join("/")}`;
	}
	return langFreePath;
};

export const localizePath = (
	langFreePath: string,
	language: SupportedLanguage,
) => {
	return language !== defaultLanguage
		? `/${language}${langFreePath}`
		: langFreePath;
};

export const getLocalization = (Astro: AstroGlobal, path?: string) => {
	if (!path) {
		path = Astro.url.pathname;
	}

	const langFreePath = getLangFreePath(path);

	const localizedPaths = supportedLanguages
		.map((language) => ({
			language: language,
			path:
				language !== defaultLanguage
					? `/${language}${langFreePath}`
					: langFreePath,
		}))
		.reduce((acc, cur) => {
			acc[cur.language] = cur.path;
			return acc;
		}, {});

	return {
		localizedPaths,
		language: getLanguageFromPath(Astro.url.pathname),
	};
};
