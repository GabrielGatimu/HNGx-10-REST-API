import express from "express";
import {
  createPerson,
  getPerson,
  updatePerson,
  deletePerson,
} from "../controllers/user.controller.js";
import {
  validateInputs,
  validateResult,
} from "../middleware/validateInput.middleware.js";

const router = express.Router();

router.post("/", validateInputs, validateResult, createPerson);
router
  .route("/:user_id")
  .get(getPerson)
  .put(validateInputs, validateResult, updatePerson)
  .delete(deletePerson);

export default router;
