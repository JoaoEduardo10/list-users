import supertest from "supertest";
import { app } from "../server";

const serverTest = supertest(app);

describe("create-middleware", () => {
  it("should must not send fildes", async () => {
    const notAllFilds = await serverTest.post("/users").send();

    expect(notAllFilds.statusCode).toBe(404);

    expect(typeof notAllFilds.body).toBe("object");
  });

  it("should check if name is less than wue 3", async () => {
    const nameFilds = await serverTest.post("/users").send({
      name: "ed",
      email: "test@gmail.com",
      password: "test",
    });

    expect(nameFilds.statusCode).toBe(404);
  });

  it("should validate the email", async () => {
    const nameFilds = await serverTest.post("/users").send({
      name: "eduardo",
      email: "test",
      password: "test",
    });

    expect(nameFilds.statusCode).toBe(404);
  });
});
