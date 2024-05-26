import pkg from "mongoose";
const { Schema, model } = pkg;

export interface IAudience {
	name?: string;
	email: string;
	phone?: string;
	companyName?: string;
	audience: ("waiting-list" | "product-updates")[];
}

export const AudienceSchema = new Schema<IAudience & Document>({
	name: {
		type: String,
		required: false,
	},
	email: {
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
		type: [String],
		enum: ["waiting-list", "product-updates"],
		required: true,
	},
});

export const AudienceModel = model<IAudience & Document>(
	"Audience",
	AudienceSchema,
);
