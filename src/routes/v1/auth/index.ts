import express, { Response, Request } from "express";
const router = express.Router();

router.get("/login", (_: Request, res: Response) => {
  res.send({ ok: 200 });
});

router.get("/logout", (_: Request, res: Response) => {
  res.send({ ok: 200 });
});

export default router;
