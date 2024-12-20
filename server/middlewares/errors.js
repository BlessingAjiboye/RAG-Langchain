//import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err,
  req,
  res,
  next
) => {
  console.error(err);
  res
    .status(500)
    .send({ errors: [{ message: err.message || "Something went wrong!" }] });
};
