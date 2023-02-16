import supertest from "supertest";
import { app } from "../server";

const serverTest = supertest(app);

describe("delete-middleware", () => {
  it("should validate if you sent the id", async () => {
    const notId = await serverTest.delete("/users/9999").send();

    expect(notId.statusCode).toBe(500);
  });
});
