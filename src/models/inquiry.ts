import pkg from "mongoose";
const { Schema, model } = pkg;

export interface IInquiry {
	name?: string;
	email: string;
	message?: string;
	subject: string;
	phone?: string;
	companyName?: string;
	audience: "live-demo" | "contact-sales" | "live-demo";
}

export const InquirySchema = new Schema<IInquiry & Document>({
	name: {
		type: String,
		required: false,
	},
	email: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: false,
	},
	companyName: {
		type: String,
		required: false,
	},
	audience: {
		type: String,
		enum: ["live-demo", "contact-sales"],
		required: true,
	},
});

export const InquiryModel = model<IInquiry & Document>(
	"Inquiry",
	InquirySchema,
);
