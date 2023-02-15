import { RequestHandler } from "express";
import { CreateUserControllers } from "../../controllers/create-user/create-user";
import { CreateUserRepository } from "../../repositories/mongoRepository/create-user";

export const createUser: RequestHandler = async (req, res) => {
  const mongoCreateUserRepository = await new CreateUserRepository();

  const createUserControllers = await new CreateUserControllers(
    mongoCreateUserRepository
  );

  const { body, statusCode } = await createUserControllers.hendle(req);

  res.status(statusCode).json(body);
};
