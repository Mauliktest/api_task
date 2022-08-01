import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";
import invoiceRoutes from "./routes/invoice.js";

dotenv.config();

const app = express();
app.use(express.json());

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", invoiceRoutes);

app.listen(8800, () => {
  connect();
  console.log("Listning on port 8800");
});
