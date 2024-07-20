import { Boom } from "@hapi/boom";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: Error,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    next();
  }
};

export const boomErrorHandler = (
  error: Boom,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.isBoom) {
    res
      .status(error.output.statusCode)
      .json({ message: error.message, statusCode: error.output.statusCode });
  } else {
    next(error);
  }
};
