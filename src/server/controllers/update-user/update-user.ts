import { StatusCodes } from "http-status-codes";
import { IControlers, IHttRequest, IHttResponse } from "../protocols";
import { IUpdateUserParams, IUpdateUserRepository } from "./protocols";

export class UpdateUserController implements IControlers {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}

  async hendle(
    req: IHttRequest<IUpdateUserParams | string>
  ): Promise<IHttResponse> {
    try {
      const id = req.params.id;
      const body = req.body as IUpdateUserParams;

      const user = await this.updateUserRepository.update(id, body);

      return {
        statusCode: StatusCodes.OK,
        body: user,
      };
    } catch (error: any) {
      return {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        body: `Error: ${error.message}`,
      };
    }
  }
}
