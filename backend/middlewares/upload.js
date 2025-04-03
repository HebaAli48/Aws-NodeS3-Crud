const multer = require("multer");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

// Configure S3 Client (AWS SDK v3)
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Multer setup to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

/**
 * Uploads a file to S3 and returns the file URL.
 * @param {Object} file - Multer file object.
 * @returns {Promise<string>} - URL of the uploaded file.
 */
const uploadToS3 = async (file) => {
  try {
    if (!file) throw new Error("No file provided");

    const fileKey = `uploads/${uuidv4()}-${file.originalname}`;

    const uploadParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileKey,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    await s3.send(new PutObjectCommand(uploadParams));

    // ✅ Use path-style URL for better compatibility
    return `https://s3.${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${fileKey}`;
  } catch (error) {
    console.error("S3 Upload Error:", error.message);
    throw new Error(`Failed to upload image to S3: ${error.message}`);
  }
};

module.exports = { upload, uploadToS3 };
