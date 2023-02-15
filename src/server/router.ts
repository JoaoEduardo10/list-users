import { Router } from "express";
import { getAll } from "./UseCases/User/getAll";

const router = Router();

router.get("/users", getAll);

export { router };
