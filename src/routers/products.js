import express from "express";
import {
  CreateProduct,
  GetAllProduct,
  GetByIdProduct,
  RemoveProduct,
  UpdateProduct,
} from "../contronllers/product.js";
import { uploadCloud } from "../models/upload.js";

const Products = express.Router();

Products.get("/products", GetAllProduct);
Products.get("/products/:slug", GetByIdProduct);
Products.post("/products", uploadCloud.any(), CreateProduct);
Products.put("/products/:slug", UpdateProduct);
Products.delete("/products/:id", RemoveProduct);

export default Products;
