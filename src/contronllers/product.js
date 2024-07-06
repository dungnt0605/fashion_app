import Products from "../models/product.js";
import slugify from "slugify";
import multer from "multer";
import cloudinary from "cloudinary";
import { StatusCodes } from "http-status-codes";

export const GetAllProduct = async (req, res) => {
  try {
    const product = await Products.find({});
    if (product.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Không Có  sản phẩm nào :((" });
    }
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const CreateProduct = async (req, res) => {
  try {
    req.body.slug = slugify(req.body.name, "_");

    const product = await Products.create(req.body);
    // const tmpimg = req.files[0].path;
    // const image = await cloudinary.uploader.upload(tmpimg);
    // req.body.image = image;
    // res.status(200).send({
    //   status: 200,
    //   message: "Upload Image successfully",
    //   image: image.url,
    // });
    // if (product.length === 0) {
    //   return res
    //     .status(StatusCodes.NOT_FOUND)
    //     .json({ message: "Không Có  sản phẩm nào :((" });
    // }
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const GetByIdProduct = async (req, res) => {
  try {
    const product = await Products.findOne({ slug: req.params.slug });
    if (product.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Không Có  sản phẩm nào :((" });
    }
    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const UpdateProduct = async (req, res) => {
  try {
    const product = await Products.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );

    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const RemoveProduct = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);

    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
