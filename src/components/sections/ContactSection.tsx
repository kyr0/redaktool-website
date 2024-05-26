import { track } from "@/lib/smartlook";
import { tr } from "@/lib/translation";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, MessageCircleQuestionIcon, SendIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SectionBadge } from "../SectionBadge";
import { SectionHeading } from "../SectionHeading";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const FormSchema = z.object({
	email: z.string().email(),
	name: z.string().min(2),
	message: z.string().min(5),
	companyName: z.string(),
	phone: z.string().optional(),
});

export const ContactSection = ({ t, l }) => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			name: "",
			message: "",
			companyName: "",
			phone: "",
		},
	});

	const [formMessageType, setFormMessageType] = useState<
		"success" | "error" | null
	>(null);
	const [formMessage, setFormMessage] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSendContactMessage = useCallback(async () => {
		try {
			form.clearErrors();
			const valid = await form.trigger(["email", "message", "name"]);

			if (!valid) {
				return;
			}
			setIsLoading(true);

			const userData = {
				email: form.getValues().email,
				name: `${form.getValues().name}`,
				companyName: form.getValues().companyName,
				phone: form.getValues().phone,
			};
			track("contact_sales", userData, userData);

			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: form.getValues().email,
					name: form.getValues().name,
					message: `Name: ${form.getValues().name}\nE-Mail: ${
						form.getValues().email
					}\n\nCompany Name: ${form.getValues().companyName}\n${
						form.getValues().phone ? `Phone: ${form.getValues().phone}` : ""
					}\n\nMessage: ${form.getValues().message}`,
					subject: "RedakTool.ai - Inbound Contact Form",
				}),
			});

			if (response.status !== 200) {
				setIsLoading(false);
				setFormMessageType("error");
				setFormMessage(tr("contact.errorTryAgainLater", t, l));
				return;
			}
			setIsLoading(false);
			setFormMessageType("success");
			setFormMessage(tr("contact.thankYou", t, l));
		} catch (error) {
			setIsLoading(false);
			setFormMessageType("error");
			setFormMessage(tr("contact.errorTryAgainLater", t, l));
		}
	}, [form]);

	return (
		<section
			id="ContactSection"
			className="w-full py-24 md:py-24 lg:py-32 relative bg-gradient-to-tl from-gray-200 via-white to-white -mt-32 dark:from-gray-900 dark:via-black dark:to-black "
		>
			<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
				<div className="space-y-3">
					<SectionBadge>
						<MessageCircleQuestionIcon className="w-4 h-4" />{" "}
						{tr("contact.badgeTitle", t, l)}
					</SectionBadge>

					<SectionHeading>{tr("contact.menuTitle", t, l)}</SectionHeading>
					<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
						{tr("contact.description", t, l)}
					</p>
				</div>
				<div className="mx-auto w-full max-w-sm space-y-2 mt-12">
					<Form {...form}>
						<div className="flex flex-col space-y-2">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className="max-w-lg flex-1 dark:border-gray-700"
												placeholder={`${tr("contact.formFirstName", t, l)} ${tr(
													"contact.formLastName",
													t,
													l,
												)}`}
												type="text"
												{...field}
											/>
										</FormControl>
										<FormMessage t={t} l={l} />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="companyName"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className="max-w-lg flex-1 dark:border-gray-700"
												placeholder={tr("contact.formCompanyName", t, l)}
												type="text"
												{...field}
											/>
										</FormControl>
										<FormMessage t={t} l={l} />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className="max-w-lg flex-1 dark:border-gray-700"
												placeholder={tr("contact.formEmail", t, l)}
												type="email"
												{...field}
											/>
										</FormControl>
										<FormMessage t={t} l={l} />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className="max-w-lg flex-1 dark:border-gray-700"
												placeholder={tr("contact.formPhone", t, l)}
												type="tel"
												{...field}
											/>
										</FormControl>
										<FormMessage t={t} l={l} />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Textarea
												className="min-h-[100px] dark:border-gray-700"
												placeholder={tr("contact.formMessage", t, l)}
												{...field}
											/>
										</FormControl>
										<FormMessage t={t} l={l} />
									</FormItem>
								)}
							/>

							<Button
								disabled={isLoading}
								className="bg-black text-white w-full flex justify-center items-center text-md dark:bg-gray-900 dark:hover:bg-gray-800"
								onClick={onSendContactMessage}
							>
								{isLoading ? (
									<LoaderIcon className="h-6 w-6" />
								) : (
									<SendIcon className="h-6 w-6" />
								)}
								&nbsp;&nbsp;
								{isLoading
									? tr("contact.registeringState", t, l)
									: tr("contact.sendNowState", t, l)}
							</Button>

							{formMessage && (
								<FormDescription
									className={`${
										formMessageType === "error"
											? "text-red-600"
											: "text-green-600"
									} text-center`}
								>
									{formMessage}
								</FormDescription>
							)}
						</div>
					</Form>
				</div>
			</div>
		</section>
	);
};
