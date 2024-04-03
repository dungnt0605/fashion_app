import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
export const connectDB = async () => {
  try {
    const url = process.env.DB_URI;
    await mongoose.connect(url);

    console.log(`ConnectDB : ${url}`);
  } catch (error) {
    console.log(`Error connecting : ${error}`);
  }
};
