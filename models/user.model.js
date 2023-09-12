import { Schema, model } from "mongoose";

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      unique: false,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
