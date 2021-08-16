const { check } = require("express-validator");

exports.userValidationRules = [
  check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Your email looks funky ..."),
  check("password")
    .isLength({ min: 4 })
    .withMessage("Minimum password length is 4"),
  check("firstName")
    .exists()
    .trim()
    .escape()
    .withMessage("Please give us your first name."),
];
