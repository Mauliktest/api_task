import mongoose from "mongoose";
import Product from "../model/Product.js";

export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json("product has been created");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const searchProduct = async (req, res) => {
  const result = req.query.name;

  try {
    const product = await Product.find({
      productName: { $regex: result, $options: "i" },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
