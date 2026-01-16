import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
  title: String,
  author: String,
  blog: String,
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
