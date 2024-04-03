import express from "express";
import {
  CreateCategories,
  RemoveCategories,
  UpdateCategories,
  getAllCategories,
  getByIdCategories,
} from "../contronllers/category.js";

const categories = express.Router();
categories.get("/categories", getAllCategories);
categories.get("/categories/:id", getByIdCategories);
categories.post("/categories", CreateCategories);
categories.put("/categories/:slug", UpdateCategories);
categories.delete("/categories/:slug", RemoveCategories);

export default categories;
