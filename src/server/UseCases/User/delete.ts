import { RequestHandler } from "express";
import { DeleteUserControllers } from "../../controllers/delete-user/delete-user";
import { DeleteUserRepository } from "../../repositories/mongoRepository/delete-user";

export const deleteUser: RequestHandler = async (req, res) => {
  const mongoDeleteUserRepository = await new DeleteUserRepository();

  const deleteUserControllers = await new DeleteUserControllers(
    mongoDeleteUserRepository
  );

  const { body, statusCode } = await deleteUserControllers.hendle(req);

  res.status(statusCode).json(body);
};
