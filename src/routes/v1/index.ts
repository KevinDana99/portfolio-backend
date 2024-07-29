import express from "express";
import certificationsRouter from "./certifications";
import docsRouter from "./docs";
import usersRouter from "./users";
//import authRouter from "./auth";
import projectsRouter from "./projects";
import reviewsRouter from "./reviews/";
import worksRouter from "./works";
import rootRouter from "../root";
const routerV1 = express.Router();

routerV1.use("/docs", docsRouter);
//routerV1.use("/auth", authRouter);
routerV1.use("/users", usersRouter);
routerV1.use("/works", worksRouter);
routerV1.use("/projects", projectsRouter);
routerV1.use("/reviews", reviewsRouter);
routerV1.use("/certifications", certificationsRouter);

routerV1.use("/", rootRouter);

export default routerV1;
