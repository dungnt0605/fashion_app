import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      minlength: 3,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Users = mongoose.model("Users", UserSchema);