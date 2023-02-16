import { RequestHandler } from "express";
import { ICreateUserParams } from "../controllers/create-user/protocols";
import validator from "validator";

export const middlewareCreate: RequestHandler = (req, res, next) => {
  const body = req.body as ICreateUserParams;

  const allFildUsers: (keyof ICreateUserParams)[] = [
    "name",
    "email",
    "password",
  ];

  for (const fild of allFildUsers) {
    if (!body?.[fild as keyof ICreateUserParams]?.length) {
      return res.status(404).json({
        error: `${fild} is required!`,
      });
    }
  }
  if (body.name.length < 3) {
    return res.status(404).json({
      error: `nome deve conter no minino 3 caracteres`,
    });
  }

  const isValidatorEmails = validator.isEmail(body.email);

  if (!isValidatorEmails) {
    return res.status(404).json({
      error: `Email invalido!`,
    });
  }

  next();
};
