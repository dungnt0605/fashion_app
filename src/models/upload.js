import multer from "multer";
import cloudinary from "cloudinary";
import os from "os";
const storge = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./upload");
  },
  filename: (req, res, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

export const upload = multer({ storage: storge });

///
cloudinary.v2.config({
  cloud_name: "dmhrcr3bc",
  api_key: "194115265985526",
  api_secret: "pO4uY9M7GbMtJNdU52JjiMb8jJ8",
  secure: true,
});
export const uploadCloud = multer({ dest: os.tmpdir() });
