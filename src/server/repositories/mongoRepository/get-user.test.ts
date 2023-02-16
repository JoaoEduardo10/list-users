import { GetAllUserRepository } from "./get-user";
import { stub } from "sinon";
import { mockUserArrei } from "../mocks";

describe("GetUserRepository", () => {
  it("shoud returns the users", async () => {
    const repository = new GetAllUserRepository();

    stub(repository, "getAll").returns(Promise.resolve(mockUserArrei));

    const user = repository.getAll();

    expect((await user).length).toBe(1);
  });
});
