import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import api from "./routes";
import { boomErrorHandler, errorHandler } from "./middlewares/errorHandler";

const server = express();
dotenv.config();
const PORT = process.env.PORT || 3001;

server.set("json spaces", 2);

server.use(cors());
server.use(express.json());

api(server);

server.use(boomErrorHandler);
server.use(errorHandler);

server.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
