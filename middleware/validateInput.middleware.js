import { check, validationResult } from "express-validator";

// -- validations for creating person's details -- //
export const validateInputs = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Person's name is required")
    .isString()
    .withMessage("name should be string!"),

  check("track")
    .not()
    .isEmpty()
    .withMessage("Person's track is required")
    .isString()
    .withMessage("Track should be string!"),
];

export const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};
