import { defineCollection, z } from "astro:content";

const pagesCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			id: z.string().optional(),
			title: z.string(),
			meta_title: z.string().optional(),
			description: z.string().optional(),
			image: image().or(z.string()).optional(),
			layout: z.string().optional(),
			draft: z.boolean().optional(),
			what_i_do: z
				.object({
					title: z.string(),
					items: z.array(
						z.object({
							title: z.string(),
							description: z.string(),
						}),
					),
				})
				.optional(),
		}),
});

export const collections = {
	pages: pagesCollection,
};
