import { RequestHandler } from "express";
import { IUpdateUserParams } from "../controllers/update-user/protocols";

export const middlewareUpdate: RequestHandler = (req, res, next) => {
  const id = req.params.id;

  const body = req.body as IUpdateUserParams;

  if (!id) {
    return res.status(400).json({
      error: `Id invalido`,
    });
  }

  const allFildUsers: (keyof IUpdateUserParams)[] = ["name", "password"];

  for (const fild of allFildUsers) {
    if (!body?.[fild as keyof IUpdateUserParams]?.length) {
      return res.status(400).json({
        error: `${fild} is required!`,
      });
    }
  }

  const isvalidadecampos = Object.keys(body).some(
    (key) => !allFildUsers.includes(key as keyof IUpdateUserParams)
  );

  if (isvalidadecampos) {
    return res.status(400).json({
      error: `Somente é valido os campos ${allFildUsers.map((fild) => fild)}`,
    });
  }

  next();
};
