import express from "express";
import { uploadCloud } from "../models/upload.js";
import { UploadImage } from "../contronllers/uploadImage";

const Upload = express.Router();
Upload.post("/upload", uploadCloud.any(), UploadImage);

export default Upload;
