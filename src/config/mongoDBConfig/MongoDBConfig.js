import mongoose from 'mongoose';

export async function connectMongoClient(port) {
  await mongoose.connect(port)
}

