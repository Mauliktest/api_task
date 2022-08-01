import mongoose from "mongoose";
import User from "../model/User.js";

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json("user has been created");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const searchUser = async (req, res) => {
  const result = req.query.name;

  try {
    const user = await User.find({
      username: { $regex: result, $options: "i" },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
