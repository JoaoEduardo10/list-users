import { RequestHandler } from "express";
import { UpdateUserController } from "../../controllers/update-user/update-user";
import { UpdateUserRepository } from "../../repositories/mongoRepository/update-user";

export const updateUser: RequestHandler = async (req, res) => {
  const mongoUpdateUserRepository = await new UpdateUserRepository();

  const updateControllers = await new UpdateUserController(
    mongoUpdateUserRepository
  );

  const { body, statusCode } = await updateControllers.hendle(req);

  res.status(statusCode).json(body);
};
