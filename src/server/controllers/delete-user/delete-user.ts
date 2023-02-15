import { StatusCodes } from "http-status-codes";
import { IControlers, IHttRequest, IHttResponse } from "../protocols";
import { IDeleteUserRepository } from "./protocols";

export class DeleteUserControllers implements IControlers {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}

  async hendle(req: IHttRequest<unknown>): Promise<IHttResponse> {
    try {
      const user = await this.deleteUserRepository.delete(req.params.id);

      return {
        body: user,
        statusCode: StatusCodes.OK,
      };
    } catch (error: any) {
      return {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        body: `Error: ${error.message}`,
      };
    }
  }
}
