import express from "express";
import path from "path";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import { db } from "./db.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const PORT = 8080;
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});


app.use(express.json());
app.use(cookieParser());

app.get("/api/v1", (req, res) => {
  res.send("proxy is work");
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Connected! to port: ${PORT}`);
  }
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
