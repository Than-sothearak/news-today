import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

import dotenv from "dotenv";
dotenv.config();

const s3Client = new S3Client({
  
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
    region: "ap-southeast-1",
});

export const uploadImage = async (req, res) => {
  const files = req.files;

  if (!files || files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }
  try {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: `Image/${files[0].originalname}`,
      Body: files[0].buffer,
      ACL: 'public-read',
      ContentType: files[0].mimetype,
    };
    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    res
      .status(201)
      .json({ message: "Images uploaded successfully"})
      .send({});
  } catch (error) {
    res.status(500).json({ message: "Failed to upload images", error });
  }
};
