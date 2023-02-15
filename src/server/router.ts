import { Router } from "express";
import { middlewareCreate } from "./middlewares/create-user";
import { middlewareDelete } from "./middlewares/delete-user";
import { middlewareUpdate } from "./middlewares/update";
import { createUser } from "./UseCases/User/create";
import { deleteUser } from "./UseCases/User/delete";
import { getAll } from "./UseCases/User/getAll";
import { updateUser } from "./UseCases/User/update";

const router = Router();

router.get("/users", getAll);
router.post("/users", middlewareCreate, createUser);
router.delete("/users/:id", middlewareDelete, deleteUser);
router.patch("/users/:id", middlewareUpdate, updateUser);

export { router };
