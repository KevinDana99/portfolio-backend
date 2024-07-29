import express, { Response, Request, NextFunction } from "express";
import ReviewService from "../../../services/reviews";
const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
  const allReviews = await ReviewService.findAll();
  res.status(201).json(allReviews);
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const review = await ReviewService.findOne(id);
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  try {
    const created = await ReviewService.create(body);
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
      const updated = await ReviewService.update(id, body);
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
      const deleted = await ReviewService.delete(id);
      res.status(200).json(deleted);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
