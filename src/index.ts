import express from "express";
import cors from "cors";
import api from "./routes";
import { boomErrorHandler, errorHandler } from "./middlewares/errorHandler";
import { PORT } from "./constants";
import { connectDatabase } from "./database";

const server = express();
connectDatabase();
server.set("json spaces", 2);
server.use(cors());
server.use(express.json());
api(server);
server.use(boomErrorHandler);
server.use(errorHandler);

server.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
