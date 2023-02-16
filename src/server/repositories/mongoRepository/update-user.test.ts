import { stub } from "sinon";
import { IUpdateUserParams } from "../../controllers/update-user/protocols";
import { IUser } from "../../models/user";
import { mockUser } from "../mocks";
import { UpdateUserRepository } from "./update-user";

describe("UpdateUserRepository", () => {
  it("shout make user update", async () => {
    const repository = new UpdateUserRepository();

    const update: IUser = {
      name: "Joao",
      password: "eduaro",
      email: "joão@gmail.com",
      id: "123",
    };

    stub(repository, "update").returns(Promise.resolve(update));

    const user = await repository.update(mockUser.id as string, update);

    expect(user).toBe(update);
  });

  it("shout not make user update", async () => {
    const repository = new UpdateUserRepository();

    const update: IUser | null = null;

    stub(repository, "update").returns(
      Promise.resolve(update as unknown as IUser)
    );

    const user = await repository.update(
      mockUser.id as string,
      update as unknown as IUpdateUserParams
    );

    expect(user).toBe(update);
  });
});
