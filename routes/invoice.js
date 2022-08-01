import express from "express";
import { createInvoice, searchInvoice } from "../controller/invoice.js";

const router = express.Router();

router.post("/invoice", createInvoice);
router.get("/invoice/:id", searchInvoice);

export default router;
