import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
	createdBy: { type: String, required: true },
    id: String,
    image: { type: String, required: true },
	title: { type: String, required: true },
    price: { type: String, required: true },
	createdAt: String
});

export default mongoose.model("Product", productSchema);
