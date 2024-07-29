import express, { Response, Request, NextFunction } from "express";
const router = express.Router();

router.post("/login", async (_: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ ok: 200 });
  } catch (error) {
    next(error);
  }
});
router.post(
  "/logout",
  async (_: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ ok: 200 });
    } catch (error) {
      next(error);
    }
  }
);
export default router;
