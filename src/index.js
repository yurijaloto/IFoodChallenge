import express from "express";
import dotenv from "dotenv";
dotenv.config({ override: true });
import { connectMongoClient } from "./config/mongoDBConfig/MongoDBConfig.js";
import { productRouter } from './routes/productRoute.js';
import { categoryRouter } from './routes/categoryRoute.js';

const app = express();
app.use(express.json());
app.use('/product', productRouter)
app.use('/category', categoryRouter)

connectMongoClient(process.env.MONGO_URL)
app.listen(process.env.PORT, () => {
  console.log(`Process ${process.pid} running on port ${process.env.PORT}`);
})

