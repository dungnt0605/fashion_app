import Joi from "joi";

export const registerSchema = Joi.object({
  username: Joi.string().min(3).trim().required(),
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(8).trim().required(),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().min(8).trim().required(),
});
