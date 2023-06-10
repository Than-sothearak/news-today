import express from "express";
import { updateUser } from "../controllers/user.js";
import { getUser } from "../controllers/user.js";
const router = express.Router()

router.get("/:id", getUser);
router.put("/:id", updateUser);

export default router;