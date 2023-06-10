import express from "express";
import { addUser } from "../controllers/user.js";
const router = express.Router()

router.get("/profile/:id", addUser)

export default router;