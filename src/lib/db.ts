import pkg from "mongoose";
const { connect } = pkg;
import { AudienceModel, type IAudience } from "@/models/audience";
import { type IInquiry, InquiryModel } from "@/models/inquiry";
import { getEnv } from "./get-env";

export const dbConnect = async () => {
	const uri = `mongodb+srv://${getEnv("ATLAS_WEBSITE_ADMIN")}:${getEnv(
		"ATLAS_WEBSITE_ADMIN_PASSWORD",
	)}@${getEnv("ATLAS_WEBSITE_HOST")}/?retryWrites=true&w=majority`;

	// Create a Mongoose client with a MongoClientOptions object to set the Stable API version
	await connect(uri, {
		serverApi: { version: "1", strict: true, deprecationErrors: true },
	});

	//await connection.db.admin().command({ ping: 1 });

	console.log("You successfully connected to MongoDB!");
};

await dbConnect();

export const addToAudience = async (data: IAudience) => {
	const newAudienceMember = new AudienceModel(data);
	await newAudienceMember.save();
};

export const addInquiry = async (data: IInquiry) => {
	const newInquiry = new InquiryModel(data);
	await newInquiry.save();
};
