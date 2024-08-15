import express from "express";
const router = express.Router();
import { uploadImage } from "../controllers/imageController.js";
import { upload } from "../middleware/uploadMiddleware.js"

router.post('/upload', upload.single("file"), uploadImage);

export default router;