/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CreateUserRepository } from "./create-user";
import { stub } from "sinon";
import { mockUser } from "../mocks";
import { IUser } from "../../models/user";

describe("CreateUserRepository", () => {
  it("shoud create a user", async () => {
    const repository = new CreateUserRepository();

    const params: Omit<IUser, "id"> = {
      email: "joão@gmail.com",
      name: "joão",
      password: "eduj123",
    };

    stub(repository, "create").returns(Promise.resolve(mockUser));

    const user = await repository.create(params);

    expect(user).toBe(mockUser);
  });

  it("shoud not create a user", async () => {
    const repository = new CreateUserRepository();

    const params: Omit<IUser, "id"> | null = null;

    stub(repository, "create").returns(
      Promise.resolve(null as unknown as IUser)
    );

    const user = await repository.create(params!);

    expect(user).toBe(null);
  });
});
