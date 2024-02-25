import mongoose from "mongoose";

export const CategoryModel = new mongoose.model('Category' , new mongoose.Schema({
  title: String,
  description: String,
  ownerId: String
}));