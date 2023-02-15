import { RequestHandler } from "express";
import { GetUserControllers } from "../../controllers/get-user/get-user";
import { GetAllUserRepository } from "../../repositories/mongoRepository/get-user";

export const getAll: RequestHandler = async (req, res) => {
  const mongoGetAllUserRepository = await new GetAllUserRepository();

  const getAllControllers = await new GetUserControllers(
    mongoGetAllUserRepository
  );

  const { body, statusCode } = await getAllControllers.hendle(req);

  res.status(statusCode).json(body);
};
