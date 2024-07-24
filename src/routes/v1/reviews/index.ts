import express, { Response, Request } from "express";
import certificationService from "../../../services/certificates";
const router = express.Router();

router.get("/all", (_: Request, res: Response) => {
  const allCertificates = certificationService.findAll();
  res.status(200).json(allCertificates);
});

router.get("/certification/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const oneCertificate = certificationService.findOne(id);
  res.status(200).json(oneCertificate);
});

export default router;
