import express, { Response, Request, NextFunction } from "express";
import {
  findOneCertification,
  findAllCertification,
  updateCertification,
  deleteCertification,
  createCertification,
} from "../../../services/certifications";
const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
  const allCertifications = await findAllCertification();
  res.status(201).json(allCertifications);
});

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const certification = findOneCertification(id);
  res.status(200).json(certification);
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  try {
    const created = await createCertification(body);
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
      const updated = await updateCertification(id, body);
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
      const deleted = await deleteCertification(id);
      res.status(200).json(deleted);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
