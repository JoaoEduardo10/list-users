import { RequestHandler } from "express";

export const middlewareDelete: RequestHandler = (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({
      error: `Id invalido`,
    });
  }

  next();
};
