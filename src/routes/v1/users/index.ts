import express, { Response, Request } from "express";

const router = express.Router();

router.get("/", (_: Request, __: Response) => {});

router.get("/:id", (_: Request, __: Response) => {});

export default router;
