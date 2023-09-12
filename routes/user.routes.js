import express from "express";
import {
  createUserProfile,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", createUserProfile);
router
  .route("/:user_id")
  .get(getUserProfile)
  .put(updateUserProfile)
  .delete(deleteUserProfile);

export default router;
