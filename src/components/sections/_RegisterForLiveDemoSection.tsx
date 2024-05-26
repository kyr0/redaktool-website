import { Button } from "@/components/ui/button";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FcK9jg9gDFm
 */
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { BirdIcon, SendIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SectionHeading } from "../SectionHeading";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";
import { Link } from "../ui/link";

const FormSchema = z.object({
	email: z.string().email(),
	firstName: z.string().min(2),
	familyName: z.string().min(2),
	message: z.string().min(5),
	companyName: z.string().min(2),
});

export default function RegisterForLiveDemoSection() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			firstName: "",
			familyName: "",
			message: "",
			companyName: "",
		},
	});

	const [formMessage, setFormMessage] = useState<string | null>(null);

	const onSendContactMessage = useCallback(async () => {
		try {
			form.clearErrors();
			const valid = await form.trigger([
				"email",
				"message",
				"firstName",
				"familyName",
				"companyName",
			]);

			if (!valid) {
				return;
			}

			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: form.getValues().email,
					name: `${form.getValues().firstName} ${form.getValues().familyName}`,
					message: `${form.getValues().message} \n\n Company Name: ${
						form.getValues().companyName
					}`,
					subject: "RedakTool.ai - Register For Live-Demo Request",
				}),
			});

			if (response.status !== 200) {
				setFormMessage("Error! Please try again later.");
				return;
			}
			setFormMessage("Thank you. We will shortly get back to you!");
		} catch (error) {
			form.setError("email", {
				message: "Error! Please try again later.",
			});
		}
	}, [form]);

	return (
		<>
			<section
				id="RegisterForLiveDemoSectionOld"
				key="RegisterForLiveDemoSection"
				className="relative z-1 w-full py-4 md:py-6 lg:py-12 xl:py-16 bg-gradient-to-tl from-gray-100 via-white to-white"
			>
				<div className="container py-12 px-4 md:px-6 mx-auto">
					<div className="grid gap-6 items-center justify-center">
						<div className="flex flex-col justify-center space-y-4 text-center">
							<div className="space-y-2 mb-6">
								<div className="inline-block bg-black rounded-full px-3 py-1 text-sm text-white">
									Get the RedakTool experience
								</div>
								<SectionHeading>Live-Demo</SectionHeading>
								<p className="max-w-[600px] text-gray-900 md:text-xl dark:text-gray-700 mx-auto">
									Our public registration is closed right now, but we offer
									plans for our enterprise clients. Our Sales team will contact
									you as soon as possible.
								</p>
							</div>
							<div className="w-full max-w-sm space-y-2 mx-auto">
								<Form {...form}>
									<div className="space-y-2">
										<div className="grid grid-cols-2 gap-4">
											<FormField
												control={form.control}
												name="firstName"
												render={({ field }) => (
													<FormItem>
														<FormControl>
															<Input
																className="bg-white text-black dark:text-white border-gray-300"
																placeholder="Enter your first name"
																type="text"
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="familyName"
												render={({ field }) => (
													<FormItem>
														<FormControl>
															<Input
																className="bg-white text-black dark:text-white border-gray-300"
																placeholder="Enter your family name"
																type="text"
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>

										<FormField
											control={form.control}
											name="companyName"
											render={({ field }) => (
												<FormItem>
													<FormControl>
														<Input
															className="max-w-lg flex-1 bg-white text-black dark:text-white border-gray-300"
															placeholder="Enter your company name"
															type="text"
															{...field}
														/>
													</FormControl>
													<FormMessage />
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
															className="max-w-lg flex-1 bg-white text-black dark:text-white border-gray-300"
															placeholder="Enter your email"
															type="email"
															{...field}
														/>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>

										<Button
											className="bg-black text-white w-full flex justify-center items-center text-md"
											onClick={onSendContactMessage}
										>
											<SendIcon className="h-6 w-6" />
											&nbsp;&nbsp;Register Now
										</Button>

										{formMessage && (
											<FormDescription className="text-green-400">
												{formMessage}
											</FormDescription>
										)}
									</div>
								</Form>
								<p className="text-xs text-gray-800 dark:text-gray-300">
									<strong>Don't worry</strong> &ndash; we don't spam your inbox.
									{/*
                  <Link className="underline underline-offset-2 text-black block dark:text-white" href="#">
                    Terms & Conditions
                  </Link>
                  */}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
