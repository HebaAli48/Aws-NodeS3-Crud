const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Post", PostSchema);
