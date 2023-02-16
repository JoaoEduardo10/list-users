import { stub } from "sinon";
import { IHttResponse } from "../protocols";
import { mockUser } from "../../repositories/mocks";
import { CreateUserRepository } from "../../repositories/mongoRepository/create-user";
import { CreateUserControllers } from "./create-user";

describe("GetUserController", () => {
  it("should must receive the response ok from the repositoryes", async () => {
    const createRepository = await new CreateUserRepository();

    const createController = await new CreateUserControllers(createRepository);

    const http: IHttResponse = {
      body: mockUser,
      statusCode: 200,
    };

    const req = {
      params: undefined,
      headers: undefined,
      body: mockUser,
    };

    stub(createController, "hendle").returns(Promise.resolve(http));

    const { body, statusCode } = await createController.hendle(req);

    expect(body).toBe(mockUser);
    expect(statusCode).toBe(200);
  });

  it("should must receive the response INTERNAL_SERVER_ERROR from the repositoryes", async () => {
    const createRepository = await new CreateUserRepository();

    const createController = await new CreateUserControllers(createRepository);

    const http: IHttResponse = {
      body: `user não criado`,
      statusCode: 500,
    };

    const req = {
      params: undefined,
      headers: undefined,
      body: "user não criado",
    };

    stub(createController, "hendle").returns(Promise.resolve(http));

    const { body, statusCode } = await createController.hendle(req);

    expect(body).toBe("user não criado");
    expect(statusCode).toBe(500);
  });
});
