import { Schema, model } from "mongoose";

const userSchema = Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    track: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
