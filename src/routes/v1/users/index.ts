import express, { Response, Request } from "express";
import {
  findOneUser,
  findAllUsers,
  updateUser,
  deleteUser,
  createUser,
} from "../../../services/users";
const router = express.Router();

router.get("/", (_: Request, res: Response) => {
  const allUsers = findAllUsers();
  res.status(201).json(allUsers);
});

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const user = findOneUser(id);
  res.status(200).json(user);
});

router.post("/", (req: Request, res: Response) => {
  const { body } = req;
  const created = createUser(body);
  res.status(201).json(created);
});

router.patch("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const updated = updateUser(id, body);
  res.status(200).json(updated);
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = deleteUser(id);
  res.status(200).json(deleted);
});

export default router;
