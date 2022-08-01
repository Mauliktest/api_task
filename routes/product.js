import express from "express";
import { createProduct, searchProduct } from "../controller/product.js";

const router = express.Router();

router.post("/product", createProduct);
router.get("/product/search", searchProduct);

export default router;
