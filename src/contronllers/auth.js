import { StatusCodes } from "http-status-codes";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { Users } from "../models/user.js";
import { loginSchema, registerSchema } from "../schemas/auth.Shema.js";
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const { error } = registerSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(StatusCodes.BAD_REQUEST).json({ messages: errors });
    }
    const user = await Users.findOne({ email });
    if (user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Email đã tồn tại !!" });
    }
    const hashPass = await bcryptjs.hash(password, 10);
    const newUser = await Users.create({
      username,
      email,
      password: hashPass,
    });
    const token = jwt.sign({ userId: newUser }, "hehehe", { expiresIn: "1h" });
    newUser.password = undefined;

    return res.status(StatusCodes.OK).json({
      message: "Đăng ký thành Công ^^ ",
      newUser,
      token,
    });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ Register: error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = loginSchema.validate(req.body, { abortEarly: false });
    // console.log(error.details[0].message);
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(StatusCodes.BAD_REQUEST).json({ messages: errors });
    }
    const checkEmail = await Users.findOne({ email });
    if (!checkEmail) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ messages: "Sai Email !!" });
    }
    const checkPassword = await bcryptjs.compare(password, checkEmail.password);
    if (!checkPassword) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ messages: "Sai Password !!" });
    }
    const token = jwt.sign({ userId: checkEmail }, "hehehe", {
      expiresIn: "1h",
    });
    return res
      .status(StatusCodes.OK)
      .json({ messages: "Đăng nhập thành công ^^", checkEmail, token });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ messages: error });
  }
};
