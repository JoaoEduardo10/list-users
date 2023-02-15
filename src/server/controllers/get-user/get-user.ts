/* eslint-disable @typescript-eslint/no-unused-vars */
import { IControlers, IHttRequest, IHttResponse } from "../protocols";
import { StatusCodes } from "http-status-codes";
import { IGetAllUserRepository } from "./protocols";
import { IUser } from "../../models/user";

export class GetUserControllers implements IControlers {
  constructor(private readonly getAllUserRepository: IGetAllUserRepository) {}
  async hendle(_req: IHttRequest<Omit<IUser, "id">>): Promise<IHttResponse> {
    try {
      const users = await this.getAllUserRepository.getAll();

      return {
        statusCode: StatusCodes.OK,
        body: users,
      };
    } catch (error: any) {
      return {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        body: `Error: ${error.message}`,
      };
    }
  }
}
