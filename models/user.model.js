import { Schema, model } from "mongoose";

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slack_name: {
      type: String,
      unique: true,
      required: true,
    },
    track: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
