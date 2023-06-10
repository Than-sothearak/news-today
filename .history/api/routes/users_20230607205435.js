import express from "express";
import { addUser } from "../controllers/user.js";
const router = express.Router()

router.get(":1", addUser)

export default router;