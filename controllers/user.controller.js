import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";

// @ description  -->  Create a new person
// @ route        -->  POST /api
const createUserProfile = asyncHandler(async (req, res) => {
  const { name, slack_name, track } = req.body;

  const userExists = await User.findOne({ slack_name });
  if (userExists) {
    res.status(400);
    throw new Error("Slack_name already taken. Try another one");
  }

  const newUser = await User.create({
    name,
    slack_name,
    track,
  });

  if (newUser) {
    res.status(201).json({
      message: "New person created successfully",
      details: newUser,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Person data");
  }
});

// @ description  -->  Get person profile
// @ route        -->  GET /api/user_id
const getUserProfile = asyncHandler(async (req, res) => {
  const { user_id } = req.params;

  const user = await User.findOne({ slack_name: user_id });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error("No such person found!");
  }
});

// @ description  -->  Update person profile
// @ route        -->  PUT /api/user_id
const updateUserProfile = asyncHandler(async (req, res) => {
  const { user_id } = req.params;
  const { name, slack_name, track } = req.body;

  const user = await User.findOne({ slack_name: user_id });

  if (user) {
    user.name = name || user.name;
    user.slack_name = slack_name || user.slack_name;
    user.track = track || user.track;

    const updatedUser = await user.save();
    res.status(200).json({
      message: "Person details updated",
      updated_person_details: updatedUser,
    });
  } else {
    res.status(404);
    throw new Error("No such person found!");
  }
});

// @ description  -->  Delete person profile
// @ route        -->  DELETE /api/user_id
const deleteUserProfile = asyncHandler(async (req, res) => {
  const { user_id } = req.params;

  const user = await User.deleteOne({ slack_name: user_id });
  if (user) {
    res.status(200).json({ message: "Person deleted successfully" });
  } else {
    res.status(404);
    throw new Error("No such person found!");
  }
});

export {
  createUserProfile,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
