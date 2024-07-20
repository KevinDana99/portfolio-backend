import express, { Request, Response } from "express";
import boom from "@hapi/boom";
const rootRouter = express.Router();

rootRouter.get("/", (_: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

rootRouter.get("/*", (_: Request, __: Response) => {
  throw boom.notFound("the requested route does not exist");
});

export default rootRouter;
