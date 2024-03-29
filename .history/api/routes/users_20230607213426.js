import express from "express";
import { getUser } from "../controllers/users.js";
import { updateUser } from "../controllers/users.js";
const router = express.Router()

router.get("/profile/:id", getUser)
router.put("/:id", updateUser);

export default router;