const express = require("express");
const { check, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
const User = require("../model/User");

//localhost:3000/user/signup
router.post(
  "/signup",
  [
    check("username", "Please enter a user name").notEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({ min: 4 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      //Check if user already exists
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ msg: "User Already Exists" });
      }

      //Create a new user
      user = new User({
        username,
        email,
        password, //"password": "1234"
      });

      //hash the password for the new user in order to save to DB
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await User.save();

      //Create a payload with user ID in order to create JWT
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, "randomString", { expiresIn: "1h" }, (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });
      });
    } catch (error) {
      res.status(500).send("Error in Saving!");
    }
  }
);

module.exports = router;
