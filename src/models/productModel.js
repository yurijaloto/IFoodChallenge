import mongoose from "mongoose";

export const ProductModel = new mongoose.model('Product' , new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: {
    type: mongoose.Types.ObjectId,
    ref: 'Category'
  },
  ownerId: String
}));