import { track } from "@/lib/smartlook";
import { tr } from "@/lib/translation";
import { Share2Icon } from "lucide-react";
import { SocialShareButtons } from "./SocialShareButtons";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const ShareButton = ({ t, l }) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					className="flex items-center gap-2"
					size="sm"
					variant="ghost"
					onClick={() => {
						track("share_button_clicked", { location: "bot_examples" });
					}}
				>
					<Share2Icon className="w-4 h-4" />
					{tr("botExamples.shareButton", t, l)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full flex flex-row gap-4">
				<SocialShareButtons t={t} l={l} />
			</PopoverContent>
		</Popover>
	);
};
