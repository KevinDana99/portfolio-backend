import { Express } from "express";
import routerV1 from "./v1";

const api = (server: Express) => {
  server.use("/api/v1", routerV1);
};

export default api;
