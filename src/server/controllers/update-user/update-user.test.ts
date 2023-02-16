import { stub } from "sinon";
import { IHttResponse } from "../protocols";
import { mockUser } from "../../repositories/mocks";
import { UpdateUserRepository } from "../../repositories/mongoRepository/update-user";
import { UpdateUserController } from "./update-user";

describe("GetUserController", () => {
  it("should must receive the response ok from the repositoryes", async () => {
    const updateRepository = await new UpdateUserRepository();

    const updateUserController = await new UpdateUserController(
      updateRepository
    );

    const http: IHttResponse = {
      body: mockUser,
      statusCode: 200,
    };

    const req = {
      params: undefined,
      headers: undefined,
      body: mockUser,
    };

    stub(updateUserController, "hendle").returns(Promise.resolve(http));

    const { body, statusCode } = await updateUserController.hendle(req);

    expect(body).toBe(mockUser);
    expect(statusCode).toBe(200);
  });

  it("should must receive the response INTERNAL_SERVER_ERROR from the repositoryes", async () => {
    const updateRepository = await new UpdateUserRepository();

    const updateController = await new UpdateUserController(updateRepository);

    const http: IHttResponse = {
      body: `user não criado`,
      statusCode: 500,
    };

    const req = {
      params: undefined,
      headers: undefined,
      body: "user não criado",
    };

    stub(updateController, "hendle").returns(Promise.resolve(http));

    const { body, statusCode } = await updateController.hendle(req);

    expect(body).toBe("user não criado");
    expect(statusCode).toBe(500);
  });
});
