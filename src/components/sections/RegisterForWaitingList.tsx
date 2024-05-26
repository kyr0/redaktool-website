import useSmoothScroll from "@/hooks/smooth-scroll";
import { track } from "@/lib/smartlook";
import { tr } from "@/lib/translation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	BirdIcon,
	CalendarPlus,
	Gift,
	ListChecks,
	LoaderIcon,
	Presentation,
	SendIcon,
} from "lucide-react";
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
import { Link } from "../ui/link";

const FormSchema = z.object({
	email: z.string().email(),
	firstName: z.string().min(2),
	familyName: z.string().min(2),
	message: z.string().min(5),
	companyName: z.string().min(2),
});

export const RegisterForWaitingList = ({ t, l }) => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			firstName: "",
			familyName: "",
			companyName: "",
		},
	});

	const scroll = useSmoothScroll();

	const [formMessageType, setFormMessageType] = useState<
		"success" | "error" | null
	>(null);
	const [formMessage, setFormMessage] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSendContactMessage = useCallback(async () => {
		try {
			form.clearErrors();
			const valid = await form.trigger([
				"email",
				"firstName",
				"familyName",
				"companyName",
			]);

			if (!valid) {
				return;
			}

			setIsLoading(true);

			const userData = {
				email: form.getValues().email,
				name: `${form.getValues().firstName} ${form.getValues().familyName}`,
				companyName: form.getValues().companyName,
			};
			track("register_for_waiting_list", userData, userData);

			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: form.getValues().email,
					name: `${form.getValues().firstName} ${form.getValues().familyName}`,
					message: `Name: ${form.getValues().firstName} ${
						form.getValues().familyName
					}\nE-Mail: ${form.getValues().email}\nCompany Name: ${
						form.getValues().companyName
					}`,
					subject: "RedakTool.ai - Register For Waiting List Request",
				}),
			});

			if (response.status !== 200) {
				setIsLoading(false);
				setFormMessageType("error");
				setFormMessage(tr("waitingList.errorTryAgainLater", t, l));
				return;
			}
			setIsLoading(false);
			setFormMessageType("success");
			setFormMessage(tr("waitingList.thankYou", t, l));
		} catch (error) {
			setIsLoading(false);
			setFormMessageType("error");
			setFormMessage(tr("waitingList.errorTryAgainLater", t, l));
		}
	}, [form]);

	return (
		<section
			id="WaitingListSection"
			key="WaitingListSection"
			className="relative grid max-w-[1300px] py-8 pt-16 mt-24 mb-24 md:pt-8 lg:pt-10 mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 bg-gradient-to-tl from-gray-100 to-white rounded-xl dark:from-gray-900 dark:to-black"
		>
			<div className="w-full max-w-sm md:max-w-md lg:max-w-lg space-y-2 mx-auto md:mr-auto">
				<div className="flex flex-col space-y-2 mb-6 items-start justify-center md:items-start">
					<SectionBadge className="-mb-0">
						<ListChecks className="w-4 h-4" />
						<span>{tr("waitingList.badgeTitle", t, l)}</span>
					</SectionBadge>

					<SectionHeading>{tr("waitingList.title", t, l)}</SectionHeading>
					<p
						className="max-w-[800px] text-gray-900 md:text-xl dark:text-gray-500 mx-auto"
						dangerouslySetInnerHTML={{
							__html: tr("waitingList.description", t, l),
						}}
					/>
				</div>
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
												className="bg-white text-black border-gray-300 dark:bg-gray-900 dark:border-gray-500 dark:text-white"
												placeholder={tr("waitingList.formFirstName", t, l)}
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
								name="familyName"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input
												className="bg-white text-black border-gray-300 dark:bg-gray-900 dark:border-gray-500 dark:text-white"
												placeholder={tr("waitingList.formLastName", t, l)}
												type="text"
												{...field}
											/>
										</FormControl>
										<FormMessage t={t} l={l} />
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
											className="max-w-lg flex-1 bg-white text-black border-gray-300 dark:bg-gray-900 dark:border-gray-500 dark:text-white"
											placeholder={tr("waitingList.formCompanyName", t, l)}
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
											className="max-w-lg flex-1 bg-white text-black border-gray-300 dark:bg-gray-900 dark:border-gray-500 dark:text-white"
											placeholder={tr("waitingList.formEmail", t, l)}
											type="email"
											{...field}
										/>
									</FormControl>
									<FormMessage t={t} l={l} />
								</FormItem>
							)}
						/>

						<Button
							disabled={isLoading}
							className="bg-black text-white w-full flex justify-center items-center text-md dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
							onClick={onSendContactMessage}
						>
							{isLoading ? (
								<LoaderIcon className="h-6 w-6" />
							) : (
								<SendIcon className="h-6 w-6" />
							)}
							&nbsp;&nbsp;
							{isLoading
								? tr("waitingList.registeringState", t, l)
								: tr("waitingList.registerNowState", t, l)}
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
				{/*

          <p className="text-xs text-gray-800 dark:text-gray-300 text-center" dangerouslySetInnerHTML={{ __html: tr('waitingList.noSpam', t, l) }}>
                        <Link className="underline underline-offset-2 text-black block dark:text-white" href="#">
              Terms & Conditions
            </Link>
          </p>
            */}
			</div>
			<div className="flex flex-row gap-2 flex-wrap items-start mt-8 md:mt-0 mb-8 md:mb-0 justify-center md:justify-end">
				<div className="hidden text-gray-300 rotate-90 md:rotate-0 mr-12 md:mr-0 text-[8rem] -mb-10 md:text-[16rem] ml-auto mt-auto md:mb-auto leading-[1] text-center md:text-left flex-grow">
					!
				</div>
				<div className="flex flex-col text-center md:text-right items-center md:items-end">
					<div className="flex flex-row items-end">
						<ListChecks className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 scale-x-[1]" />
						<BirdIcon className="w-24 h-24 md:w-24 md:h-24 lg:w-28 lg:h-28 scale-x-[-1] -ml-3" />
					</div>
					<h2 className="lg:leading-tighter text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl hyphens-manual">
						{tr("waitingList.dontMissOut", t, l)}
					</h2>
					<h3
						className="lg:leading-tighter text-lg font-bold tracking-tighter sm:text-1xl md:text-2xl lg:text-3xl hyphens-manual text-gray-500 mt-4"
						dangerouslySetInnerHTML={{
							__html: tr("waitingList.dontMissOutDescription", t, l),
						}}
					/>

					<div
						className="text-gray-500"
						dangerouslySetInnerHTML={{
							__html: tr("waitingList.contextDescription", t, l),
						}}
					/>

					<Link
						href="#scroll=RegisterForLiveDemoSection"
						className="rounded-md flex no-underline border-2  text-md py-1 px-2 md:py-2 md:px-3 mt-5 justify-center items-center text-lg shadow-sm"
						variant="outline"
						onClick={() => {
							scroll("RegisterForLiveDemoSection");
						}}
					>
						<CalendarPlus className="h-6 w-6 mr-2" /> &nbsp;
						{tr("botExamples.liveDemoButtonText", t, l)}
					</Link>
				</div>
			</div>
		</section>
	);
};
