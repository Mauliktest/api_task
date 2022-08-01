import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const InvoiceSchema = new mongoose.Schema({
  invoiceNo: {
    type: Number,
  },
  invoiceDate: {
    type: Date,
  },
  userInfo: [{ username: String, phone: String }],

  deliveryType: {
    type: String,
    required: true,
  },
  product: [
    { productId: String, productName: String, quantity: String, price: String },
  ],

  subtotal: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  paymentMode: {
    type: String,
  },
  chequeAmount: {
    type: Number,
  },
  checkDetails: {
    type: String,
  },
  cashAmount: {
    type: Number,
  },
});

autoIncrement.initialize(mongoose.connection);
InvoiceSchema.plugin(autoIncrement.plugin, {
  model: "invoice",
  field: "invoiceNo",
  startAt: 1,
  incrementBy: 1,
});
export default mongoose.model("invoice", InvoiceSchema);
