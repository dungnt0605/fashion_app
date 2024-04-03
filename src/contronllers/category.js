import Categories from "../models/category.js";
import { StatusCodes } from "http-status-codes";
import slugify from "slugify";

export const getAllCategories = async (req, res) => {
  try {
    const category = await Categories.find({});
    if (category.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Không có Sản Phẩm nào :(((" });
    }
    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const getByIdCategories = async (req, res) => {
  try {
    const category = await Categories.findOne({ _id: req.params.id });
    if (category.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Không có Sản Phẩm nào :(((" });
    }
    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const CreateCategories = async (req, res) => {
  try {
    req.body.slug = slugify(req.body.name, "_");
    const category = await Categories.create(req.body);

    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const UpdateCategories = async (req, res) => {
  try {
    const category = await Categories.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );

    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const RemoveCategories = async (req, res) => {
  try {
    const category = await Categories.findOneAndDelete({
      slug: req.params.slug,
    });

    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
