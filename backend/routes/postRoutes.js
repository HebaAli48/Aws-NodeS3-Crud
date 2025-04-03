const express = require("express");
const Post = require("../models/Post");
const { upload, uploadToS3 } = require("../middlewares/upload");

const router = express.Router();

// Upload Post
router.post("/", upload.single("image"), async (req, res) => {
  try {
    console.log("Body:", req.body);
    console.log("File:", req.file);

    if (!req.body.text || !req.file) {
      return res.status(400).json({ message: "Text and image are required" });
    }

    const imageUrl = await uploadToS3(req.file);

    const newPost = new Post({ text: req.body.text, imageUrl });
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    console.error("Upload Post Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get All Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
