import express from "express";
import certificationsRouter from "./certifications";
import docsRouter from "./docs";
const routerV1 = express.Router();
routerV1.use("/docs", docsRouter);
routerV1.use("/certifications", certificationsRouter);

export default routerV1;
