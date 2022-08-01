import mongoose from "mongoose";
import Invoice from "../model/Invoice.js";

export const createInvoice = async (req, res) => {
  try {
    const newInvoice = new Invoice(req.body);
    await newInvoice.save();
    res.status(200).json("invoice has been created");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const searchInvoice = async (req, res) => {
  const { id } = req.params;

  try {
    const invoice = await Invoice.find({
      invoiceNo: id,
    });
    res.status(200).json(invoice);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
