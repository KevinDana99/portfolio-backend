import express, { Response, Request, NextFunction } from "express";
import CertificationService from "../../../services/certifications";
const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
  const allCertifications = await CertificationService.findAll();
  res.status(201).json(allCertifications);
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const certification = await CertificationService.findOne(id);
    res.status(200).json(certification);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  try {
    const created = await CertificationService.create(body);
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
      const updated = await CertificationService.update(id, body);
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
      const deleted = await CertificationService.delete(id);
      res.status(200).json(deleted);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
