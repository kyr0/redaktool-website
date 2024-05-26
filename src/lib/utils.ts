import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getCollection } from "astro:content";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getCollectionEntries = async <T extends "pages">(
	collection: T,
) => {
	const allPage = await getCollection<T>(collection);

	// @ts-ignore
	const removeIndex = allPage.filter((data) => data.id !== "_index.md");
	// @ts-ignore
	const removeDrafts = removeIndex.filter((data) => data.draft !== false);

	return removeDrafts;
};

export const sanitizeUrl = (dirtyUrl: string) => {
	const url = new URL(dirtyUrl);

	// Normalize path
	url.pathname = url.pathname
		.split("/")
		.filter((part) => part !== "")
		.join("/");

	// Handle query parameters
	const searchParams = new URLSearchParams();
	url.searchParams.forEach((value, key) => {
		searchParams.set(key, value);
	});
	url.search = searchParams.toString();

	// Reconstruct and use the cleaned URL
	return url.toString();
};
