import express from "express";
import { login, register } from "../contronllers/auth.js";

const auth = express.Router();

auth.post("/register", register);
auth.post("/login", login);

export default auth;
