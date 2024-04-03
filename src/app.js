import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import Products from "./routers/products.js";
import categories from "./routers/categories.js";
import Upload from "./routers/upload.js";

const app = express();
app.use(express.json());
app.use(cors());
connectDB();
app.use("/api", Products);
app.use("/api", categories);
app.use("/api", Upload);

export const viteNodeApp = app;
