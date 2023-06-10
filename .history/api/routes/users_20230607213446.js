import express from "express";
import { getUser } from "../controllers/user.js";
import { updateUser } from "../controllers/user.js";
const router = express.Router()

router.get("/profile/:id", getUser)
router.put("/:id", updateUser);

export default router;