import { check, validationResult } from "express-validator";

// -- validations for creating person's details -- //
export const validateInputs = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Person's name is required")
    .isString()
    .withMessage("Name should be string!"),

  check("role")
    .not()
    .isEmpty()
    .withMessage("Person's role is required")
    .isString()
    .withMessage("Role should be string!"),
  check("email")
    .not()
    .isEmpty()
    .withMessage("Person's email is required")
    .isEmail()
    .withMessage("Please use a valid email"),
];

export const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};
