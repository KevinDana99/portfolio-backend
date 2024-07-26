import mongoose from "mongoose";
import { MONGO_DB_URI } from "../constants";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log("connected to database");
  } catch (error) {
    throw error;
  }
};
