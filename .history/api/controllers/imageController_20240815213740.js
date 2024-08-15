import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
dotenv.config();

const s3Client = new S3Client({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const uploadImage = async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: `Images/${file.originalname}`,
      Body: file.buffer,
      ACL: "public-read",
      ContentType: file.mimetype,
    };

    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    const link = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.amazonaws.com/Images/${file.originalname}`;

    return res.status(201).json({ message: "Image uploaded successfully", link });
  } catch (error) {
    console.error("Error uploading image:", error);
    return res.status(500).json({ message: "Failed to upload image", error });
  }
};
