import { DeleteUserRepository } from "./delete-user";
import { stub } from "sinon";
import { mockUser } from "../mocks";

describe("DeleteUserRepositopry", () => {
  it("should delete a user", async () => {
    const repository = new DeleteUserRepository();

    stub(repository, "delete").returns(Promise.resolve(mockUser));

    const user = await repository.delete(mockUser.id as string);

    expect(user).toBe(mockUser);
  });
});
