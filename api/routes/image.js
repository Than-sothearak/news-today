import express from "express";
const router = express.Router();
import { uploadImage } from "../controllers/imageController.js";
import { upload } from "../middleware/uploadMiddleware.js"

router.post('/upload', upload.array("images", 10), uploadImage);

export default router;