import { Express } from "express";
import routerV1 from "./v1";
import rootRouter from "./root";

const api = (server: Express) => {
  server.use("/api/v1", routerV1);
  server.use("/", rootRouter);
};

export default api;
