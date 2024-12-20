//import { Request, Response } from "express";
import TextLoader from "./textloader.js";

export const inMemoryChat = async (req, res) => {
  const question = req.query.question;
  const filePath = "files/romeo&juliet.docx";

  const result = await TextLoader(question, filePath);

  res.status(200).json({
    question,
    answer: result,
  });
};
