import express, { Response, Request, NextFunction } from "express";
import WorkService from "../../../services/works";
const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
  const allWorks = await WorkService.findAll();
  res.status(201).json(allWorks);
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const work = await WorkService.findOne(id);
    res.status(200).json(work);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  try {
    const created = await WorkService.create(body);
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
      const updated = await WorkService.update(id, body);
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
      const deleted = await WorkService.delete(id);
      res.status(200).json(deleted);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
