const express = require("express");
const router = express.Router();

const { validateInputs } = require("../middleware/validator");
const { userValidationRules } = require("../lib/validation/userRules");

const auth = require("../middleware/auth");

const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  addUser,
  loginUser,
  userAuth,
} = require("../controllers/usersController");

router
  .route("/")
  .get(getUsers)
  .post(validateInputs(userValidationRules), addUser);

router.route("/login").post(loginUser);

router.get("/me", auth, userAuth);

router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);

module.exports = router;
