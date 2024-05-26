import { track } from "@/lib/smartlook";
import { tr } from "@/lib/translation";
import {
	EmailIcon,
	EmailShareButton,
	FacebookIcon,
	FacebookShareButton,
	GabShareButton,
	HatenaShareButton,
	InstapaperShareButton,
	LineShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	LivejournalShareButton,
	MailruShareButton,
	OKShareButton,
	PinterestShareButton,
	PocketShareButton,
	RedditIcon,
	RedditShareButton,
	TelegramIcon,
	TelegramShareButton,
	TumblrShareButton,
	TwitterShareButton,
	VKShareButton,
	ViberShareButton,
	WhatsappIcon,
	WhatsappShareButton,
	WorkplaceShareButton,
	XIcon,
} from "react-share";

export const SocialShareButtons = ({ t, l }) => {
	return (
		<>
			<LinkedinShareButton
				className="cursor-pointer"
				url={import.meta.env.PUBLIC_URL}
				title={tr("share.title", t, l)}
				summary={tr("share.summaryOrBody", t, l)}
				source={tr("share.source", t, l)}
				onClick={() => {
					track("share_bot_examples_review_linkedin_clicked");
				}}
			>
				<LinkedinIcon size={32} round />
			</LinkedinShareButton>

			<FacebookShareButton
				hashtag="#RedakTool"
				className="cursor-pointer"
				url={import.meta.env.PUBLIC_URL}
				onClick={() => {
					track("share_bot_examples_review_facebook_clicked");
				}}
			>
				<FacebookIcon size={32} round />
			</FacebookShareButton>

			<TwitterShareButton
				className="cursor-pointer"
				url={import.meta.env.PUBLIC_URL}
				title={tr("share.title", t, l)}
				hashtags={["#RedakTool", "#online-reputation", "#reputation-management"]}
				onClick={() => {
					track("share_bot_examples_review_twitter_clicked");
				}}
			>
				<XIcon size={32} round />
			</TwitterShareButton>

			<TelegramShareButton
				className="cursor-pointer"
				url={import.meta.env.PUBLIC_URL}
				title={tr("share.title", t, l)}
				onClick={() => {
					track("share_bot_examples_review_telegram_clicked");
				}}
			>
				<TelegramIcon size={32} round />
			</TelegramShareButton>

			<WhatsappShareButton
				className="cursor-pointer"
				url={import.meta.env.PUBLIC_URL}
				title={tr("share.title", t, l)}
				separator=":: "
				onClick={() => {
					track("share_bot_examples_review_whatsapp_clicked");
				}}
			>
				<WhatsappIcon size={32} round />
			</WhatsappShareButton>

			<RedditShareButton
				className="cursor-pointer"
				url={import.meta.env.PUBLIC_URL}
				title={tr("share.title", t, l)}
				windowWidth={660}
				windowHeight={460}
				onClick={() => {
					track("share_bot_examples_review_reddit_clicked");
				}}
			>
				<RedditIcon size={32} round />
			</RedditShareButton>

			<EmailShareButton
				className="cursor-pointer"
				url={import.meta.env.PUBLIC_URL}
				title={tr("share.title", t, l)}
				body={tr("share.summaryOrBody", t, l)}
				onClick={() => {
					track("share_bot_examples_review_email_clicked");
				}}
			>
				<EmailIcon size={32} round />
			</EmailShareButton>
		</>
	);
};
