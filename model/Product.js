import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

export default mongoose.model("product", ProductSchema);
