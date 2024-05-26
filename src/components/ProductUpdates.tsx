import { track } from "@/lib/smartlook";
import {
	type SupportedLanguage,
	type Translations,
	tr,
} from "@/lib/translation";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const FormSchema = z.object({
	email: z.string().email(),
});

export interface ProductUpdatesProps {
	translations: Translations;
	language: SupportedLanguage;
	buttonClassName?: string;
}

export const ProductUpdates = ({
	translations,
	language,
	buttonClassName,
}: ProductUpdatesProps) => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
		},
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [formMessage, setFormMessage] = useState<string | null>(null);

	const onGetProductUpdatesClick = useCallback(async () => {
		try {
			form.clearErrors();
			const emailValid = await form.trigger("email");

			if (!emailValid) {
				return;
			}
			setIsLoading(true);

			const userData = {
				email: form.getValues().email,
			};
			track("register_for_product_updates", userData, userData);

			const response = await fetch("/api/newsletter", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: form.getValues().email,
				}),
			});

			if (response.status !== 200) {
				setIsLoading(false);
				form.setError("email", {
					message: tr("productUpdates.errorMessage", translations, language),
				});
				return;
			}
			setIsLoading(false);
			setFormMessage(
				tr("productUpdates.successMessage", translations, language),
			);
		} catch (error) {
			setIsLoading(false);
			form.setError("email", {
				message: tr("productUpdates.errorMessage", translations, language),
			});
		}
	}, [form, translations, language]);

	return (
		<>
			<p className="mb-6">
				{tr("productUpdates.description", translations, language)}
			</p>
			<Form {...form}>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder={tr(
										"productUpdates.emailPlaceholder",
										translations,
										language,
									)}
									className="text-black dark:text-white dark:border-gray-600"
									{...field}
								/>
							</FormControl>
							{formMessage && (
								<FormDescription className="text-green-400">
									{formMessage}
								</FormDescription>
							)}
							<FormMessage t={translations} l={language} />
						</FormItem>
					)}
				/>
			</Form>
			<Button
				disabled={isLoading}
				className={`bg-gray-800 dark:text-white dark:hover:bg-gray-700 ${
					buttonClassName || ""
				}`}
				onClick={onGetProductUpdatesClick}
			>
				{isLoading && (
					<>
						<LoaderIcon className="h-6 w-6" />
						&nbsp;&nbsp;
					</>
				)}
				{isLoading
					? tr("productUpdates.loadingText", translations, language)
					: tr("productUpdates.submitButtonText", translations, language)}
			</Button>
			{/**
            <p className="text-xs text-gray-500 mt-1 text-center justify-center" dangerouslySetInnerHTML={{ __html: tr('productUpdates.noSpamMessage', translations, language)}}></p>
             */}
		</>
	);
};
