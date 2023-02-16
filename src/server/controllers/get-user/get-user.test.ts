import { GetAllUserRepository } from "../../repositories/mongoRepository/get-user";
import { GetUserControllers } from "./get-user";
import { stub } from "sinon";
import { IHttRequest, IHttResponse } from "../protocols";
import { mockUser } from "../../repositories/mocks";
import { IUser } from "../../models/user";

describe("GetUserController", () => {
  it("should must receive the response ok from the repositoryes", async () => {
    const getRepository = await new GetAllUserRepository();

    const getController = await new GetUserControllers(getRepository);

    const http: IHttResponse = {
      body: mockUser,
      statusCode: 200,
    };

    const req = {
      params: undefined,
      headers: undefined,
      body: mockUser,
    };

    stub(getController, "hendle").returns(Promise.resolve(http));

    const { body, statusCode } = await getController.hendle(req);

    expect(body).toBe(mockUser);
    expect(statusCode).toBe(200);
  });

  it("should must receive the response INTERNAL_SERVER_ERROR from the repositoryes", async () => {
    const getRepository = await new GetAllUserRepository();

    const getController = await new GetUserControllers(getRepository);

    const http: IHttResponse = {
      body: `não deu certo`,
      statusCode: 500,
    };

    const req = {
      params: undefined,
      headers: undefined,
      body: "não deu certo",
    };

    stub(getController, "hendle").returns(Promise.resolve(http));

    const { body, statusCode } = await getController.hendle(req);

    expect(body).toBe("não deu certo");
    expect(statusCode).toBe(500);
  });
});
