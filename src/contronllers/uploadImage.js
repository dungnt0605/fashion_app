import multer from "multer";
import cloudinary from "cloudinary";
export const UploadImage = async (req, res) => {
  try {
    const tmpimg = req.files[0].path;
    const image = await cloudinary.uploader.upload(tmpimg);
    res.status(200).send({
      status: 200,
      message: "Upload Image successfully",
      image: image.url,
    });
  } catch (error) {
    return res.send({ status: 500, error });
  }
};
