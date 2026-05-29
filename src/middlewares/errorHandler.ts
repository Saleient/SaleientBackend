import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";
import env from "../config/env.js";

export const errorHandler = (
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(env.NODE_ENV === "development" && { stack: err.stack }),
    });
  }
  console.error("ERROR 💥:", err);

  return res.status(500).json({
    success: false,
    message:
      env.NODE_ENV === "production" ? "Internal server error" : err.message,
    ...(env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
