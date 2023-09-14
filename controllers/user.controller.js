import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";

// @ description  -->  Create a new person
// @ route        -->  POST /api
const createPerson = asyncHandler(async (req, res) => {
  const { name, track } = req.body;

  const userExists = await User.findOne({ name });
  if (userExists) {
    res.status(400);
    throw new Error("Name already taken. Try another one");
  }

  const newUser = await User.create({
    name,
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
const getPerson = asyncHandler(async (req, res) => {
  const { user_id } = req.params;

  const user = await User.findOne({ name: user_id });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error("No such person found!");
  }
});

// @ description  -->  Update person profile
// @ route        -->  PUT /api/user_id
const updatePerson = asyncHandler(async (req, res) => {
  const { user_id } = req.params;
  const { name, track } = req.body;

  const user = await User.findOne({ name: user_id });

  if (user) {
    user.name = name || user.name;
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
const deletePerson = asyncHandler(async (req, res) => {
  const { user_id } = req.params;

  const user = await User.deleteOne({ name: user_id });
  if (user) {
    res.status(200).json({ message: "Person deleted successfully" });
  } else {
    res.status(404);
    throw new Error("No such person found!");
  }
});

export { createPerson, getPerson, updatePerson, deletePerson };
