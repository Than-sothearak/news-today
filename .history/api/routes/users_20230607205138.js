import express from "express";
import { addUser } from "../controllers/user.js";
const router = express.Router()

router.get("/profile", addUser)

export default router;