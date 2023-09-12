import express from "express";
import {
  createUserProfile,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} from "../controllers/user.controller.js";
import {
  validateInputs,
  validateResult,
} from "../middleware/validateInput.middleware.js";

const router = express.Router();

router.post("/", validateInputs, validateResult, createUserProfile);
router
  .route("/:user_id")
  .get(getUserProfile)
  .put(updateUserProfile)
  .delete(deleteUserProfile);

export default router;
