import dotenv from "dotenv";

dotenv.config();
export const PORT = process.env.PORT;
export const USER_DB = process.env.USER_DB;
export const PASS_DB = process.env.PASS_DB;
export const PUBLIC_KEY = process.env.PUBLIC_KEY;
export const MONGO_DB_URI = `mongodb+srv://${USER_DB}:${PASS_DB}@db-kev.iij59vl.mongodb.net/db-kev`;
