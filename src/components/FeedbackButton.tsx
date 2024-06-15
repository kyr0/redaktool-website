import { useCallback, useLayoutEffect, useState } from "react";
import { track } from "@/lib/smartlook";
import { tr } from "@/lib/translation";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, MessageCircleQuestionIcon, SendIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";

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
import { Textarea } from "./ui/textarea";

const FormSchema = z.object({
	email: z.string().email(),
	name: z.string().min(2),
	message: z.string().min(5),
	url: z.string(),
	usageStatistics: z.string().optional(),
	smartlookSessionId: z.string().optional(),
});

export const FeedbackButton = ({ language: l, translations: t }) => {
	const [visible, setVisible] = useState(false);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			name: "",
			message: "",
			url: "",
			usageStatistics: "",
			smartlookSessionId: "",
		},
	});

	const [formMessageType, setFormMessageType] = useState<
		"success" | "error" | null
	>(null);
	const [formMessage, setFormMessage] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSendFeedbackMessage = useCallback(async () => {
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
			};
			track("feedback", userData, userData);

			const response = await fetch("/api/feedback", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: form.getValues().email,
					name: form.getValues().name,
					url: document.location.href,
					// @ts-ignore
					smartlookSessionId: window.smartlook
						? // @ts-ignore
						  window.smartlook.sessionId
						: null,
					message: form.getValues().message,
				}),
			});

			if (response.status !== 200) {
				setIsLoading(false);
				setFormMessageType("error");
				setFormMessage(tr("feedback.errorTryAgainLater", t, l));
				return;
			}
			setIsLoading(false);
			setFormMessageType("success");
			setFormMessage(tr("feedback.thankYou", t, l));
		} catch (error) {
			setIsLoading(false);
			setFormMessageType("error");
			setFormMessage(tr("feedback.errorTryAgainLater", t, l));
		}
	}, [form]);

	useLayoutEffect(() => {
		const toggleVisible = () => {
			const scrolled = document.documentElement.scrollTop;
			if (scrolled > 300) {
				setVisible(true);
			} else if (scrolled <= 300) {
				setVisible(false);
			}
		};
		toggleVisible();
		window.addEventListener("scroll", toggleVisible);
		return () => window.removeEventListener("scroll", toggleVisible);
	}, []);

	return (
		<>
			<Dialog>
				<DialogTrigger className={`${visible ? "" : "hidden"}`}>
					<div
						style={{
							position: "fixed",
							top: window.innerHeight / 2 - 50,
							width: 100,
							right: -43,
							cursor: "pointer",

							zIndex: 49,
						}}
						className="p-0 m-0 pb-4 origin-center -rotate-90 border-1 md:scale-105 lg:scale-110 xl:scale-125 border-gray-600 dark:border-gray-400 text-white dark:text-black bg-black dark:bg-white flex transform transition-opacity duration-150 rounded-md"
					>
						<span className="mx-auto">{tr("feedback.buttonTitle", t, l)}</span>
					</div>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>{tr("feedback.modalTitle", t, l)}</DialogTitle>
						<DialogDescription>
							{tr("feedback.modalDescription", t, l)}
						</DialogDescription>
					</DialogHeader>
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
													placeholder={`${tr(
														"feedback.formFirstName",
														t,
														l,
													)} ${tr("feedback.formLastName", t, l)}`}
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
													placeholder={tr("feedback.formEmail", t, l)}
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
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Textarea
													className="min-h-[100px] dark:border-gray-700"
													placeholder={tr("feedback.formMessage", t, l)}
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
									onClick={onSendFeedbackMessage}
								>
									{isLoading ? (
										<LoaderIcon className="h-6 w-6" />
									) : (
										<SendIcon className="h-6 w-6" />
									)}
									&nbsp;&nbsp;
									{isLoading
										? tr("feedback.registeringState", t, l)
										: tr("feedback.sendNowState", t, l)}
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
				</DialogContent>
			</Dialog>
		</>
	);
};
