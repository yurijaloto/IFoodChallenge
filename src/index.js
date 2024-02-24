import express from "express";
import dotenv from "dotenv";
dotenv.config({ override: true });

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Process ${process.pid} running on port ${process.env.PORT}`);
})