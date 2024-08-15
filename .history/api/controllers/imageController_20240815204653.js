import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

import dotenv from "dotenv";
dotenv.config();

const s3Client = new S3Client({
    region: "ap-southeast-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
    
});

export const uploadImage = async (req, res) => {
  const files = req.files;

  if (!files || files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }
  try {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: `Images/${files[0].originalname}`,
      Body: files[0].buffer,
      ACL: 'public-read',
      ContentType: files[0].mimetype,
    };
    console.log(params)
    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    const link = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.amazonaws.com/Image/${files[0].originalname}`;

    res
      .status(201)
      .json({ message: "Images uploaded successfully", link})
      .send({});
     
  } catch (error) {
    res.status(500).json({ message: "Failed to upload images", error });
  }
};
