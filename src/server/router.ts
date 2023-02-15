import { Router } from "express";
import { middlewareCreate } from "./middlewares/create-user";
import { createUser } from "./UseCases/User/create";
import { getAll } from "./UseCases/User/getAll";

const router = Router();

router.get("/users", getAll);
router.post("/users", middlewareCreate, createUser);
export { router };
