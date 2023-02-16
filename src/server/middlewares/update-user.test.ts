import supertest from "supertest";
import { app } from "../server";

import { stub } from "sinon";

const serverTest = supertest(app);

describe("update-middleware", () => {
  it("should validate if you sent the id", async () => {
    const notId = await serverTest
      .patch("/users/63ed357845f4cf1d53530a1")
      .send();

    expect(notId.statusCode).toBe(400);
  });

  it("should validate filds", async () => {
    const notId = await serverTest
      .patch("/users/63ed357845f4cf1d53530a1a")
      .send();

    expect(notId.statusCode).toBe(400);
    expect(notId.body).toEqual({ error: "name is required!" });
  });

  it("should validate not fild of params", async () => {
    const notId = await serverTest
      .patch("/users/63ed357845f4cf1d53530a1a")
      .send({
        name: "eduardo",
        password: "123",
        carater: "rsrsr",
      });

    expect(notId.statusCode).toBe(400);
    expect(notId.body).toEqual({
      error: "Somente é valido os campos name,password",
    });
  });
});
