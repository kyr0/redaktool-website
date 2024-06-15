import pkg from "mongoose";
const { Schema, model } = pkg;

export interface IFeedback {
	message: string;
	email: string;
	usageStatistics?: string;
	smartlookSessionId?: string;
	url: string;
	sentDate: Date;
}

export const FeedbackSchema = new Schema<IFeedback & Document>({
	message: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	usageStatistics: {
		type: String,
		required: false,
	},
	smartlookSessionId: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: true,
	},
	sentDate: {
		type: Date,
		required: true,
	},
});

export const FeedbackModel = model<IFeedback & Document>(
	"Feedback",
	FeedbackSchema,
);
