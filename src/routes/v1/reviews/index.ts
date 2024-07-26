import express, { Response, Request } from "express";
import {
  createReview,
  deleteReview,
  findAllReviews,
  findOneReview,
  updateReview,
} from "../../../services/reviews";
const router = express.Router();

router.get("/", (_: Request, res: Response) => {
  const allReviews = findAllReviews();
  res.status(201).json(allReviews);
});

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const review = findOneReview(id);
  res.status(200).json(review);
});

router.post("/", (req: Request, res: Response) => {
  const { body } = req;
  const created = createReview(body);
  res.status(201).json(created);
});

router.patch("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const updated = updateReview(id, body);
  res.status(200).json(updated);
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = deleteReview(id);
  res.status(200).json(deleted);
});

export default router;
