import express from "express";
import { createUser, searchUser } from "../controller/user.js";

const router = express.Router();

router.post("/user", createUser);
router.get("/user/search", searchUser);

export default router;
