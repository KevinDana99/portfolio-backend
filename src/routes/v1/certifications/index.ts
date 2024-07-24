import express, { Response, Request } from "express";
import {
  findOneCertification,
  findAllCertification,
  updateCertification,
  deleteCertification,
  createCertification,
} from "../../../services/certificates";
const router = express.Router();

router.get("/", (_: Request, res: Response) => {
  const allCertifications = findAllCertification();
  res.status(201).json(allCertifications);
});

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const certification = findOneCertification(id);
  res.status(200).json(certification);
});

router.post("/", (req: Request, res: Response) => {
  const { body } = req;
  const created = createCertification(body);
  res.status(201).json(created);
});

router.patch("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const updated = updateCertification(id, body);
  res.status(200).json(updated);
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = deleteCertification(id);
  res.status(200).json(deleted);
});

export default router;
