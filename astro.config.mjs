import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import lazyLoadPlugin from "rehype-plugin-image-native-lazy-loading";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	output: "hybrid",
	site: process.env.PUBLIC_URL,
	redirects: {
		"/de": "/",
	},
	adapter: vercel({
		maxDuration: 60, // 1 minute max. CPU time usage
	}),
	image: {
		remotePatterns: [
			{
				protocol: "https:",
			},
		],
		domains: ["images.unsplash.com"],
	},
	i18n: {
		defaultLocale: "de",
		locales: ["de", "en"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		robotsTxt({
			policy: [
				{
					allow: "/",
					userAgent: "*",
				},
			],
		}),
		react({
			experimentalReactChildren: true,
		}),
		tailwind({
			applyBaseStyles: false,
		}),
		robotsTxt(),
		sitemap(),
		mdx(),
	],
	markdown: {
		rehypePlugins: [lazyLoadPlugin],
		shikiConfig: {
			theme: "one-dark-pro",
			wrap: true,
		},
		extendDefaultPlugins: true,
	},
});
