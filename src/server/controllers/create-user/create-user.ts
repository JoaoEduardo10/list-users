/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, response, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { middlewareCreate as middleware } from "../../middlewares/create-user";
import { IControlers, IHttRequest, IHttResponse } from "../protocols";
import { ICreateUserParams, ICreateUserRepository } from "./protocols";

export class CreateUserControllers implements IControlers {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}
  async hendle(req: IHttRequest<ICreateUserParams>): Promise<IHttResponse> {
    try {
      const body = req.body as ICreateUserParams;

      const user = await this.createUserRepository.create(body);

      return {
        statusCode: StatusCodes.OK,
        body: user,
      };
    } catch (error: any) {
      return {
        body: `Erro: ${error.message}`,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }
  }
}
