import express from "express";
import { errorHandler } from "./middlewares/errors.js";
import userRouter from "./routes/index.js";
//import { json } from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use(userRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
