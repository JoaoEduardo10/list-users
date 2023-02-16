import { stub } from "sinon";
import { IHttResponse } from "../protocols";
import { mockUser } from "../../repositories/mocks";
import { DeleteUserRepository } from "../../repositories/mongoRepository/delete-user";
import { DeleteUserControllers } from "./delete-user";

describe("GetUserController", () => {
  it("should must receive the response ok from the repositoryes", async () => {
    const deleteRepository = await new DeleteUserRepository();

    const deleteController = await new DeleteUserControllers(deleteRepository);

    const http: IHttResponse = {
      body: mockUser,
      statusCode: 200,
    };

    const req = {
      params: undefined,
      headers: undefined,
      body: mockUser,
    };

    stub(deleteController, "hendle").returns(Promise.resolve(http));

    const { body, statusCode } = await deleteController.hendle(req);

    expect(body).toBe(mockUser);
    expect(statusCode).toBe(200);
  });

  it("should must receive the response INTERNAL_SERVER_ERROR from the repositoryes", async () => {
    const deleteRepository = await new DeleteUserRepository();

    const deleteController = await new DeleteUserControllers(deleteRepository);

    const http: IHttResponse = {
      body: `user não criado`,
      statusCode: 500,
    };

    const req = {
      params: undefined,
      headers: undefined,
      body: "user não criado",
    };

    stub(deleteController, "hendle").returns(Promise.resolve(http));

    const { body, statusCode } = await deleteController.hendle(req);

    expect(body).toBe("user não criado");
    expect(statusCode).toBe(500);
  });
});
