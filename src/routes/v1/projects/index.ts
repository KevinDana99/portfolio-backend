import express, { Response, Request, NextFunction } from "express";
import ProjectService from "../../../services/projects";
const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
  const allProjects = await ProjectService.findAll();
  res.status(201).json(allProjects);
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const project = await ProjectService.findOne(id);
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  try {
    const created = await ProjectService.create(body);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
});

router.patch(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const updated = await ProjectService.update(id, body);
      res.status(201).json(updated);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const deleted = await ProjectService.delete(id);
      res.status(200).json(deleted);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
