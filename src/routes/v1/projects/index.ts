import express, { Response, Request } from "express";
import {
  createProject,
  deleteProject,
  findAllProjects,
  findOneProject,
  updateProject,
} from "../../../services/projects";
const router = express.Router();

router.get("/", (_: Request, res: Response) => {
  const allProjects = findAllProjects();
  res.status(201).json(allProjects);
});

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const project = findOneProject(id);
  res.status(200).json(project);
});

router.post("/", (req: Request, res: Response) => {
  const { body } = req;
  const created = createProject(body);
  res.status(201).json(created);
});

router.patch("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const updated = updateProject(id, body);
  res.status(200).json(updated);
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = deleteProject(id);
  res.status(200).json(deleted);
});

export default router;
